import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
// import { NguiInfiniteListModule } from '@ngui/infinite-list';
// import { InfiniteScrollModule } from 'angular2-infinite-scroll';
// import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { AppRoutingModule } from './app-routing.module';
import { PaginateComponent } from './paginate/paginate.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { MaterialTableComponent } from './material-table/material-table.component';
import {MatTableModule} from '@angular/material/table';





@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PaginateComponent,
    InfiniteScrollComponent,
    MaterialTableComponent
  ],
  imports: [
    BrowserModule,
    // NguiInfiniteListModule,
    NgxPaginationModule,
    // InfiniteScrollModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
