# fa-constants - All font awesome keys in a constant object

No need to search in the fontawesome list, whether you have written the fa-{{key}} pattern correct or not.
This package makes your IDE resolve the list of currently available (latest stable) icon classnames.

Font awesome is distributed under it's own license. This package does not claim any ownership on font awesome.

### Install

Use npm to install the package from the npm registry:

```bash
npm install --save fa-constants
```

Import the package to your code:

```javascript
import { fa } from 'fa-constants';
```

or use a renamed import in case you want to name it different:

```javascript
import { fa as FaConstants } from 'fa-constants';
```

### API

##### keys

Use autocompletion on your IDE to reveal the full list of keys in `fa`.

Example: insert gif here


##### toClass ( String ) -> String

Creates a font awesome class from a given icon id.

Example:

```javascript
// icon id is 'file-o'
fa.toClass(fa.fileo); // 'fa fa-file-o'

```


##### toKey ( String ) -> String

Creates a key from a given icon id, that can be attached to an object and can trigger auto completion. 
Note, that all minus (`-`) characters are stripped to achieve this.

Example:

```javascript
// icon id is 'file-o'
fa.toKey('fa-file-o'); // 'fileo

```

##### has ( String ) -> Boolean

Returns true/false if a given icon id exists.

Example:

Example:

```javascript
// icon id is 'file-o'
fa.has(fa.fileo); // true
fa.has('file-o'); // true
fa.has('fa-file-o'); // true
fa.has('fa-filez-o'); // false

```


### Development, Testing and Building

In order to build this package, you can easily make use of the already existing npm scripts.

        
### Buildall

All the commands listed bwloe are wrapped into a chained `buildall` command. Usually you need only to call this command in order to parse, lint, test and then build the package.

`"buildall": "npm run parse && npm run test && npm run build",`

##### Parse

At first, the latest fontawesome icon list needs to be parsed into a JSON Object:

"parse": "node parse.js",

Related: `./parse.js`


##### Build and prepublish

There is a babel build script (for all platforms), that enbles to create a backward compatible ES5 version of the ES6 code: 

```
"build": "node build.js",
"prepublish": "npm run build",
```        
   
Related: `./build.js` 
        
        
### Lint

There are two lint scripts (where one is using `--fix`) to lint the code using default specifications:

```
"lint": "eslint -c ./.eslintrc.json ./lib",
"lint-fix": "eslint --fix -c ./.eslintrc.json ./lib"
```

Note, that `lint` is automatically run on `test`.

Related: `./.eslintrc.json`
        
### Test
        
The tests can be executed once or in watch mode:

```
 "test": "npm run lint && mocha --timeout 15000 --compilers js:babel-core/register --recursive \"tests/*.tests.js\"  \"lib/*.js\"",
 "test:watch": "npm test -- --watch",
```     
   
Related: `./tests/*`   

### Contribution

You are welcome to open issues and pull requests. Please ensure, that the `buildall` command is always passing with `0` exit and that your feature request / pull request is backing some sort of use case.
