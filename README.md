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
![Button default state](https://i.ibb.co/W399ksX/opera-r-AKlcl-Jt-On.png)

Hovered:
![Button hovered state](https://i.ibb.co/52mDBvx/opera-au-IXy-EB5y-H.png)

Pressed and focused:
![Button pressed and focused state](https://i.ibb.co/mC9JQb6/opera-ud9-WSz9t-TG.png)

Disabled:
![Button disabled state](https://i.ibb.co/719zHDG/opera-a-Da-Fta3-FDX.png)

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