#!/usr/bin/env node

'use strict';

var place           = require('..'),
    args            = process.argv.slice(2),
    arg             = args[0];
    
if (!arg)
    usage();
else if (/^(-v|--v)$/.test(arg))
    version();
else if (/^(-h|--help)$/.test(arg))
    help();
else
    main(args[0], args[1], args[2]);

function getPath(name) {
    var reg = /^(~|\/)/;
    
    if (!reg.test(name))
        name = process.cwd() + '/' + name;
    
    return name;
}

function main(name, from, to) {
    var filename    = getPath(name);
    
    if (!from)
        error('from could not be empty!');
    
    if (!to)
        error('from could not be empty!');
    
    place(filename, from, to, function(e) {
        e && error(e);
    });
    
}

function error(msg) {
    console.error(msg);
    process.exit(-1);
}

function version() {
    console.log('v' + info().version);
}

function info() {
    return require('../package');
}

function usage() {
    var msg = 'Usage: ' + info().name + ' [filename] [from] [to]';
    console.log(msg);
}

function help() {
    var bin         = require('../json/bin');
        
    usage();
    console.log('Options:');
    
    Object.keys(bin).forEach(function(name) {
        var line = '  ' + name + ' ' + bin[name];
        console.log(line);
    });
}

