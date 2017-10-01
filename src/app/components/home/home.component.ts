import {
  Component, OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
   <app-ng-style></app-ng-style>

   <app-css></app-css>

   <app-clases></app-clases>

   <p [appResaltado]="'blue'">
    Hola mundo
   </p>

    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('oninit');
  }

  ngOnChanges(){
console.log('onchanges');
  }
  ngDoCheck(){
console.log('ondocheck');
  }
  ngAfterContentInit(){
console.log('onaftercontentinit');
  }
  ngAfterContentChecked(){
console.log('onaftercontentchecked');
  }
  ngAfterViewInit(){
console.log('onafterviewinit');
  }
  ngAfterViewChecked(){
console.log('onafterviewchecked');
  }
  ngOnDestroy(){
console.log('onondestroy');
  }

}
