import { Component, OnInit, ViewChild } from '@angular/core';
import { Data } from '../json-data';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.css'],
})
export class InfiniteScrollComponent implements OnInit {

  originalData: any[];
  viewedData: any[];
  clickStatus: number;
  page: number = 1;
  isLoading: boolean = false;
  @ViewChild('title') input_title: HTMLInputElement;
  @ViewChild('nam') input_name: HTMLInputElement;

  constructor() { }
  ngOnInit() {
    this.originalData = Data;
    this.viewedData = this.originalData.slice(0, 10);
    this.clickStatus = 0;
    console.log(Data);

    window.onscroll = () => {
      let x = document.body.scrollHeight;
      let y = (document.documentElement.scrollTop + window.innerHeight) * 100;
      let z = y / x;
      console.log(z);
      if (z === 100) {
        if (this.viewedData < this.originalData) {
          this.isLoading = true;
          this.loadMore();
        }
      }
    }
  }

   loadMore() {
      this.isLoading = false;
      this.page++;
      this.viewedData = this.viewedData
        .concat(this.originalData.slice(this.viewedData.length, this.page * 10));
      console.log(this.viewedData.length)
  }

  filter(input: HTMLInputElement) {
    if (input.value !== '') {
      console.log("enable");
      this.isLoading = false
    } else {
      console.log("disable");
    }
    let val = input.value;
    let filteredVal = this.originalData.filter((video) => {
      if (input.name === 'title') return video.title.toLowerCase().indexOf(val.toLowerCase()) > -1
      return video.parent_name.toLowerCase().indexOf(val.toLowerCase()) > -1
    })
    this.viewedData = filteredVal.slice(0, 10);
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
