# Buttons

---

The aim of this exercise is to create functional button. It contains three sizes of buttons with five states (default, hovered, pressed, focused and disabled)

To see the result clone this repository and start app by `yarn start` command in your terminal or [click here to see the live demo](https://codepen.io/kbojarowska/pen/bGabMNJ).

---

## Technical Details

### Buttons

Button states:

Default:\
![Button default state](https://i.ibb.co/n6yP8xj/opera-XCQLZU329-N.png)

Hovered:\
![Button hovered state](https://i.ibb.co/WcHS9dt/opera-Nk4-Vx2d-Tpl.png)

Pressed and focused:\
![Button pressed and focused state](https://i.ibb.co/pb1nMGb/opera-39lc7-Eclqw.png)

Disabled:\
![Button disabled state](https://i.ibb.co/tqPcFhV/opera-i1-Acg-Z7m-CW.png)

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

* ![classic blue tint 2 color](https://i.ibb.co/5cRDGYj/opera-Pb-JU0kh8lg.png) classic blue tint 2
* ![classic blue tint 1 color](https://i.ibb.co/sCjxm1S/opera-4n-XWavzyok.png) classic blue tint 1
* ![classic blue](https://i.ibb.co/VqhWBN8/opera-vj-Kl5-OHdkq.png) classic blue
* ![classic blue shade 1 color](https://i.ibb.co/k6GW22B/opera-WEn-EFLo-Fr-X.png) classic blue shade 1
* ![classic blue shade 2 color](https://i.ibb.co/23D1MH4/opera-rjqv0woa0l.png) classic blue shade 2

To use colors from color pallete, use variable name in the style of element.

```html
<p style='color: var(--classic-blue-t1)'>Text in classic blue tint 1 color</p>
```

Colors can be used in any element you want!

---