import { Directive, OnDestroy } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)'
  }
})
export class SafeLinkDirective {

  constructor() {
    console.log('SafeLinkDirective created');
   }

   onConfirmLeavePage(event: MouseEvent) {
      const wantsToLeave = window.confirm('Do you really want to leave?');
      if (wantsToLeave) {
        return;
      }

      
      event.preventDefault();
    }

}
