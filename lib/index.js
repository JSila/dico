var stampit = require('stampit')

var dico = stampit()
    .init(function() {
        var _registry = {};
        this.registry = function(key, value) {
            switch (arguments.length) {
            case 1:
                return _registry[key];
            case 2:
                _registry[key] = value;
                return this;
            default:
                return _registry;
            }
        }
    })
    .methods({
        set: function(key, value, isSingleton) {
            value = isSingleton ? value() : value;
            return this.registry(key, value);
        },
        get: function(key) {
            var value = this.registry(key);
            return (typeof value == 'function') ? value() : value;
        },
        getRegistry: function() {
            return this.registry();
        }
    })

module.exports = dico;
