# add-listener

**add-listener** is package for improve `Element.addEventListener`

## Installation

```powershell
npm i add-listener
```

And start hacking !

```javascript
// ES5
const al = require('add-listener');
// ES6
import * as al from 'add-listener';

al(window, function () {
    this.alert('Clicked !');
}, 'click');
```
