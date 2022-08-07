import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
    selector : `pm-star`,
    templateUrl : `./star.component.html`,
    styleUrls: ['./star.component.css']
})

export class starRatingComponent implements OnChanges{
@Input() rating: number;
 startWidth : number;

@Output () ratingClicked: EventEmitter<string> = new EventEmitter<string>();

 constructor(){
    this.startWidth = 0;
    this.rating = 0;

 }
 
 ngOnChanges(): void {
   this.startWidth = this.rating * 75 / 5;
     
 }

 onClick(): void{
  this.ratingClicked.emit(`The Rating is ${this.rating} `);
 }



}