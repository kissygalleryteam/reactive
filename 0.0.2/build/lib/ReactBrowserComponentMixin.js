define("kg/react/0.0.2/lib/ReactBrowserComponentMixin",["./ReactEmptyComponent","./ReactMount","./invariant"],function(t,e,o){"use strict";var n=t("./ReactEmptyComponent"),i=t("./ReactMount"),r=t("./invariant"),s={getDOMNode:function(){return"production"!==process.env.NODE_ENV?r(this.isMounted(),"getDOMNode(): A component must be mounted to have a DOM node."):r(this.isMounted()),n.isNullComponentID(this._rootNodeID)?null:i.getNode(this._rootNodeID)}};o.exports=s});