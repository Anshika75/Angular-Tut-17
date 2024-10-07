import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private detroyRef = inject(DestroyRef);
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);

  constructor() {
    // effect(() => {
    //   console.log('clickCount', `${this.clickCount()}`);
    // }
    // );
    // toObservable(this.clickCount)
  }


  ngOnInit(): void {
    // const subscription = interval(1000).pipe(
    //   map((val) => val * 2)
    // ).subscribe({
    //   next: (val) => console.log(val)
    // });
    // this.detroyRef.onDestroy(() => {
    //   subscription.unsubscribe();
    // });
    this.clickCount$.subscribe({
      next: (val) => console.log(val)
    });
    this.detroyRef.onDestroy(() => {
      console.log('destroy');
    });
  }

  onClick() {
    this.clickCount.update(prevCount => prevCount + 1);
  }
}
