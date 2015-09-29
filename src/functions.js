/* Argument Types */

function px(n) {
  if (/%$/.test(n)) return n;
  return (n || 0) + 'px';
}

function ratio(n) {
  return n;
}

function string(s) {
  return s;
}

function colorComponent(x) {
  return x < 0 ? 0 : x > 255 ? 255 : Math.round(x);
}

function alpha(x=1) {
  return x < 0 ? 0 : x > 1 ? 1 : x;
}

function deg(n) {
  return (n || 0) + 'deg';
}

function cssFunction(name, ...params) {
  return function(...values) {
    return `${name}(${params.map((p, i) => p(values[i]))})`;
  }
}

/* Functions */

export const url = cssFunction('url', string);
export const rgb = cssFunction('rgb', colorComponent, colorComponent, colorComponent);
export const rgba = cssFunction('rgba', colorComponent, colorComponent, colorComponent, alpha);
export const translate = cssFunction('translate', px, px);
export const translate3d = cssFunction('translate3d', px, px, px);
export const translateX = cssFunction('translateX', px);
export const translateY = cssFunction('translateY', px);
export const translateZ = cssFunction('translateZ', px);
export const scale = cssFunction('scale', ratio, ratio);
export const scale3d = cssFunction('scale3d', ratio, ratio, ratio);
export const scaleX = cssFunction('scaleX', ratio);
export const scaleY = cssFunction('scaleY', ratio);
export const scaleZ = cssFunction('scaleZ', ratio);
export const rotate = cssFunction('rotate', deg);
export const rotate3d = cssFunction('rotate3d', ratio, ratio, ratio, deg);
export const rotateX = cssFunction('rotateX', deg);
export const rotateY = cssFunction('rotateY', deg);
export const rotateZ = cssFunction('rotateZ', deg);
export const skew = cssFunction('skew', deg, deg);
export const skewX = cssFunction('skewX', deg);
export const skewY = cssFunction('skewY', deg);

