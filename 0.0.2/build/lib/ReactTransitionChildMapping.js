define("kg/react/0.0.2/lib/ReactTransitionChildMapping",["./ReactChildren"],function(r,n,t){"use strict";var e=r("./ReactChildren"),i={getChildMapping:function(r){return e.map(r,function(r){return r})},mergeChildMappings:function(r,n){function t(t){return n.hasOwnProperty(t)?n[t]:r[t]}r=r||{},n=n||{};var e={},i=[];for(var a in r)n.hasOwnProperty(a)?i.length&&(e[a]=i,i=[]):i.push(a);var o,h={};for(var p in n){if(e.hasOwnProperty(p))for(o=0;o<e[p].length;o++){var f=e[p][o];h[e[p][o]]=t(f)}h[p]=t(p)}for(o=0;o<i.length;o++)h[i[o]]=t(i[o]);return h}};t.exports=i});