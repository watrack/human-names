#!/usr/bin/env node
'use strict';


const {getRandom} = require('./index')

var meow = require('meow');

var cli = meow({
    help: [
        'Examples',
        '  $ human-names',
        '  John',
        '',
        '  $ human-names --type male',
        '  John',
        '  Bart',
        '  ...',
        '  $ human-names --lang en',
        '  John',
        '',
        'Options',
        '  --type  Type of name: female|male|both  Default: both',
        '  --lang  lang of name: en|it|fr|de|es|nl  Default: en'
    ].join('\n')
});

var type = cli.flags.type || 'both';
var lang = cli.flags.lang || 'en';
console.log(getRandom(lang, type));
