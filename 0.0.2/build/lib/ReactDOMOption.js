define("kg/react/0.0.2/lib/ReactDOMOption",["./ReactBrowserComponentMixin","./ReactCompositeComponent","./ReactElement","./ReactDOM","./warning"],function(e,t,n){"use strict";var o=e("./ReactBrowserComponentMixin"),i=e("./ReactCompositeComponent"),s=e("./ReactElement"),c=e("./ReactDOM"),r=e("./warning"),p=s.createFactory(c.option.type),a=i.createClass({displayName:"ReactDOMOption",mixins:[o],componentWillMount:function(){"production"!==process.env.NODE_ENV&&("production"!==process.env.NODE_ENV?r(null==this.props.selected,"Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."):null)},render:function(){return p(this.props,this.props.children)}});n.exports=a});