import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RomanConverterPipe } from './roman-converter.pipe';


@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [
    AppComponent,
    RomanConverterPipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}