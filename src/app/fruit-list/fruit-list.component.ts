import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-fruit-list',
  template: `
    <ul>
      <li *ngFor="let fruit of fruits">
        {{ fruit }}
      </li>
    </ul>
  `,
  styles: []
})
export class FruitListComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  fruits: string[];
  constructor() {
    console.log('Constructor');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('FruitList OnChanges');
    console.log('Previous Values: ' + changes.fruits.previousValue);
    console.log('Current Values: ' + changes.fruits.currentValue);
  }
  ngOnInit() {
    console.log('FruitList OnInit');
  }
  ngOnDestroy(): void {
    console.log('FruitList Destroyed');
  }
}
