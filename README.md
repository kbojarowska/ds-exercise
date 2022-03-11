# Buttons

---

The aim of this exercise is to create functional button. It contains three sizes of buttons with five states (default, hovered, pressed, focused and disabled)

To see the result clone this repository and start app by `yarn start` command in your terminal or [click here to see the live demo](https://codepen.io/kbojarowska/pen/bGabMNJ).

---

## Technical Details

### Buttons

The default button element is 32 points (pt) high and has got default, hovered, pressed and focused states.

The `.button` class can be used on:

```html
<a class='button'>anchor elements
<button>buttons
```
To set button as disabled element write `disabled` next to the name of element:

```html
<button disabled>This button is disabled</button>
<a disabled class='button'>This anchor element is disabled</a>
```

There are three sizes of buttons:
* big - 40 points (pt) high
* normal, which is default size of button - 32 points (pt) high
* small - 24 points (pt) high


### Colors

The CSS file contains of color pallete.

* classic blue tint 1
* classic blue tint 2
* classic blue
* classic blue shade 1
* classic blue shade 2

To use colors from color pallete, use variable name in the style of element.

```html
<p style='color: var(--classic-blue-t1)'>Text in classic blue tint 1 color</p>
```

Colors can be used in any element you want!

---