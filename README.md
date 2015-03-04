# Place

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

## License

MIT
