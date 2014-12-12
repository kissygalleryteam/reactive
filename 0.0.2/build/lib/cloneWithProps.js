define("kg/react/0.0.2/lib/cloneWithProps",["./ReactElement","./ReactPropTransferer","./keyOf","./warning"],function(e,r,n){"use strict";function t(e,r){"production"!==process.env.NODE_ENV&&("production"!==process.env.NODE_ENV?i(!e.ref,"You are calling cloneWithProps() on a child with a ref. This is dangerous because you're creating a new child which will not be added as a ref to its parent."):null);var n=a.mergeProps(r,e.props);return!n.hasOwnProperty(s)&&e.props.hasOwnProperty(s)&&(n.children=e.props.children),o.createElement(e.type,n)}var o=e("./ReactElement"),a=e("./ReactPropTransferer"),c=e("./keyOf"),i=e("./warning"),s=c({children:null});n.exports=t});