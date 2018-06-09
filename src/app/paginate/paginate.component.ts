import { Component, OnInit } from '@angular/core';
import { Data } from '../json-data';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent implements OnInit {
  originalData: any[];
  viewedData: any[];
  clickStatus: number;
  page: number = 1;

  constructor() { }
  ngOnInit() {
    this.originalData = Data;
    this.viewedData = Data;
    this.clickStatus = 0;
    console.log(Data);
  }


filter(input: HTMLInputElement) {
  let val = input.value;
  let filteredVal = this.originalData.filter((video) => {
    if(input.name ==='title') return video.title.toLowerCase().indexOf(val.toLowerCase()) > -1;
    else if(input.name ==='name') return video.parent_name.toLowerCase().indexOf(val.toLowerCase()) > -1;
    return;
  })
  this.viewedData = filteredVal;
  console.log(filteredVal);
  console.log(input.name)
}

  sortData(btn) {
    this.clickStatus++;
    //likes
    if (btn === 'likes') {
      if (this.clickStatus % 2 == 0) {
        //likes asc
        this.viewedData.sort((a: any, b: any) => {
          return a.likes - b.likes;
        })
      } else if (this.clickStatus % 2 == 1) {
        //likes desc
        this.viewedData.sort((a: any, b: any) => {
          return b.likes - a.likes;
        })
      }
    }
    //views
    if (btn === 'views') {
      if (this.clickStatus % 2 == 0) {
        //likes asc
        this.viewedData.sort((a: any, b: any) => {
          return a.views - b.views;
        })
      } else if (this.clickStatus % 2 == 1) {
        //likes desc
        this.viewedData.sort((a: any, b: any) => {
          return b.views - a.views;
        })
      }
    }
    //views
    if (btn === 'shares') {
      if (this.clickStatus % 2 == 0) {
        //likes asc
        this.viewedData.sort((a: any, b: any) => {
          return a.shares - b.shares;
        })
      } else if (this.clickStatus % 2 == 1) {
        //likes desc
        this.viewedData.sort((a: any, b: any) => {
          return b.shares - a.shares;
        })
      }
    }
  }


}
