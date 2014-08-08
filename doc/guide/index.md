ԭ�ĵ�ַ: http://blog.kissyui.com/2014/08/07/functional-reactive-programming/

[function reactive programming](http://en.wikipedia.org/wiki/Functional_reactive_programming) (frp) ��һ�ֺ���ʽ���Եı�̷�ʽ��ͨ����Ӧʽ�ı�̿��Թ������¼������¼���������ͨ������ʽ��ת��/����/**���**�������γɿ��õĽ����ͬ promise ���ƿ�����Ч�������첽���ó����µ�Ƕ�׻ص����� promise ������һ���Եĳɹ�/ʧ�ܲ�ͬ��frp ���������ɢ��ԴԴ���ϵ��¼�����

frp ���ݸ����ʵ�ֵĲ��û��һ�µ�Լ����������� kissy frp �� api �����÷�����ϸ�ĸ�����ܲμ���[The introduction to Reactive Programming you've been missing](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754).

## api

### ��

EventStream �¼�����

Property �����࣬�̳����¼�����

### ��������

createEventStream: ����һ���¼��� (EventStream)��Ȼ��������¼��������ֵ������

``` javascript
reactive.createEventStream(function(fire){
  fire('something')
});
```

createProperty: ����һ������ (Property)�����Ժ��¼����������ں��� onValue �Ĵ���ͬ.

### ʵ������

EventStream.prototype.onValue �����¼�������ӵ�ֵ

Property.prototype.onValue �������Ե����һ��ֵ���� EventStream �������������������¼��������ֵȻ���ټ������¼����е�ֵ������������Ѿ����������� property �Ỻ�������ֵ���� onValue ��ȡ���������ֵ��

EventStream.prototype.startsWith �����¼����ĳ�ʼֵ, �� onValue ʱ����ȡ����ʹ��

### ����ʽ����

EventStream.prototype.combine ����������Ϊһ��������������¼�ֵΪ������¼�ֵ����ϣ�����

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

EventStream.prototype.filter ����һ���µ��¼��������¼���ֻ���ڵ�ǰ�¼�����ֵͨ������ʱ�����ֵ������

```javascript
stream2 = stream1.filter(function(v){
    return v>1;
});
```

EventStream.prototype.map ����һ���µ��¼��������¼����ǶԵ�ǰ�¼���ת���Ľ���������������һ���¼��������γ�һ��ί�еĹ�ϵ��

����򵥵�ת��

```javascript
stream2 = stream1.map(function(v){
  return 2*v;
});
```

����Ƕ�׵�ת�����µ��¼�����ֵ��������һ���¼����������������첽�ĳ���

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

api ���٣�������Ҳ�ܼ򵥣�����������򵥵�����˵���£�

#### �Զ���ȫ

[demo](http://gallery.kissyui.com/reactive/doc/demo/autocomplete.html), �Զ���ȫ��һ�� frp ���ʶ��Ҽ򵥵�Ӧ�ó����� ��ʼ�¼��������û����ڵ��� input �����룬���¼��������򵥵Ĺ��ˣ��ǿգ���ת��Ϊ���ڷ�����������¼��������շ��������غ��ֵ��Ϊ�����Ⱦ��ʾ���������£�

``` javascript
// ��ʼ�¼���
reactive.createEventStream(function(fire){
   input[0].oninput = function () {
     fire(this.value);
   };
})
// ����
.filter(function(v){
  return !!v.trim();
})
// ȥ�ո�
.map(function(v){
  return v.trim();
})
// ת��Ϊ������������
.map(function(v){
  return reactive.createEventStream(function(fire){
    io.jsonp('xx.json',{q:v},function(data){
        fire(data)
    });
  });
})
// ��ȡ����ֵ
.onValue(function(data){
   // render data
});
```

��ҿ���������ǰ�ûص������ʵ�ֵģ��� frp ����Ч��ʹ����������Ƕ�׻ص���

#### ������

[demo](http://gallery.kissyui.com/reactive/doc/demo/index.html) ������������ʾ�˶���¼���������ԣ��û���ÿ�����������붼�γ���һ���¼�����������¼�����ϵĽ�����������γ������յļ�������ʾ����������

``` javascript
// �¼���1
reactive.createEventStream(function(fire){
   input1.oninput = function () {
     fire(this.value);
   };
})
// ����¼���2
.combine(reactive.createEventStream(function(fire){
   input2.oninput = function () {
     fire(this.value);
   };
}))
// ת�����
.map(function(v){
  return v[0]+v[1];
})
// ��Ⱦ����ֵ
.onValue(function(v){
});
```

## ���ھ�ʹ��

�� kissy �п���ͨ������ [gallery](http://gallery.kissyui.com/reactive/doc/guide/index.html) �� kg Ϊ http://g.tbcdn.cn/kg/ Ȼ�� use('kg/reactive/0.2.0/') ���ɡ�

gallery �������Ҳ����ʹ�� bower ��װ�����أ���˾�ڲ��������� .bowerrc Ϊ 

```javascript
{
    "shorthand_resolver":"http://gitlab.alibaba-inc.com/{{{owner}}}/{{{package}}}.git"
}
```

��� bower.json

```javascript
{
    "name": "test-project",
    "private": true,
    "dependencies": {
        "reactive": "kg/reactive"
    }
}
```

�ڸ�Ŀ¼ִ�� bower  install ���ɰ�װ��������� bower_components Ŀ¼��Ŀ¼����ͨ���� .bowerrc ������ directory �ı䣬����� [bower �ĵ�](http://bower.io/docs/config/)