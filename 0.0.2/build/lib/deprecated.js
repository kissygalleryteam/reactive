define("kg/react/0.0.2/lib/deprecated",["./Object.assign","./warning"],function(e,n,r){function i(e,n,r,i,s){var c=!1;if("production"!==process.env.NODE_ENV){var u=function(){return"production"!==process.env.NODE_ENV?a(c,e+"."+n+" will be deprecated in a future version. "+("Use "+e+"."+r+" instead.")):null,c=!0,s.apply(i,arguments)};return u.displayName=e+"_"+n,t(u,s)}return s}var t=e("./Object.assign"),a=e("./warning");r.exports=i});