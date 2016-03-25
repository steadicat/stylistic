import {getTransform} from './transforms';
import {styles, shorthand} from './styles';

export function extract(props) {
  const style = props.style || {};
  const attrs = {};

  let keys = Object.keys(props);

  // Make sure the order is consistent
  keys = keys.sort();

  keys.forEach(function(prop) {
    const val = props[prop];
    if (val === undefined || val === null) return;

    if (!styles[prop]) {
      attrs[prop] = val;
    } else {
      if (typeof styles[prop] === 'function') {
        style[prop] = styles[prop](val);
      } else {
        style[prop] = val;
      }

      if (process.env.NODE_ENV !== 'production') {
        if (shorthand[prop]) {
          for (let i = 0; i < keys.length; i++) {
            if (prop === keys[i]) continue;
            if (keys[i].substring(0, prop.length) === prop) {
              /* eslint no-console: 0 */
              console.warn(`You are using shorthand property ${prop} and regular property ${keys[i]} on the same element. This is bad practice, and may cause unintended consequences when the properties are reordered.`);
              break;
            }
          }
        }
      }
    }
  });

  const {transform, attributes} = getTransform(attrs);
  transform && (style.transform = transform);
  attributes.style = style;
  return attributes;
}
