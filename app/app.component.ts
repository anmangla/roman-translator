import { Component } from '@angular/core';
@Component({
	selector: 'my-app',
    templateUrl: './app/template.html'
})
export class AppComponent implements OnInit  {
	
 private selectedLink: string="LowerCase";        
  
  setradio(e: string): void   
  {  
  
    this.selectedLink = e;  
          
  }  
  
    isSelected(name: string): boolean   
  {  
  
        if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
            return false;  
  }  
  
        return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
    }  

 private textValue = "Enter Integer Value";
    private log: string ='';

    private logText(value: string): void {
        this.log = `'${value}'\n`
    } 
}