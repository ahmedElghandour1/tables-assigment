import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  set1: any = {
    limit: 10, offset: 0, endOfList: false, loadingInProgress: false, list: []
  };

  loadMore(data: any): void {
    if (!data.loadingInProgress) {
      if (data.offset > 99) {    // detect the end of list
        data.endOfList = true;
      } else {
        setTimeout(() => data.loadingInProgress = true);
        setTimeout(() => {      // mimics http call delay
          let max = data.offset + data.limit;
          for (let i = data.offset; i < max; i++) {
            data.list.push(i);
          }
          data.offset = max;
          data.loadingInProgress = false;
        }, 1000);
      }
    }
  }

}
