import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Quote } from './../quote'
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuoteFormComponent implements OnInit {

  @Output() newQuoteEventEmitter = new EventEmitter();
  currQuote: Quote = new Quote();
  constructor() { }

  ngOnInit() {
  }

  onSubmitQuote(){
    this.currQuote.rating = 0;
    console.log(this.currQuote);
    this.newQuoteEventEmitter.emit(this.currQuote);
    this.currQuote = new Quote();
  }

}
