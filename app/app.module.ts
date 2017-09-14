import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CreditCardMaskPipe } from './credit-card-mask.pipe';


@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [
    AppComponent,
    CreditCardMaskPipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}