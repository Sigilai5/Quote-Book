import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
      new Quote(1, 'Brian Sigilai', 'We live in the future so our present is our past.', 'Kanye West', 0, 0, new Date()),

  ];


    addNewQuote(quote) {
        const quoteLength = this.quotes.length;
        quote.id = quoteLength + 1;
        this.quotes.unshift(quote);

    }



    constructor() { }

    ngOnInit() {
    }


}
