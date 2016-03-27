# API
   - [#set](#set)
   - [#get](#get)
   - [#singleton](#singleton)
   - [#registry](#registry)
<a name=""></a>

<a name="set"></a>
# #set
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

assert.deepEqual({1: 2, 2: 3}, di.registry);
```

<a name="get"></a>
# #get
returns the same object as previously set by some key.

```js
var value = 'some service';
var di = dico().set('key', value);

assert.equal(value, di.get('key'))
```

<a name="singleton"></a>
# #singleton
always returns same value for same key.

```js
var di = dico().singleton('random', function () {
    return Math.random();
});

var a = di.get('random');
var b = di.get('random');

assert.equal(a, b);
```

<a name="registry"></a>
# #registry
returns its value.

```js
var di = dico().set('random', function () {
    return Math.random();
});

assert.ok(di.registry.random);
assert.equal(Object.keys(di.registry).length, 1);
```
