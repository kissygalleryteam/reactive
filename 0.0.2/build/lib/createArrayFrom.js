define("kg/react/0.0.2/lib/createArrayFrom",["./toArray"],function(r,e,n){function t(r){return!!r&&("object"==typeof r||"function"==typeof r)&&"length"in r&&!("setInterval"in r)&&"number"!=typeof r.nodeType&&(Array.isArray(r)||"callee"in r||"item"in r)}function i(r){return t(r)?Array.isArray(r)?r.slice():o(r):[r]}var o=r("./toArray");n.exports=i});