import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  template: ``,
  styles: []
})
export class AppComponent implements OnInit, OnDestroy {
  timer$: Observable<number> = timer(0, 1000);

  ngOnInit(): void {
    this.timer$.subscribe(secondsElapsed => console.log(secondsElapsed));
  }

  ngOnDestroy(): void {}
}
