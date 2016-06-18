import 'reflect-metadata';
import 'zone.js';
import {myLibA} from './lib';
import {Component, enableProdMode} from '@angular/core';
import {CompilerConfig} from '@angular/compiler';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {AllComponent} from './component/all-components';
// import {Observable} from 'rxjs/Rx';

enableProdMode();

@Component({
  selector: 'my-app',
  template: '<p>Hello {{ world }}</p><p>Time to render: {{ getTime() }}'
})
class MyApp {
  public world: string = 'sod2';
  public time: number;
  
  getTime() {
    if (!this.time) {
      this.time = performance.now();
    }

    return this.time - (<any>window).time;
  }
}

var prodMode = [{
  provide: CompilerConfig, useValue: new CompilerConfig({genDebugInfo: false, logBindingUpdate: false})
}];

bootstrap(AllComponent, prodMode);
bootstrap(MyApp, prodMode);

const x = 'foo1';
const y = 'bar2';
console.log({x,y}, myLibA());
