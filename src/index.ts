var time: any = (<any>window).time = {};
time.AfterLoad = performance.now();

import 'reflect-metadata';
import 'zone.js';
import {myLibA} from './lib';
import {Component, enableProdMode} from '@angular/core';
import {CompilerConfig} from '@angular/compiler';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {AllComponent} from './component/all-components';
// import {Observable} from 'rxjs/Rx';

time.AfterImport = performance.now();

enableProdMode();


@Component({
  selector: 'my-app',
  template: '<h1>Perf</h1><table><tr *ngFor="let time of times"><td>{{ time.key }}</td><td>{{ time.value }}</td></tr></table>'
})
class MyApp {
  public world: string = 'sod';
  public start: any = (<any>window).start;
  public times: any[] = [];
  
  ngOnInit() {
  	time.Done = performance.now();
  	this.times = Object.keys(time).map(key => {
  		const value = (time[key] - this.start).toFixed(0);
  		return {key, value};
  	});
  }
}

var prodMode = [{
  provide: CompilerConfig, useValue: new CompilerConfig({genDebugInfo: false, logBindingUpdate: false})
}];

bootstrap(AllComponent);
// debugger;
bootstrap(MyApp);
time.AfterBootstrap = performance.now();

const x = 'foo1';
const y = 'bar2';
// console.log({x,y}, myLibA());
