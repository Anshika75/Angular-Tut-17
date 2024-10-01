import { Directive, input, OnDestroy } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)'
  }
})
export class SafeLinkDirective {
  queryParam = input('myapp')

  constructor() {
    console.log('SafeLinkDirective created');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you really want to leave?');
    if (wantsToLeave) {
      const address = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParam();
      return;
    }


    event.preventDefault();
  }

}
