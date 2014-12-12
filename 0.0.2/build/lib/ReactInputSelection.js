define("kg/react/0.0.2/lib/ReactInputSelection",["./ReactDOMSelection","./containsNode","./focusNode","./getActiveElement"],function(e,t,n){"use strict";function c(e){return a(document.documentElement,e)}var o=e("./ReactDOMSelection"),a=e("./containsNode"),i=e("./focusNode"),l=e("./getActiveElement"),s={hasSelectionCapabilities:function(e){return e&&("INPUT"===e.nodeName&&"text"===e.type||"TEXTAREA"===e.nodeName||"true"===e.contentEditable)},getSelectionInformation:function(){var e=l();return{focusedElem:e,selectionRange:s.hasSelectionCapabilities(e)?s.getSelection(e):null}},restoreSelection:function(e){var t=l(),n=e.focusedElem,o=e.selectionRange;t!==n&&c(n)&&(s.hasSelectionCapabilities(n)&&s.setSelection(n,o),i(n))},getSelection:function(e){var t;if("selectionStart"in e)t={start:e.selectionStart,end:e.selectionEnd};else if(document.selection&&"INPUT"===e.nodeName){var n=document.selection.createRange();n.parentElement()===e&&(t={start:-n.moveStart("character",-e.value.length),end:-n.moveEnd("character",-e.value.length)})}else t=o.getOffsets(e);return t||{start:0,end:0}},setSelection:function(e,t){var n=t.start,c=t.end;if("undefined"==typeof c&&(c=n),"selectionStart"in e)e.selectionStart=n,e.selectionEnd=Math.min(c,e.value.length);else if(document.selection&&"INPUT"===e.nodeName){var a=e.createTextRange();a.collapse(!0),a.moveStart("character",n),a.moveEnd("character",c-n),a.select()}else o.setOffsets(e,t)}};n.exports=s});