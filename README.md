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

## License

MIT
