import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  template: ``,
  styles: []
})
export class AppComponent implements OnInit, OnDestroy {
  timer$: Observable<number> = timer(0, 1000);
  subscription: Subscription;

  ngOnInit(): void {
    this.subscription = this.timer$.subscribe(secondsElapsed =>
      console.log(secondsElapsed)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
