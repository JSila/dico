var stampit = require('stampit')

var dico = stampit()
    .init(function() {
        var registry = {};
        this.registry = function() {
            return registry;
        }
    })
    .methods({
        set: function(key, callback) {
            this.registry[key] = callback;
            return this;
        },
        singleton: function(key, callback) {
            this.registry[key] = callback()
            return this;
        },
        get: function(key) {
            return (typeof this.registry[key] == 'function') ? this.registry[key]() : this.registry[key];
        }
    })

module.exports = dico;
