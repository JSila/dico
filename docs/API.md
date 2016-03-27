# API
   - [#set](#set)
   - [#get](#get)
   - [#getRegistry](#getregistry)
<a name=""></a>

<a name="set"></a>
## #set (key, value [, isSingleton])
always returns different value for same key.

```js
var di = dico().set('random', function () {
    return Math.random();
})

var a = di.get('random');
var b = di.get('random');

assert.notEqual(a, b);
```

can be chained.

```js
var di = dico().set(1, 2).set(2, 3);

assert.deepEqual({1: 2, 2: 3}, di.getRegistry());
```

always returns same value for same key if singleton set to true.

```js
var di = dico().set('random', function () {
    return Math.random();
}, true);

var a = di.get('random');
var b = di.get('random');

assert.equal(a, b);
```

<a name="get"></a>
## #get (key)
returns the same object as previously set by the some key.

```js
var value = 'some service';
var di = dico().set('key', value);

assert.equal(value, di.get('key'))
```

<a name="getregistry"></a>
## #getRegistry ()
returns its value.

```js
var di = dico().set('random', function () {
    return Math.random();
});

assert.ok(di.getRegistry().random);
assert.equal(Object.keys(di.getRegistry()).length, 1);
```
