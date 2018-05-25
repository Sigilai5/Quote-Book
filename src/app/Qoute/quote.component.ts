import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
      new Quote(1, 'Brian Sigilai', 'Live and Let Die', 'Malcomx', 0, 0),
      new Quote(2, 'Moses Kiseku', 'Girls Keep Diaries,Boys keep Journals', 'David Muse', 0, 0),
      new Quote(3, 'Eddy Muthoni', 'The Earth is Messed up', 'Rodgers Amber', 0, 0)

  ];

    upVote(id) {
         this.quotes[id].upvote();

    }

    downVote(id) {
        this.quotes[id].downvote();
    }
    addNewQuote(quote){
        let quoteLength = this.quotes.length;
        quote.id = quoteLength +1;
        this.quotes.push(quote);

    }



    constructor() { }

    ngOnInit() {
    }


}
