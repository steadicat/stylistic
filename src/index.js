import {getTransform} from './transforms';
import styles from './styles';

export function extract(props) {
  const style = props.style || {};
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
