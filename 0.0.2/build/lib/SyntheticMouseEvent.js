define("kg/react/0.0.2/lib/SyntheticMouseEvent",["./SyntheticUIEvent","./ViewportMetrics","./getEventModifierState"],function(e,t,n){"use strict";function l(e,t,n){r.call(this,e,t,n)}var r=e("./SyntheticUIEvent"),i=e("./ViewportMetrics"),c=e("./getEventModifierState"),u={screenX:null,screenY:null,clientX:null,clientY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:c,button:function(e){var t=e.button;return"which"in e?t:2===t?2:4===t?1:0},buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},pageX:function(e){return"pageX"in e?e.pageX:e.clientX+i.currentScrollLeft},pageY:function(e){return"pageY"in e?e.pageY:e.clientY+i.currentScrollTop}};r.augmentClass(l,u),n.exports=l});