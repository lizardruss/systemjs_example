System.config({
  "defaultJSExtensions": true,
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  }
});

System.config({
  "depCache": {
    "github:components/jquery@2.1.4.js": [
      "github:components/jquery@2.1.4/jquery.js"
    ],
    "lib/editor.js": [
      "github:components/jquery@2.1.4.js"
    ],
    "lib/db.js": [
      "github:components/jquery@2.1.4.js"
    ],
    "lib/runner.js": [
      "github:components/jquery@2.1.4.js",
      "lib/editor.js"
    ]
  }
});

System.config({
  "map": {
    "babel": "npm:babel-core@5.8.21",
    "babel-runtime": "npm:babel-runtime@5.8.20",
    "chai": "github:chaijs/chai@3.2.0",
    "core-js": "npm:core-js@0.9.18",
    "jquery": "github:components/jquery@2.1.4",
    "mocha": "npm:mocha@2.2.5",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:babel-runtime@5.8.20": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:mocha@2.2.5": {
      "css": "github:systemjs/plugin-css@0.1.13"
    }
  }
});

