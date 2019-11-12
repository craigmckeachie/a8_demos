import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, timer, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: ``,
  styles: []
})
export class AppComponent implements OnInit, OnDestroy {
  timer$: Observable<number> = timer(0, 1000);
  private unsubscribe$ = new Subject<void>();

  ngOnInit(): void {
    this.timer$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(secondsElapsed => console.log(secondsElapsed));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
