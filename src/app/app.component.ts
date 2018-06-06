import { Data } from './json-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any[];
  clickStatus: number;

  constructor() { }
  ngOnInit() {
    this.data = Data;
    this.clickStatus = 0;
    console.log(Data);
  }


  sortData(btn) {
    this.clickStatus++;
    //likes
    if (btn === 'likes') {
      if (this.clickStatus % 2 == 0) {
        //likes asc
        this.data.sort((a: any, b: any) => {
          return a.likes - b.likes;
        })
      } else if (this.clickStatus % 2 == 1) {
        //likes desc
        this.data.sort((a: any, b: any) => {
          return b.likes - a.likes;
        })
      }
    }
    //views
    if (btn === 'views') {
      if (this.clickStatus % 2 == 0) {
        //likes asc
        this.data.sort((a: any, b: any) => {
          return a.views - b.views;
        })
      } else if (this.clickStatus % 2 == 1) {
        //likes desc
        this.data.sort((a: any, b: any) => {
          return b.views - a.views;
        })
      }
    }
    //views
    if (btn === 'shares') {
      if (this.clickStatus % 2 == 0) {
        //likes asc
        this.data.sort((a: any, b: any) => {
          return a.shares - b.shares;
        })
      } else if (this.clickStatus % 2 == 1) {
        //likes desc
        this.data.sort((a: any, b: any) => {
          return b.shares - a.shares;
        })
      }
    }
  }


}
