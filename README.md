# systemjs_example

Example app to reproduce issue [systemsjs/systemjs#656](https://github.com/systemjs/systemjs/issues/656)

## Installation
1. Run `npm install`.
2. Run `jspm install`.
3. Run `grunt connect:server:keepalive`
4. Open http://localhost:4000/test/

Should see the following error in the console:
```
Uncaught (in promise) TypeError: Cannot read property 'done' of undefined
    at linkSet.loader (http://localhost:4000/jspm_packages/system.src.js:470:42)
    at loadModule (http://localhost:4000/jspm_packages/system.src.js:259:12)
    at http://localhost:4000/jspm_packages/system.src.js:797:11
    linkSet.loader @ system.src.js:470
    loadModule @ system.src.js:259
    (anonymous function) @ system.src.js:797
```  
