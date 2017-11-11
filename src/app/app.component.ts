import { Component } from '@angular/core';
import { Quote } from './quote'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quoteList:Quote[] = [
    { text: 'The only way to get rid of temptation is to yield to it', author: 'Oscar Wilde', rating: 0}
  ];

  addNewQuote(newQuote:Quote): void{
    this.quoteList.push(newQuote);
  }

  deleteQuote(index:number):void{
    console.log('Deleting: ', index);
    this.quoteList.splice(index, 1);
  }

  voteUpQuote(index:number):void {
    this.quoteList[index].rating++;
    this.sortList();
  }

  voteDownQuote(index:number):void {
    this.quoteList[index].rating--;
    this.sortList();
  }

  sortList():void{
    this.quoteList.sort((a, b)=> b.rating - a.rating);
  }
}
