
import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {Child1Component} from './child-1-component.ts'

@Component({
  selector: 'all',
  directives: [Child1Component],
  template: '<child-1></child-1>'
})
export class AllComponent {}
