import { Component, OnInit } from "@angular/core";
import { Istaff } from "./staffs";
import {staffService} from "./staff.service"



@Component({
    selector : `st-root`,
    templateUrl :`./staff-list.component.html`,
    styleUrls: ['./staff-list.css']
})

export class staffsComponent implements OnInit{
    title :string = "Staff Information";
    staffRating: string = 'Rating ';
    showImage:boolean = false;
    imageWidth:number = 90;
    errorMessage:string;

    toggleImage(){
        this.showImage = !this.showImage;
    }
    
    _listFilter : string;
    get listFilter():string{
        return this._listFilter;
    }

    set listFilter(value:string){
        this._listFilter = value;
        this.filterStaff = this.listFilter?this.performList(this.listFilter):this.Istaffs;
    }

    filterStaff: Istaff[] =[];
   constructor(private staffService : staffService){
    this._listFilter = 'cart';
    this.errorMessage ="";
   }

   performList(filterBy:string):Istaff[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.Istaffs.filter((student : Istaff)=>
    student.Name.toLocaleLowerCase().indexOf(filterBy) !==-1)
 }

   Istaffs:Istaff[] = [];

onRatingClicked(message:string): void{
    this.staffRating = message;
}


ngOnInit(): void {
  this.staffService.getService().subscribe({
    next : Istaffs => {
        this.Istaffs = Istaffs
        this.filterStaff = this.Istaffs;
    },
    error : err => this.errorMessage = err
  });

  
  
}



}




