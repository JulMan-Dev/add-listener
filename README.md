# add-listener

**add-listener** is package for improve `Element.addEventListener`

## Installation

```bash
npm i @julman-dev/add-listener
```

And start hacking !

```javascript
// ES5
const al = require('@julman-dev/add-listener');
// ES6
import * as al from '@julman-dev/add-listener';

al(window, function () {
    this.alert('Clicked !');
}, 'click');
```
