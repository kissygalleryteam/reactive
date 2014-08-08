原文地址: http://blog.kissyui.com/2014/08/07/functional-reactive-programming/

[function reactive programming](http://en.wikipedia.org/wiki/Functional_reactive_programming) (frp) 是一种函数式语言的编程范式，通过响应式的编程可以构建出事件流，事件流可以再通过函数式的转换/过滤/**组合**，最终形成可用的结果。同 promise 类似可以有效得消除异步调用场景下的嵌套回调。和 promise 侧重于一次性的成功/失败不同，frp 则侧重于离散的源源不断的事件流。

frp 根据概念和实现的差别并没有一致的约定，这里介绍 kissy frp 的 api 及其用法，详细的概念介绍参见：[The introduction to Reactive Programming you've been missing](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754).

## api

### 类

EventStream 事件流类

Property 属性类，继承于事件流类

### 构建方法

createEventStream: 构建一个事件流 (EventStream)，然后可以往事件流中添加值，例如

``` javascript
reactive.createEventStream(function(fire){
  fire('something')
});
```

createProperty: 构建一个属性 (Property)，属性和事件的区别在于后面 onValue 的处理不同.

### 实例方法

EventStream.prototype.onValue 监听事件流所添加的值

Property.prototype.onValue 监听属性的最近一个值，和 EventStream 的区别点在于如果先在事件流中添加值然后再监听，事件流中的值会监听不到（已经触发）。而 property 会缓存最近的值，在 onValue 会取出来缓存的值。

EventStream.prototype.startsWith 设置事件流的初始值, 在 onValue 时立即取出来使用

### 函数式方法

EventStream.prototype.combine 将多个流组合为一个流，这个流的事件值为多个流事件值的组合，例如

```javascript
stream1 = reactive.createEventStream(function(fire){
  fire(1)
});
stream2 = reactive.createEventStream(function(fire){
  fire(2)
});
stream3 = stream1.combine(stream2);
stream3.onValue(function(v){
  v // => [1,2]
});
```

EventStream.prototype.filter 返回一个新的事件流，该事件流只有在当前事件流的值通过过滤时才添加值，例如

```javascript
stream2 = stream1.filter(function(v){
    return v>1;
});
```

EventStream.prototype.map 返回一个新的事件流，该事件流是对当前事件流转换的结果，结果可以又是一个事件流，即形成一种委托的关系。

例如简单的转换

```javascript
stream2 = stream1.map(function(v){
  return 2*v;
});
```

或者嵌套的转换，新的事件流的值又是由另一个事件流产生，常用于异步的场景

```javascript
stream2 = stream1.map(function(v){
  return reactive.createEventStream(function(fire){
       setTimeout(function(){
          fire(v+1);
       },100);
  });
});
```

## example

api 很少，用起来也很简单，这里举两个简单的例子说明下：

#### 自动补全

[demo](http://gallery.kissyui.com/reactive/doc/demo/autocomplete.html), 自动补全是一个 frp 合适而且简单的应用场景， 初始事件流就是用户对于单个 input 的输入，该事件流经过简单的过滤（非空），转换为对于服务器请求的事件流，最终服务器返回后的值作为结果渲染。示例代码如下：

``` javascript
// 初始事件流
reactive.createEventStream(function(fire){
   input[0].oninput = function () {
     fire(this.value);
   };
})
// 过滤
.filter(function(v){
  return !!v.trim();
})
// 去空格
.map(function(v){
  return v.trim();
})
// 转化为服务器请求流
.map(function(v){
  return reactive.createEventStream(function(fire){
    io.jsonp('xx.json',{q:v},function(data){
        fire(data)
    });
  });
})
// 获取最终值
.onValue(function(data){
   // render data
});
```

大家可以想下以前用回调是如果实现的，而 frp 则有效得使用组合替代了嵌套回调。

#### 计算器

[demo](http://gallery.kissyui.com/reactive/doc/demo/index.html) ，计算器则演示了多个事件流的组合性，用户在每个输入框的输入都形成了一个事件流，而多个事件流组合的结果经过计算形成了最终的计算结果。示例代码如下

``` javascript
// 事件流1
reactive.createEventStream(function(fire){
   input1.oninput = function () {
     fire(this.value);
   };
})
// 组合事件流2
.combine(reactive.createEventStream(function(fire){
   input2.oninput = function () {
     fire(this.value);
   };
}))
// 转换结果
.map(function(v){
  return v[0]+v[1];
})
// 渲染最终值
.onValue(function(v){
});
```

## 现在就使用

在 kissy 中可以通过配置 [gallery](http://gallery.kissyui.com/reactive/doc/guide/index.html) 包 kg 为 http://g.tbcdn.cn/kg/ 然后 use('kg/reactive/0.2.0/') 即可。

gallery 组件现在也可以使用 bower 安装到本地（公司内部），配置 .bowerrc 为 

```javascript
{
    "shorthand_resolver":"http://gitlab.alibaba-inc.com/{{{owner}}}/{{{package}}}.git"
}
```

添加 bower.json

```javascript
{
    "name": "test-project",
    "private": true,
    "dependencies": {
        "reactive": "kg/reactive"
    }
}
```

在根目录执行 bower  install 即可安装组件到本地 bower_components 目录，目录可以通过在 .bowerrc 中配置 directory 改变，详见： [bower 文档](http://bower.io/docs/config/)