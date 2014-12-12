define("kg/react/0.0.2/lib/ReactElementValidator",["./ReactElement","./ReactPropTypeLocations","./ReactCurrentOwner","./monitorCodeUse"],function(e,r,n){"use strict";function t(){var e=d.current;return e&&e.constructor.displayName||void 0}function a(e,r){e._store.validated||null!=e.key||(e._store.validated=!0,c("react_key_warning",'Each child in an array should have a unique "key" prop.',e,r))}function o(e,r,n){h.test(e)&&c("react_numeric_key_warning","Child objects should have non-numeric keys so ordering is preserved.",r,n)}function c(e,r,n,a){var o=t(),c=a.displayName,i=o||c,s=y[e];if(!s.hasOwnProperty(i)){s[i]=!0,r+=o?" Check the render method of "+o+".":" Check the renderComponent call using <"+c+">.";var l=null;n._owner&&n._owner!==d.current&&(l=n._owner.constructor.displayName,r+=" It was passed a child from "+l+"."),r+=" See http://fb.me/react-warning-keys for more information.",m(e,{component:i,componentOwner:l}),console.warn(r)}}function i(){var e=t()||"";f.hasOwnProperty(e)||(f[e]=!0,m("react_object_map_children"))}function s(e,r){if(Array.isArray(e))for(var n=0;n<e.length;n++){var t=e[n];p.isValidElement(t)&&a(t,r)}else if(p.isValidElement(e))e._store.validated=!0;else if(e&&"object"==typeof e){i();for(var c in e)o(c,e[c],r)}}function l(e,r,n,t){for(var a in r)if(r.hasOwnProperty(a)){var o;try{o=r[a](n,a,e,t)}catch(c){o=c}o instanceof Error&&!(o.message in _)&&(_[o.message]=!0,m("react_failed_descriptor_type_check",{message:o.message}))}}var p=e("./ReactElement"),u=e("./ReactPropTypeLocations"),d=e("./ReactCurrentOwner"),m=e("./monitorCodeUse"),y={react_key_warning:{},react_numeric_key_warning:{}},f={},_={},h=/^\d+$/,v={createElement:function(e){var r=p.createElement.apply(this,arguments);if(null==r)return r;for(var n=2;n<arguments.length;n++)s(arguments[n],e);var t=e.displayName;return e.propTypes&&l(t,e.propTypes,r.props,u.prop),e.contextTypes&&l(t,e.contextTypes,r._context,u.context),r},createFactory:function(e){var r=v.createElement.bind(null,e);return r.type=e,r}};n.exports=v});