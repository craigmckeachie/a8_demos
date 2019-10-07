import {
  Component,
  OnInit,
  ContentChild,
  AfterViewInit,
  AfterContentInit
} from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: `
    <p>Hello World! My name is: <ng-content></ng-content></p>
  `,
  styles: []
})
export class HelloWorldComponent
  implements OnInit, AfterViewInit, AfterContentInit {
  @ContentChild('nameContent', { static: true }) nameContent;
  constructor() {}

  ngOnInit() {
    console.log(
      'OnInit: nameContent available only if static is true. ',
      this.nameContent
    );
  }
  ngAfterContentInit() {
    console.log('AfterContentInit: nameContent available. ', this.nameContent);
  }
  ngAfterViewInit() {
    console.log('AfterViewInit: nameContent available. ', this.nameContent);
  }
}
