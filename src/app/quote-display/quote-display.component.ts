import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.css']
})
export class QuoteDisplayComponent implements OnInit {



    @Input() quotes: Quote[];
    quoteDelete(ind) {
        this.quotes.splice(ind, 1);
    }

    upVote(id) {
        this.quotes[id].upvote();

    }

    downVote(id) {
        this.quotes[id].downvote();
    }


  constructor() { }

  ngOnInit() {
  }

}
