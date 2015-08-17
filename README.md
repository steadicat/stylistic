# Stylistic

A small library to extract style and CSS transform declarations from a React props object into a style object, with some helpful conversions along the way.

For example:

```js
import {getStyle} from 'stylistic';

getStyle({
  id: 'myElement',
  onClick: onClickHandler,
  marginTop: 12,
  translateY: 24,
});

// Returns:

{
  attributes: {
    id: 'myElement',
    onClick: onClickHandler,
  },
  style: {
    marginTop: 12,
    transform: 'translate(0, 24px)',
  }
}
```

**Note**: this is a work-in-progress. CSS properties will be added as needed or as requested. Support for browser prefixing is coming.

## Supported CSS properties

 - backgroundColor (`[r, g, b, a]` arrays supported)
 - backgroundImage (just use path/URL directly, no need to wrap it in `url()`)
 - backgroundPosition
 - backgroundRepeat
 - backgroundSize
 - borderBottomColor (`[r, g, b, a]` arrays supported)
 - borderBottomStyle
 - borderBottomWidth
 - borderColor (`[r, g, b, a]` arrays supported)
 - borderLeftColor (`[r, g, b, a]` arrays supported)
 - borderLeftStyle
 - borderLeftWidth
 - borderRadius
 - borderRightColor (`[r, g, b, a]` arrays supported)
 - borderRightStyle
 - borderRightWidth
 - borderStyle
 - borderTopColor (`[r, g, b, a]` arrays supported)
 - borderTopStyle
 - borderTopWidth
 - borderWidth
 - bottom
 - boxSizing
 - color (`[r, g, b, a]` arrays supported)
 - cursor
 - display
 - float
 - fontFamily
 - fontSize
 - fontStyle
 - fontWeight
 - height
 - left
 - letterSpacing (assumes pixels, no need to add `px`)
 - lineHeight (assumes pixels, no need to add `px`)
 - marginBottom
 - marginLeft
 - marginRight
 - marginTop
 - maxHeight
 - maxWidth
 - minHeight
 - minWidth
 - opacity
 - outline
 - overflow
 - paddingBottom
 - paddingLeft
 - paddingRight
 - paddingTop
 - pointerEvents
 - position
 - right
 - textAlign
 - textDecoration
 - textOverflow
 - textRendering
 - top
 - verticalAlign
 - WebkitFontSmoothing
 - whiteSpace
 - width

## Supported transform properties

 - translateX
 - translateY
 - translateZ
 - scaleX
 - scaleY
 - rotateX
 - rotateY
 - rotateZ

