import {getTransform} from './transforms';
import {rgba, url, px} from './functions';

function color(c) {
  if (Array.isArray(c)) {
    return rgba(...c);
  } else {
    return c;
  }
}

const styles = {
  backgroundColor: color,
  backgroundImage: url,
  backgroundPosition: true,
  backgroundRepeat: true,
  backgroundSize: true,
  borderBottomColor: color,
  borderBottomStyle: true,
  borderBottomWidth: true,
  borderColor: color,
  borderLeftColor: color,
  borderLeftStyle: true,
  borderLeftWidth: true,
  borderRadius: true,
  borderRightColor: color,
  borderRightStyle: true,
  borderRightWidth: true,
  borderStyle: true,
  borderTopColor: color,
  borderTopStyle: true,
  borderTopWidth: true,
  borderWidth: true,
  bottom: true,
  boxSizing: true,
  color: color,
  cursor: true,
  display: true,
  float: true,
  fontFamily: true,
  fontSize: true,
  fontStyle: true,
  fontWeight: true,
  height: true,
  left: true,
  letterSpacing: px,
  lineHeight: px,
  marginBottom: true,
  marginLeft: true,
  marginRight: true,
  marginTop: true,
  maxHeight: true,
  maxWidth: true,
  minHeight: true,
  minWidth: true,
  opacity: true,
  outline: true,
  overflow: true,
  paddingBottom: true,
  paddingLeft: true,
  paddingRight: true,
  paddingTop: true,
  pointerEvents: true,
  position: true,
  right: true,
  textAlign: true,
  textDecoration: true,
  textOverflow: true,
  textRendering: true,
  top: true,
  verticalAlign: true,
  WebkitFontSmoothing: true,
  whiteSpace: true,
  width: true,
};

export function extract(props) {
  const style = {};
  const attrs = {};

  Object.keys(props).forEach(function(prop) {
    const val = props[prop];
    if (val === undefined || val === null) return;
    if (!styles[prop]) {
      attrs[prop] = val;
    } else if (typeof styles[prop] === 'function') {
      style[prop] = styles[prop](val);
    } else if (styles[prop]) {
      style[prop] = val;
    }
  });

  const {transform, attributes} = getTransform(attrs);
  transform && (style.transform = transform);
  attributes.style = style;
  return attributes;
}
