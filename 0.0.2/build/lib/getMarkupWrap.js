define("kg/react/0.0.2/lib/getMarkupWrap",["./ExecutionEnvironment","./invariant"],function(e,t,n){function i(e){return"production"!==process.env.NODE_ENV?o(!!r,"Markup wrapping node not initialized"):o(!!r),b.hasOwnProperty(e)||(e="*"),a.hasOwnProperty(e)||(r.innerHTML="*"===e?"<link />":"<"+e+"></"+e+">",a[e]=!r.firstChild),a[e]?b[e]:null}var l=e("./ExecutionEnvironment"),o=e("./invariant"),r=l.canUseDOM?document.createElement("div"):null,a={circle:!0,defs:!0,ellipse:!0,g:!0,line:!0,linearGradient:!0,path:!0,polygon:!0,polyline:!0,radialGradient:!0,rect:!0,stop:!0,text:!0},p=[1,'<select multiple="true">',"</select>"],d=[1,"<table>","</table>"],c=[3,"<table><tbody><tr>","</tr></tbody></table>"],s=[1,"<svg>","</svg>"],b={"*":[1,"?<div>","</div>"],area:[1,"<map>","</map>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],legend:[1,"<fieldset>","</fieldset>"],param:[1,"<object>","</object>"],tr:[2,"<table><tbody>","</tbody></table>"],optgroup:p,option:p,caption:d,colgroup:d,tbody:d,tfoot:d,thead:d,td:c,th:c,circle:s,defs:s,ellipse:s,g:s,line:s,linearGradient:s,path:s,polygon:s,polyline:s,radialGradient:s,rect:s,stop:s,text:s};n.exports=i});