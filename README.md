# Stylistic

A small library to extract style and CSS transform declarations from a React props object into a style object, with some helpful conversions along the way. See [stylistic-elements](https://github.com/steadicat/stylistic-elements) for the higher-level application of this.

For example:

```js
import {extract} from 'stylistic';

extract({
  id: 'myElement',
  onClick: onClickHandler,
  marginTop: 12,
  translateY: 24,
});

// Returns:

{
  id: 'myElement',
  onClick: onClickHandler,
  style: {
    marginTop: 12,
    transform: 'translate(0, 24px)',
  }
}
```

**Note**: this is a work-in-progress. Support for browser prefixing is coming.

## Supported CSS properties

All CSS properties should be supported. If I missed any, file a bug.

A few properties have special behaviors:

 - Colors can be provided as `[r, g, b, a]` arrays as well as standard CSS strings (this can be useful for animating).
 - `backgroundImage` takes a path/URL directly, no need to wrap it in `url()`.
 - `letterSpacing` and `lineHeight` assume pixels if you supply a number, no need to add `px`.

## Supported transform properties

 - `translateX`
 - `translateY`
 - `translateZ`
 - `scaleX`
 - `scaleY`
 - `rotateX`
 - `rotateY`
 - `rotateZ`

