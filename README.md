# lesscap

Automatically adding LESSHat mixins to LESS. Also known as the first CSS pre-preprocessor.

## Installation

```bash
npm install -g lesscap
```

## Usage

```bash
lesscap ./*.lesscap > styles.less
lessc styles.less > styles.css
```

## Example

`test.lesscap` input:

```
@import "./lesshat-prefixed";

body {
	font-size: 10px;
	keyframes: appearance, 0% { opacity: 0.5; } 100% { opacity: 1; };
	animation: appearance 2s ease;
}

a {
	color: blue;
	transition: color 1s ease;
	
	&:hover {
		color: lightblue;
	}
}
```

Will produce this LESS output:


```
@import "./lesshat-prefixed";

body {
	font-size: 10px;
	.lh-keyframes(~'appearance, 0% { opacity: 0.5; } 100% { opacity: 1; }');
	.lh-animation(appearance 2s ease);
}

a {
	color: blue;
	.lh-transition(color 1s ease);
	
	&:hover {
		color: lightblue;
	}
}
```

Which will compile into this CSS:

```css
body {
font-size: 10px;
-webkit-animation: appearance 2s ease;
-moz-animation: appearance 2s ease;
-o-animation: appearance 2s ease;
animation: appearance 2s ease;
}
body lesshat-selector {
  -lh-property: 0; } 
@-webkit-keyframes appearance{ 0% { opacity: 0.5; } 100% { opacity: 1; }}
@-moz-keyframes appearance{ 0% { opacity: 0.5; } 100% { opacity: 1; }}
@-o-keyframes appearance{ 0% { opacity: 0.5; } 100% { opacity: 1; }}
@keyframes appearance{ 0% { opacity: 0.5; } 100% { opacity: 1; };
}
a {
  color: blue;
  -webkit-transition: color 1s ease;
  -moz-transition: color 1s ease;
  -o-transition: color 1s ease;
  transition: color 1s ease;
}
a:hover {
  color: lightblue;
}

```

## Requirements

 - Indent your style with tabs
 - One property per line