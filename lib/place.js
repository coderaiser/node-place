(function() {
    'use strict';
    
    var fs = require('fs');
    
    module.exports = function(name, from, to, callback) {
        read(name, function(error, data) {
            if (error)
                callback(error);
            else
                write(name, data.replace(from, to), callback);
        });
    };
    
    function read(name, callback) {
        fs.readFile(name, 'utf8', callback);
    }
    
    function write(name, data, callback) {
        fs.writeFile(name, data, callback);
    }
    
})();
