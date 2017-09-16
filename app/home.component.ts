import { Component } from '@angular/core';
import {OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './app/template.html'
})
export class HomeComponent implements OnInit  { 

	ngOnInit() {
    this.intVal = {
      val: ''
    };
  }
  public intVal: Integer;
  
  public edited = false;
  
  private selectedLink: string="LowerCase";        
  
  setradio(e: string): void   
  {  
  
    this.selectedLink = e;  
          
  }  
  
    isSelected(val: string): boolean   
  {  
  
        if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
            return false;  
  }  
  
        return (this.selectedLink === val); // if current radio button is selected, return true, else return false  
    }  

	private textValue = "Enter Integer Value";
    private log: string ='';

    private logText(value: string): void {
		this.edited = true;
        this.log = `'${value}'\n`
    } 
	
	 clearText(): void {
		 this.intVal = {
		  val: ''
		};
		this.edited = false;  
    } 
	
	
}

export class Integer {
  val: string;
}
