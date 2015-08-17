import {translate, translate3d, scale} from './functions';

const properties = {
  translateX: true,
  translateY: true,
  translateZ: true,
  scaleX: true,
  scaleY: true,
  rotateX: true,
  rotateY: true,
  rotateZ: true,
};


export function getTransformFunction({
  translateX: tx,
  translateY: ty,
  translateZ: tz,
  scaleX: sx,
  scaleY: sy,
  rotateX: rx,
  rotateY: ry,
  rotateZ: rz,
}) {
  const transforms = [];
  if (tz !== undefined) {
    transforms.push(translate3d(tx, ty, tz));
  } else if (tx !== undefined || ty !== undefined) {
    transforms.push(translate(tx, ty));
  }
  if (sx !== undefined || sy !== undefined) {
    transforms.push(scale(sx, sy));
  }
  if (rz !== undefined) {
    transforms.push(translate3d(rx, ry, rz));
  } else if (rx !== undefined || ry !== undefined) {
    transforms.push(translate(rx, ry));
  }
  return transforms.join(' ');
}

export function getTransform(props) {
  const transformProps = {};
  const attributes = {};

  Object.keys(props).forEach(function(prop) {
    const val = props[prop];
    if (val === undefined || val === null) return;
    if (!properties[prop]) {
      attributes[prop] = val;
    } else {
      transformProps[prop] = val;
    }
  });

  const transform = getTransformFunction(transformProps);
  return {transform, attributes};
}
