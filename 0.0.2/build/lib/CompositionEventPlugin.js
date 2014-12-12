define("kg/react/0.0.2/lib/CompositionEventPlugin",["./EventConstants","./EventPropagators","./ExecutionEnvironment","./ReactInputSelection","./SyntheticCompositionEvent","./getTextContentAccessor","./keyOf"],function(t,o,e){"use strict";function n(t){switch(t){case v.topCompositionStart:return S.compositionStart;case v.topCompositionEnd:return S.compositionEnd;case v.topCompositionUpdate:return S.compositionUpdate}}function i(t,o){return t===v.topKeyDown&&o.keyCode===y}function s(t,o){switch(t){case v.topKeyUp:return-1!==C.indexOf(o.keyCode);case v.topKeyDown:return o.keyCode!==y;case v.topKeyPress:case v.topMouseDown:case v.topBlur:return!0;default:return!1}}function p(t){this.root=t,this.startSelection=u.getSelection(t),this.startValue=this.getText()}var r=t("./EventConstants"),a=t("./EventPropagators"),c=t("./ExecutionEnvironment"),u=t("./ReactInputSelection"),d=t("./SyntheticCompositionEvent"),l=t("./getTextContentAccessor"),m=t("./keyOf"),C=[9,13,27,32],y=229,h=c.canUseDOM&&"CompositionEvent"in window,E=!h||"documentMode"in document&&document.documentMode>8&&document.documentMode<=11,v=r.topLevelTypes,g=null,S={compositionEnd:{phasedRegistrationNames:{bubbled:m({onCompositionEnd:null}),captured:m({onCompositionEndCapture:null})},dependencies:[v.topBlur,v.topCompositionEnd,v.topKeyDown,v.topKeyPress,v.topKeyUp,v.topMouseDown]},compositionStart:{phasedRegistrationNames:{bubbled:m({onCompositionStart:null}),captured:m({onCompositionStartCapture:null})},dependencies:[v.topBlur,v.topCompositionStart,v.topKeyDown,v.topKeyPress,v.topKeyUp,v.topMouseDown]},compositionUpdate:{phasedRegistrationNames:{bubbled:m({onCompositionUpdate:null}),captured:m({onCompositionUpdateCapture:null})},dependencies:[v.topBlur,v.topCompositionUpdate,v.topKeyDown,v.topKeyPress,v.topKeyUp,v.topMouseDown]}};p.prototype.getText=function(){return this.root.value||this.root[l()]},p.prototype.getData=function(){var t=this.getText(),o=this.startSelection.start,e=this.startValue.length-this.startSelection.end;return t.substr(o,t.length-e-o)};var w={eventTypes:S,extractEvents:function(t,o,e,r){var c,u;if(h?c=n(t):g?s(t,r)&&(c=S.compositionEnd):i(t,r)&&(c=S.compositionStart),E&&(g||c!==S.compositionStart?c===S.compositionEnd&&g&&(u=g.getData(),g=null):g=new p(o)),c){var l=d.getPooled(c,e,r);return u&&(l.data=u),a.accumulateTwoPhaseDispatches(l),l}}};e.exports=w});