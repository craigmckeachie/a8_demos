import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@Component({
  selector: 'app-root',
  template: `
    <app-hello-world>
      <h2 #nameContent>Bond, James Bond</h2>
    </app-hello-world>
  `,
  styles: []
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(HelloWorldComponent, { static: true }) helloWorldComponent;

  ngOnInit(): void {
    console.log('App OnInit: ');
    console.log('ViewChild (hello):', this.helloWorldComponent);
  }

  ngAfterViewInit(): void {
    console.log('App AfterViewInit: ');
    console.log('ViewChild (hello):', this.helloWorldComponent);
  }
}
