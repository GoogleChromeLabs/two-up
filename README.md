# <two-up>

A web component to compare two DOM elements

## Usage

```sh
npm install --save-dev two-up-element
```

```html
<two-up>
  <div>This appears on one side</div>
  <div>This appears on the other</div>
</two-up>
```

Now the user can slide between the two.

## API

```html
<two-up class="my-two-up">
  <div>…</div>
  <div>…</div>
</two-up>
<script>
  const twoUp = document.querySelector('.my-two-up');
</script>
```

### Attributes

```html
<two-up legacy-clip-compat></two-up>
```

Boolean attribute that enables Edge support. The downside is the elements within the `<two-up>` become absolutely positioned. This is because CSS `clip` is used rather than `clip-path`.

This can also be get/set via the boolean property `twoUp.legacyClipCompat`.

```html
<two-up orientation="horizontal"></two-up>
```

…or `"vertical"`. The direction the handle moves.

This can also be get/set via the property `twoUp.orientation`.

### CSS Custom Properties

```css
.my-two-up {
  /* Color of the track & thumb */
  --accent-colour: #777;
  /* Or you can set the two independently: */
  --track-color: #777;
  --thumb-color: #777;
  /* Background of the thumb */
  --thumb-background: #fff;
  /* Size of the thumb */
  --thumb-size: 62px;
  /* Thickness of the bar */
  --bar-size: 6px;
  /* Touch-thickness of the bar */
  --bar-touch-size: 30px;
}
```

## Demo

TODO.

## Files

* `lib/index.ts` - Original TypeScript.
* `dist/two-up.mjs` - JS module. Default exports `TwoUp`.
* `dist/two-up.js` - Plain JS. Exposes `TwoUp` on the global.
* `dist/two-up-min.js` - Minified plain JS. 2.4k gzipped.
