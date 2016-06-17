var fs = require('fs');

function getTemplate(id) {
  return `import {Component} from '@angular/core';

  @Component({
    selector: 'child-${id}',
    template: '<div>{{ id }}</div>'
  })
  export class Child${id}Component {
    public id: string = ${id};
  }`
}

var components = process.argv[2] || 1;
var imports = [];
var providers = [];
var directives = [];

for(var i=1;i<=components;i+=1) {
  var file = `child-${i}-component.ts`;
  fs.writeFileSync(file, getTemplate(i));
  imports.push(`import {Child${i}Component} from './${file}'`);
  providers.push(`Child${i}Component`);
  directives.push(`<child-${i}></child-${i}>`);
}

fs.writeFileSync('all-components.ts', `
import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
${imports.join('\n')}

@Component({
  selector: 'all',
  directives: [${providers.join(',')}],
  template: '${directives.join('')}'
})
class AllComponent {}

bootstrap(AllComponent);
`);
