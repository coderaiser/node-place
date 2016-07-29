'use strict';

const fs = require('fs');

module.exports = (name, from, to, callback) => {
    check(name, from, to, callback);
    
    read(name, (error, data) => {
        if (error)
            return callback(error);
        
        const result = replace(from, to, data);
        
        write(name, result, callback);
    });
};

function replace(from, to, data) {
    return data.replace(RegExp(from), to);
}

function read(name, callback) {
    fs.readFile(name, 'utf8', callback);
}

function write(name, data, callback) {
    fs.writeFile(name, data, callback);
}

function check(name, from, to, callback) {
    if (!name)
        throw Error('"name" should not be empty!');
    
    if (typeof from !== 'string' || from instanceof RegExp)
        throw Error('"from" should be a string or RegExp!');
    
    if (typeof to !== 'string')
        throw Error('"to" should be a string!');
    
    if (typeof callback !== 'function')
        throw Error('"callback" should be a function!');
}

