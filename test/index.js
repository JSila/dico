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

        assert.deepEqual({1: 2, 2: 3}, di.registry);
    });
});

describe('#get', function() {
    it('returns the same object as previously set by some key', function() {
        var value = 'some service';
        var di = dico().set('key', value);

        assert.equal(value, di.get('key'))
    })
})

describe('#singleton', function() {
    it('always returns same value for same key', function() {
        var di = dico().singleton('random', function () {
            return Math.random();
        });

        var a = di.get('random');
        var b = di.get('random');

        assert.equal(a, b);
    });
});

describe('#registry', function() {
    it('returns its value', function() {
        var di = dico().set('random', function () {
            return Math.random();
        });

        assert.ok(di.registry.random);
        assert.equal(Object.keys(di.registry).length, 1);
    });
});
