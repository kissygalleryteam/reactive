define("kg/react/0.0.2/lib/ReactLegacyElement",["./ReactCurrentOwner","./invariant","./monitorCodeUse","./warning"],function(e,t,n){"use strict";function o(){if(d._isLegacyCallWarningEnabled){var e=i.current,t=e&&e.constructor?e.constructor.displayName:"";t||(t="Something"),u.hasOwnProperty(t)||(u[t]=!0,"production"!==process.env.NODE_ENV?y(!1,t+" is calling a React component directly. Use a factory or JSX instead. See: http://fb.me/react-legacyfactory"):null,p("react_legacy_factory_call",{version:3,name:t}))}}function r(e){var t=e.prototype&&"function"==typeof e.prototype.mountComponent&&"function"==typeof e.prototype.receiveComponent;if(t)"production"!==process.env.NODE_ENV?y(!1,"Did not expect to get a React class here. Use `Component` instead of `Component.type` or `this.constructor`."):null;else{if(!e._reactWarnedForThisType){try{e._reactWarnedForThisType=!0}catch(n){}p("react_non_component_in_jsx",{version:3,name:e.name})}"production"!==process.env.NODE_ENV?y(!1,"This JSX uses a plain function. Only React components are valid in React's JSX transform."):null}}function a(e){"production"!==process.env.NODE_ENV?y(!1,"Do not pass React.DOM."+e.type+' to JSX or createFactory. Use the string "'+e.type+'" instead.'):null}function c(e,t){if("function"==typeof t)for(var n in t)if(t.hasOwnProperty(n)){var o=t[n];if("function"==typeof o){var r=o.bind(t);for(var a in o)o.hasOwnProperty(a)&&(r[a]=o[a]);e[n]=r}else e[n]=o}}var i=e("./ReactCurrentOwner"),s=e("./invariant"),p=e("./monitorCodeUse"),y=e("./warning"),u={},l={},f={},d={};d.wrapCreateFactory=function(e){var t=function(t){return"function"!=typeof t?e(t):t.isReactNonLegacyFactory?("production"!==process.env.NODE_ENV&&a(t),e(t.type)):t.isReactLegacyFactory?e(t.type):("production"!==process.env.NODE_ENV&&r(t),t)};return t},d.wrapCreateElement=function(e){var t=function(t){if("function"!=typeof t)return e.apply(this,arguments);var n;return t.isReactNonLegacyFactory?("production"!==process.env.NODE_ENV&&a(t),n=Array.prototype.slice.call(arguments,0),n[0]=t.type,e.apply(this,n)):t.isReactLegacyFactory?(t._isMockFunction&&(t.type._mockedReactClassConstructor=t),n=Array.prototype.slice.call(arguments,0),n[0]=t.type,e.apply(this,n)):("production"!==process.env.NODE_ENV&&r(t),t.apply(null,Array.prototype.slice.call(arguments,1)))};return t},d.wrapFactory=function(e){"production"!==process.env.NODE_ENV?s("function"==typeof e,"This is suppose to accept a element factory"):s("function"==typeof e);var t=function(){return"production"!==process.env.NODE_ENV&&o(),e.apply(this,arguments)};return c(t,e.type),t.isReactLegacyFactory=l,t.type=e.type,t},d.markNonLegacyFactory=function(e){return e.isReactNonLegacyFactory=f,e},d.isValidFactory=function(e){return"function"==typeof e&&e.isReactLegacyFactory===l},d.isValidClass=function(e){return"production"!==process.env.NODE_ENV&&("production"!==process.env.NODE_ENV?y(!1,"isValidClass is deprecated and will be removed in a future release. Use a more specific validator instead."):null),d.isValidFactory(e)},d._isLegacyCallWarningEnabled=!0,n.exports=d});