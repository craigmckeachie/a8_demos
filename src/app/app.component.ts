import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <p>{{ timer$ | async }}</p>
  `,
  styles: []
})
export class AppComponent implements OnInit, OnDestroy {
  timer$: Observable<number> = timer(0, 1000);

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
