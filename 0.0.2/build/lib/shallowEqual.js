define("kg/react/0.0.2/lib/shallowEqual",[],function(r,n,t){"use strict";function e(r,n){if(r===n)return!0;var t;for(t in r)if(r.hasOwnProperty(t)&&(!n.hasOwnProperty(t)||r[t]!==n[t]))return!1;for(t in n)if(n.hasOwnProperty(t)&&!r.hasOwnProperty(t))return!1;return!0}t.exports=e});