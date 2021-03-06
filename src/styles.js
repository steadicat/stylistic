import {rgba, url} from './functions';

function color(c) {
  if (Array.isArray(c)) {
    return rgba(...c);
  } else {
    return c;
  }
}

function px(n) {
  if (typeof n === 'string') return n;
  return (n || 0) + 'px';
}

export const styles = {
  alignContent: true,
  alignItems: true,
  alignSelf: true,
  all: true,
  animation: true,
  animationDelay: true,
  animationDirection: true,
  animationDuration: true,
  animationFillMode: true,
  animationIterationCount: true,
  animationName: true,
  animationPlayState: true,
  animationTimingFunction: true,
  backfaceVisibility: true,
  background: true,
  backgroundAttachment: true,
  backgroundBlendMode: true,
  backgroundClip: true,
  backgroundColor: color,
  backgroundImage: url,
  backgroundOrigin: true,
  backgroundPosition: true,
  backgroundRepeat: true,
  backgroundSize: true,
  blockSize: true,
  border: true,
  borderBlockEnd: true,
  borderBlockEndColor: color,
  borderBlockEndStyle: true,
  borderBlockEndWidth: true,
  borderBlockStart: true,
  borderBlockStartColor: color,
  borderBlockStartStyle: true,
  borderBlockStartWidth: true,
  borderBottom: true,
  borderBottomColor: color,
  borderBottomLeftRadius: true,
  borderBottomRightRadius: true,
  borderBottomStyle: true,
  borderBottomWidth: true,
  borderCollapse: true,
  borderColor: color,
  borderImage: true,
  borderImageOutset: true,
  borderImageRepeat: true,
  borderImageSlice: true,
  borderImageSource: true,
  borderImageWidth: true,
  borderInlineEnd: true,
  borderInlineEndColor: color,
  borderInlineEndStyle: true,
  borderInlineEndWidth: true,
  borderInlineStart: true,
  borderInlineStartColor: color,
  borderInlineStartStyle: true,
  borderInlineStartWidth: true,
  borderLeft: true,
  borderLeftColor: color,
  borderLeftStyle: true,
  borderLeftWidth: true,
  borderRadius: true,
  borderRight: true,
  borderRightColor: color,
  borderRightStyle: true,
  borderRightWidth: true,
  borderSpacing: true,
  borderStyle: true,
  borderTop: true,
  borderTopColor: color,
  borderTopLeftRadius: true,
  borderTopRightRadius: true,
  borderTopStyle: true,
  borderTopWidth: true,
  borderWidth: true,
  bottom: true,
  boxDecorationBreak: true,
  boxShadow: true,
  boxSizing: true,
  breakAfter: true,
  breakBefore: true,
  breakInside: true,
  captionSide: true,
  clear: true,
  clip: true,
  clipPath: true,
  color,
  columnCount: true,
  columnFill: true,
  columnGap: true,
  columnRule: true,
  columnRuleColor: color,
  columnRuleStyle: true,
  columnRuleWidth: true,
  columns: true,
  columnSpan: true,
  columnWidth: true,
  content: true,
  counterIncrement: true,
  counterReset: true,
  cursor: true,
  direction: true,
  display: true,
  emptyCells: true,
  filter: true,
  flex: true,
  flexBasis: true,
  flexDirection: true,
  flexFlow: true,
  flexGrow: true,
  flexShrink: true,
  flexWrap: true,
  float: true,
  font: true,
  fontFamily: true,
  fontFeatureSettings: true,
  fontKerning: true,
  fontLanguageOverride: true,
  fontSize: true,
  fontSizeAdjust: true,
  fontStyle: true,
  fontSynthesis: true,
  fontVariantAlternates: true,
  fontVariantCaps: true,
  fontVariantEastAsian: true,
  fontVariantLigatures: true,
  fontVariantNumeric: true,
  fontVariantPosition: true,
  fontWeight: true,
  height: true,
  hyphens: true,
  imageOrientation: true,
  imageRendering: true,
  imeMode: true,
  inherit: true,
  initial: true,
  inlineSize: true,
  isolation: true,
  justifyContent: true,
  left: true,
  letterSpacing: px,
  lineBreak: true,
  lineHeight: px,
  listStyle: true,
  listStyleImage: true,
  listStylePosition: true,
  listStyleType: true,
  margin: true,
  marginBlockEnd: true,
  marginBlockStart: true,
  marginBottom: true,
  marginInlineEnd: true,
  marginInlineStart: true,
  marginLeft: true,
  marginRight: true,
  marginTop: true,
  mask: true,
  maskType: true,
  maxBlockSize: true,
  maxHeight: true,
  maxInlineSize: true,
  maxWidth: true,
  minBlockSize: true,
  minHeight: true,
  minInlineSize: true,
  minWidth: true,
  mixBlendMode: true,
  objectFit: true,
  objectPosition: true,
  offsetBlockEnd: true,
  offsetBlockStart: true,
  offsetInlineEnd: true,
  offsetInlineStart: true,
  opacity: true,
  order: true,
  orphans: true,
  outline: true,
  outlineColor: color,
  outlineOffset: true,
  outlineStyle: true,
  outlineWidth: true,
  overflow: true,
  overflowWrap: true,
  overflowX: true,
  overflowY: true,
  padding: true,
  paddingBlockEnd: true,
  paddingBlockStart: true,
  paddingBottom: true,
  paddingInlineEnd: true,
  paddingInlineStart: true,
  paddingLeft: true,
  paddingRight: true,
  paddingTop: true,
  pageBreakAfter: true,
  pageBreakBefore: true,
  pageBreakInside: true,
  perspective: true,
  perspectiveOrigin: true,
  pointerEvents: true,
  position: true,
  quotes: true,
  resize: true,
  right: true,
  rubyAlign: true,
  rubyPosition: true,
  scrollBehavior: true,
  scrollSnapCoordinate: true,
  scrollSnapDestination: true,
  scrollSnapPointsX: true,
  scrollSnapPointsY: true,
  scrollSnapType: true,
  scrollSnapTypeX: true,
  scrollSnapTypeY: true,
  shapeImageThreshold: true,
  shapeMargin: true,
  shapeOutside: true,
  tableLayout: true,
  tabSize: true,
  textAlign: true,
  textAlignLast: true,
  textCombineUpright: true,
  textDecoration: true,
  textDecorationColor: color,
  textDecorationLine: true,
  textDecorationStyle: true,
  textIndent: true,
  textOrientation: true,
  textOverflow: true,
  textRendering: true,
  textShadow: true,
  textTransform: true,
  textUnderlinePosition: true,
  top: true,
  touchAction: true,
  transform: true,
  transformBox: true,
  transformOrigin: true,
  transformStyle: true,
  transition: true,
  transitionDelay: true,
  transitionDuration: true,
  transitionProperty: true,
  transitionTimingFunction: true,
  unicodeBidi: true,
  unset: true,
  verticalAlign: true,
  visibility: true,
  WebkitFontSmoothing: true,
  whiteSpace: true,
  widows: true,
  width: true,
  willChange: true,
  wordBreak: true,
  wordSpacing: true,
  wordWrap: true,
  writingMode: true,
  zIndex: true,
};

export const shorthand = {
  background: true,
  font: true,
  margin: true,
  border: true,
  borderTop: true,
  borderRight: true,
  borderBottom: true,
  borderLeft: true,
  borderWidth: true,
  borderColor: true,
  borderStyle: true,
  transition: true,
  animation: true,
  transform: true,
  padding: true,
  listStyle: true,
  borderRadius: true,
};
