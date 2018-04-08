# js-array-each-slice
Adds eachSlice to js Array.

## Install:
```sh
npm i array-each-slice
```
## Usage examples:
```js
import 'array-each-slice';

[1,2,3,4].eachSlice(2) // [[1,2], [3,4]]

[1,2,3,4].forEachSlice(2, callback, thisArg) // Equals [1,2,3,4].eachSlice(2).forEach(callback, thisArg)
```
