import {Component} from '@angular/core';

  @Component({
    selector: 'child-1',
    template: '<div>{{ id }}</div>'
  })
  export class Child1Component {
    public id: string = 1;
  }