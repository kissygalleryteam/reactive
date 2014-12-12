define("kg/react/0.0.2/lib/LinkedValueUtils",["./ReactPropTypes","./invariant"],function(e,n,o){"use strict";function a(e){"production"!==process.env.NODE_ENV?p(null==e.props.checkedLink||null==e.props.valueLink,"Cannot provide a checkedLink and a valueLink. If you want to use checkedLink, you probably don't want to use valueLink and vice versa."):p(null==e.props.checkedLink||null==e.props.valueLink)}function r(e){a(e),"production"!==process.env.NODE_ENV?p(null==e.props.value&&null==e.props.onChange,"Cannot provide a valueLink and a value or onChange event. If you want to use value or onChange, you probably don't want to use valueLink."):p(null==e.props.value&&null==e.props.onChange)}function u(e){a(e),"production"!==process.env.NODE_ENV?p(null==e.props.checked&&null==e.props.onChange,"Cannot provide a checkedLink and a checked property or onChange event. If you want to use checked or onChange, you probably don't want to use checkedLink"):p(null==e.props.checked&&null==e.props.onChange)}function t(e){this.props.valueLink.requestChange(e.target.value)}function l(e){this.props.checkedLink.requestChange(e.target.checked)}var i=e("./ReactPropTypes"),p=e("./invariant"),d={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},c={Mixin:{propTypes:{value:function(e,n){return!e[n]||d[e.type]||e.onChange||e.readOnly||e.disabled?void 0:new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")},checked:function(e,n){return!e[n]||e.onChange||e.readOnly||e.disabled?void 0:new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")},onChange:i.func}},getValue:function(e){return e.props.valueLink?(r(e),e.props.valueLink.value):e.props.value},getChecked:function(e){return e.props.checkedLink?(u(e),e.props.checkedLink.value):e.props.checked},getOnChange:function(e){return e.props.valueLink?(r(e),t):e.props.checkedLink?(u(e),l):e.props.onChange}};o.exports=c});