import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from './../quote'
@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuoteListComponent implements OnInit {

  @Output() voteUpEmitter = new EventEmitter();
  @Output() voteDownEmitter = new EventEmitter();
  @Output() deleteEmitter = new EventEmitter();
  @Input() quoteList: Quote[];
  constructor() { }
  ngOnInit() {
    console.log(this.quoteList);
  }

  voteUp(index:number):void {
    this.voteUpEmitter.emit(index);
  }

  voteDown(index:number):void {
    this.voteDownEmitter.emit(index);
  }

  deleteQuote(index:number):void {
    this.deleteEmitter.emit(index);
  }

}
