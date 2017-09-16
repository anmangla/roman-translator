import { Component } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'about-home',
  templateUrl: './app/template2.html'
})
export class AboutHomeComponent { }

@Component({
  selector: 'app-about',
  templateUrl: './app/template2.html'
})
export class AboutComponent {
    private log: string ='';

    private logText(value: string): void {
        this.log = `'${value}'\n`
    } 
	}
	  