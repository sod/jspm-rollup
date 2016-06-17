installed angular modules via:

```sh
jspm install npm:@angular/common -o '{"main": "bundles/common.umd.js"}';
jspm install npm:@angular/compiler -o '{"main": "bundles/compiler.umd.js"}';
jspm install npm:@angular/core -o '{"main": "bundles/core.umd.js"}';
jspm install npm:@angular/http -o '{"main": "bundles/http.umd.js"}';
jspm install npm:@angular/platform-browser -o '{"main": "bundles/platform-browser.umd.js"}';
jspm install npm:@angular/platform-browser-dynamic -o '{"main": "bundles/platform-browser-dynamic.umd.js"}';
jspm install npm:@angular/router-deprecated -o '{"main": "bundles/router-deprecated.umd.js"}';
```

installes typescript transpiler via:

```sh
jspm install github:frankwallis/plugin-typescript -o "{dependencies:{typescript:'^1.9.0-dev'}}"
```
