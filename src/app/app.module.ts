import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NguiInfiniteListModule } from '@ngui/infinite-list';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    NguiInfiniteListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
