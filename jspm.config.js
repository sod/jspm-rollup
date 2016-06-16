SystemJS.config({
  typescriptOptions: {
    "target": "es2015"
  },
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/",
    "jspm-17-rollup/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-typescript": "github:frankwallis/plugin-typescript@4.0.16",
      "os": "github:jspm/nodelibs-os@0.2.0-alpha"
    },
    "packages": {
      "github:frankwallis/plugin-typescript@4.0.16": {
        "map": {
          "typescript": "npm:typescript@1.8.10"
        }
      },
      "github:jspm/nodelibs-os@0.2.0-alpha": {
        "map": {
          "os-browserify": "npm:os-browserify@0.2.1"
        }
      }
    }
  },
  transpiler: "plugin-typescript",
  packages: {
    "jspm-17-rollup": {
      "main": "index.ts",
      "format": "esm",
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "plugin-typescript"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json",
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "@angular/common": "npm:@angular/common@2.0.0-rc.2",
    "@angular/core": "npm:@angular/core@2.0.0-rc.2",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "reflect-metadata": "npm:reflect-metadata@0.1.3",
    "rxjs": "npm:rxjs-es@5.0.0-beta.6",
    "rxjs-es": "npm:rxjs-es@5.0.0-beta.6",
    "zone.js": "npm:zone.js@0.6.12"
  },
  packages: {}
});
