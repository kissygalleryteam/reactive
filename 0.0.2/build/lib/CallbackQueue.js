define("kg/react/0.0.2/lib/CallbackQueue",["./PooledClass","./Object.assign","./invariant"],function(t,s,l){"use strict";function n(){this._callbacks=null,this._contexts=null}var c=t("./PooledClass"),e=t("./Object.assign"),i=t("./invariant");e(n.prototype,{enqueue:function(t,s){this._callbacks=this._callbacks||[],this._contexts=this._contexts||[],this._callbacks.push(t),this._contexts.push(s)},notifyAll:function(){var t=this._callbacks,s=this._contexts;if(t){"production"!==process.env.NODE_ENV?i(t.length===s.length,"Mismatched list of contexts in callback queue"):i(t.length===s.length),this._callbacks=null,this._contexts=null;for(var l=0,n=t.length;n>l;l++)t[l].call(s[l]);t.length=0,s.length=0}},reset:function(){this._callbacks=null,this._contexts=null},destructor:function(){this.reset()}}),c.addPoolingTo(n),l.exports=n});