import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
    template: `
        
		<h1> Roman Translator </h1>
        <input #textbox type="text"  required> 
        <button (click)="logText(textbox.value)">Convert to Roman</button>
        
		<button (click)="textbox.value=''">Clear</button>
    	<p>Roman Value : {{ textbox.value | creditCardMask | lowercase }}</p>
       
        `
})
export class AppComponent implements OnInit  {

 private textValue = "Enter Integer Value";
    private log: string ='';

    private logText(value: string): void {
        this.log = `'${value}'\n`
    } 
}