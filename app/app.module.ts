import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RomanConverterPipe } from './roman-converter.pipe';
import { IntegerConverterPipe } from './integer-converter.pipe';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AboutComponent} from './about.component';
import { HomeComponent } from './home.component';
import {APP_BASE_HREF} from '@angular/common';


@NgModule({
  imports: [BrowserModule,FormsModule,
		  RouterModule.forRoot(routes)],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  declarations: [
    AboutComponent,
    HomeComponent,
    AppComponent,
	IntegerConverterPipe,
    RomanConverterPipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}