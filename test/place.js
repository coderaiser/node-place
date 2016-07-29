'use strict';

const test = require('tape');
const fs = require('fs');
const place = require('..');
const sinon = require('sinon');
const callback = sinon.stub();

fs.readFile = sinon.stub();
fs.writeFile = sinon.stub();

test('place: read', (t) => {
    fs.readFile = sinon.stub();
    fs.writeFile = sinon.stub();
    
    place('1.txt', 'a', 'b', callback);
    
    t.ok(fs.readFile.calledWithMatch('1.txt'), 'read should have been called');
    t.end();
});

test('place: write', (t) => {
    fs.readFile = (name, enc, callback) => callback(null, 'hello');
    
    place('1.txt', 'hello', 'world', callback);
    
    t.ok(fs.writeFile.calledWithMatch('1.txt', 'world'), 'callback should have been called');
    t.end();
});

test('place: regexp', (t) => {
    fs.readFile = (name, enc, callback) => callback(null, 'hello world');
    
    place('1.txt', '^hello', 'hi', callback);
    
    t.ok(fs.writeFile.calledWithMatch('1.txt', 'hi world'), 'callback should have been called');
    t.end();
});

test('place: error', (t) => {
    const fn = sinon.stub();
    
    fs.readFile = (name, enc, callback) => callback('error');
    
    place('1.txt', 'hello', 'world', fn);
    
    t.ok(fn.calledWith('error'), 'callback should have been called');
    t.end();
});

test('place: arguments: no', (t) => {
    t.throws(place, /"name" should not be empty!/, 'should throw when no name');
    t.end();
});

test('place: arguments: "from" is regexp', (t) => {
    const fn = () => place('1.txt', RegExp('hello'));
    
    t.throws(fn, /"from" should be a string or RegExp!/, 'should throw when "from" is not a string');
    t.end();
});

test('place: arguments: "to" is not a string', (t) => {
    const fn = () => place('1.txt', '');
    
    t.throws(fn, /"to" should be a string!/, 'should throw when "to" is not a string');
    t.end();
});

test('place: arguments: "fn" not a function', (t) => {
    const fn = () => place('1.txt', '', '11');
    
    t.throws(fn, /"callback" should be a function!/, 'should throw when "fn" not a function');
    t.end();
});

