# Place [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![Coverage Status][CoverageIMGURL]][CoverageURL]

Replace file data in file.

## Install

```
npm i place --save
```

## How to use?

```js
var place = require('place');

place('README.md', 'one', 'two', function(error) {
    if (error)
        console.error(error.message);
});

place('README.md', /one/, 'two', function(error) {
    if (error)
        console.error(error.message);
});
```

## Global

`place` could be used as global when install with `-g` flag:

```
npm i place -g
```

And used this way:

```
Usage: place [filename] [from] [to]
```

## Environments

In old `node.js` environments that supports `es5` only, `place` could be used with:

```js
const place = require('place/legacy');
```

Global could be used as `place-legacy`.

## License

MIT

[NPMIMGURL]:                https://img.shields.io/npm/v/place.svg?style=flat
[BuildStatusIMGURL]:        https://img.shields.io/travis/coderaiser/node-place/master.svg?style=flat
[DependencyStatusIMGURL]:   https://img.shields.io/gemnasium/coderaiser/node-place.svg?style=flat
[LicenseIMGURL]:            https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[NPMURL]:                   https://npmjs.org/package/place "npm"
[BuildStatusURL]:           https://travis-ci.org/coderaiser/node-place  "Build Status"
[DependencyStatusURL]:      https://gemnasium.com/coderaiser/node-place "Dependency Status"
[LicenseURL]:               https://tldrlegal.com/license/mit-license "MIT License"

[CoverageURL]:              https://coveralls.io/github/coderaiser/node-place?branch=master
[CoverageIMGURL]:           https://coveralls.io/repos/coderaiser/node-place/badge.svg?branch=master&service=github

