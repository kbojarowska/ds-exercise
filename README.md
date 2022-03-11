# Buttons

---

The aim of this exercise is to create functional button. It contains three sizes of buttons with five states (default, hovered, pressed, focused and disabled)

To see the result clone this repository and start app by `yarn start` command in your terminal or [click here to see the live demo](https://codepen.io/kbojarowska/pen/bGabMNJ).

---

## Technical Details

### Buttons

The default button element is 32 points (pt) high and has got default, hovered, pressed and focused states.

Button states:

Default:
![Button default state](https://ibb.co/hM55BCN)

Hovered:
![Button hovered state](https://ibb.co/9G6Xs23)

Pressed and focused:
![Button pressed and focused state](https://ibb.co/fYkMmq4)

Disabled:
![Button disabled state](https://ibb.co/9rMvJ0q)

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
Button size       | Hight         | Font size
----------------- | ------------- | -----------
Big               | 40 pt         | 16 pt
Normal (default)  | 32 pt         | 14 pt
Small             | 24 pt         | 12 pt

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