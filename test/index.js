var dico = require('..')
var assert = require('assert');

describe('#set', function() {
    it('always returns different value for same key', function() {
        var di = dico().set('random', function () {
            return Math.random();
        })

        var a = di.get('random');
        var b = di.get('random');

        assert.notEqual(a, b);
    });

    it('can be chained', function() {
        var di = dico().set(1, 2).set(2, 3);

        assert.deepEqual({1: 2, 2: 3}, di.getRegistry());
    });

    it('always returns same value for same key if singleton set to true', function() {
        var di = dico().set('random', function () {
            return Math.random();
        }, true);

        var a = di.get('random');
        var b = di.get('random');

        assert.equal(a, b);
    });
});

describe('#get', function() {
    it('returns the same object as previously set by the some key', function() {
        var value = 'some service';
        var di = dico().set('key', value);

        assert.equal(value, di.get('key'))
    })
})

describe('#getRegistry', function() {
    it('returns its value', function() {
        var di = dico().set('random', function () {
            return Math.random();
        });

        assert.ok(di.getRegistry().random);
        assert.equal(Object.keys(di.getRegistry()).length, 1);
    });
});
