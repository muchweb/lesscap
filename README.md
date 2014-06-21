# lesscap

Add LESSHat mixins to your LESS. Also known as the first CSS pre-preprocessor.

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

div {
	@gradient-colour: #3d6d1f;
	background-image: linear-gradient(to bottom, @gradient-colour 0%, saturate(@gradient-colour, 10%) 100%);
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

div {
	@gradient-colour: #3d6d1f;
	.lh-background-image(linear-gradient(to bottom, @gradient-colour 0%, saturate(@gradient-colour, 10%) 100%));
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
div {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48bGluZWFyR3JhZGllbnQgaWQ9Imxlc3NoYXQtZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMzZDZkMWYiIHN0b3Atb3BhY2l0eT0iMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzNiNzQxOCIgc3RvcC1vcGFjaXR5PSIxIi8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2xlc3NoYXQtZ2VuZXJhdGVkKSIgLz48L3N2Zz4=);
  background-image: -webkit-linear-gradient(top, #3d6d1f 0%, #3b7418 100%);
  background-image: -moz-linear-gradient(top, #3d6d1f 0%, #3b7418 100%);
  background-image: -o-linear-gradient(top, #3d6d1f 0%, #3b7418 100%);
  background-image: linear-gradient(to bottom, #3d6d1f 0%, #3b7418 100%);
}
```

## Requirements

 - Indent your style with tabs
 - One property per line