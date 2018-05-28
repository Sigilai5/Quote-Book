import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteComponent } from './Qoute/quote.component';
import { QuoteDisplayComponent } from './quote-display/quote-display.component';
import { HighlightDirective } from './highlight.directive';
import { DisplayTimePipe } from './display-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    QuoteComponent,
    QuoteDisplayComponent,
    HighlightDirective,
    DisplayTimePipe
  ],
  imports: [
    BrowserModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
