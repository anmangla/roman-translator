import { Component } from '@angular/core';
@Component({
	selector: 'my-app',
    //templateUrl: './app/template.html'
	 template: `
      <a [routerLink]="['/']">Roman Translator</a> | <a [routerLink]="['/about']">Integer Translator</a>
  <div class="outer-outlet">
      <router-outlet></router-outlet>
  
	</div>
  `
})
export class AppComponent   {


}