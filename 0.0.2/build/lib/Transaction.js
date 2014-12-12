define("kg/react/0.0.2/lib/Transaction",["./invariant"],function(i,n,t){"use strict";var a=i("./invariant"),r={reinitializeTransaction:function(){this.transactionWrappers=this.getTransactionWrappers(),this.wrapperInitData?this.wrapperInitData.length=0:this.wrapperInitData=[],this._isInTransaction=!1},_isInTransaction:!1,getTransactionWrappers:null,isInTransaction:function(){return!!this._isInTransaction},perform:function(i,n,t,r,s,e,l,o){"production"!==process.env.NODE_ENV?a(!this.isInTransaction(),"Transaction.perform(...): Cannot initialize a transaction when there is already an outstanding transaction."):a(!this.isInTransaction());var c,h;try{this._isInTransaction=!0,c=!0,this.initializeAll(0),h=i.call(n,t,r,s,e,l,o),c=!1}finally{try{if(c)try{this.closeAll(0)}catch(p){}else this.closeAll(0)}finally{this._isInTransaction=!1}}return h},initializeAll:function(i){for(var n=this.transactionWrappers,t=i;t<n.length;t++){var a=n[t];try{this.wrapperInitData[t]=s.OBSERVED_ERROR,this.wrapperInitData[t]=a.initialize?a.initialize.call(this):null}finally{if(this.wrapperInitData[t]===s.OBSERVED_ERROR)try{this.initializeAll(t+1)}catch(r){}}}},closeAll:function(i){"production"!==process.env.NODE_ENV?a(this.isInTransaction(),"Transaction.closeAll(): Cannot close transaction when none are open."):a(this.isInTransaction());for(var n=this.transactionWrappers,t=i;t<n.length;t++){var r,e=n[t],l=this.wrapperInitData[t];try{r=!0,l!==s.OBSERVED_ERROR&&e.close&&e.close.call(this,l),r=!1}finally{if(r)try{this.closeAll(t+1)}catch(o){}}}this.wrapperInitData.length=0}},s={Mixin:r,OBSERVED_ERROR:{}};t.exports=s});