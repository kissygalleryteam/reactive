define("kg/react/0.0.2/lib/ReactDefaultPerf",["./DOMProperty","./ReactDefaultPerfAnalysis","./ReactMount","./ReactPerf","./performanceNow"],function(e,t,n){"use strict";function r(e){return Math.floor(100*e)/100}function o(e,t,n){e[t]=(e[t]||0)+n}var a=e("./DOMProperty"),s=e("./ReactDefaultPerfAnalysis"),u=e("./ReactMount"),i=e("./ReactPerf"),l=e("./performanceNow"),m={_allMeasurements:[],_mountStack:[0],_injected:!1,start:function(){m._injected||i.injection.injectMeasure(m.measure),m._allMeasurements.length=0,i.enableMeasure=!0},stop:function(){i.enableMeasure=!1},getLastMeasurements:function(){return m._allMeasurements},printExclusive:function(e){e=e||m._allMeasurements;var t=s.getExclusiveSummary(e);console.table(t.map(function(e){return{"Component class name":e.componentName,"Total inclusive time (ms)":r(e.inclusive),"Exclusive mount time (ms)":r(e.exclusive),"Exclusive render time (ms)":r(e.render),"Mount time per instance (ms)":r(e.exclusive/e.count),"Render time per instance (ms)":r(e.render/e.count),Instances:e.count}}))},printInclusive:function(e){e=e||m._allMeasurements;var t=s.getInclusiveSummary(e);console.table(t.map(function(e){return{"Owner > component":e.componentName,"Inclusive time (ms)":r(e.time),Instances:e.count}})),console.log("Total time:",s.getTotalTime(e).toFixed(2)+" ms")},getMeasurementsSummaryMap:function(e){var t=s.getInclusiveSummary(e,!0);return t.map(function(e){return{"Owner > component":e.componentName,"Wasted time (ms)":e.time,Instances:e.count}})},printWasted:function(e){e=e||m._allMeasurements,console.table(m.getMeasurementsSummaryMap(e)),console.log("Total time:",s.getTotalTime(e).toFixed(2)+" ms")},printDOM:function(e){e=e||m._allMeasurements;var t=s.getDOMSummary(e);console.table(t.map(function(e){var t={};return t[a.ID_ATTRIBUTE_NAME]=e.id,t.type=e.type,t.args=JSON.stringify(e.args),t})),console.log("Total time:",s.getTotalTime(e).toFixed(2)+" ms")},_recordWrite:function(e,t,n,r){var o=m._allMeasurements[m._allMeasurements.length-1].writes;o[e]=o[e]||[],o[e].push({type:t,time:n,args:r})},measure:function(e,t,n){return function(){for(var r=[],a=0,s=arguments.length;s>a;a++)r.push(arguments[a]);var i,c,p;if("_renderNewRootComponent"===t||"flushBatchedUpdates"===t)return m._allMeasurements.push({exclusive:{},inclusive:{},render:{},counts:{},writes:{},displayNames:{},totalTime:0}),p=l(),c=n.apply(this,r),m._allMeasurements[m._allMeasurements.length-1].totalTime=l()-p,c;if("ReactDOMIDOperations"===e||"ReactComponentBrowserEnvironment"===e){if(p=l(),c=n.apply(this,r),i=l()-p,"mountImageIntoNode"===t){var d=u.getID(r[1]);m._recordWrite(d,t,i,r[0])}else"dangerouslyProcessChildrenUpdates"===t?r[0].forEach(function(e){var t={};null!==e.fromIndex&&(t.fromIndex=e.fromIndex),null!==e.toIndex&&(t.toIndex=e.toIndex),null!==e.textContent&&(t.textContent=e.textContent),null!==e.markupIndex&&(t.markup=r[1][e.markupIndex]),m._recordWrite(e.parentID,e.type,i,t)}):m._recordWrite(r[0],t,i,Array.prototype.slice.call(r,1));return c}if("ReactCompositeComponent"!==e||"mountComponent"!==t&&"updateComponent"!==t&&"_renderValidatedComponent"!==t)return n.apply(this,r);var f="mountComponent"===t?r[0]:this._rootNodeID,M="_renderValidatedComponent"===t,v="mountComponent"===t,_=m._mountStack,g=m._allMeasurements[m._allMeasurements.length-1];if(M?o(g.counts,f,1):v&&_.push(0),p=l(),c=n.apply(this,r),i=l()-p,M)o(g.render,f,i);else if(v){var y=_.pop();_[_.length-1]+=i,o(g.exclusive,f,i-y),o(g.inclusive,f,i)}else o(g.inclusive,f,i);return g.displayNames[f]={current:this.constructor.displayName,owner:this._owner?this._owner.constructor.displayName:"<root>"},c}}};n.exports=m});