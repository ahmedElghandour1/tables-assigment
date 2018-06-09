import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginateComponent } from './paginate/paginate.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { MaterialTableComponent } from './material-table/material-table.component';



const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {path: 'paginate', component: PaginateComponent},
  {path: 'infinite-scroll', component: InfiniteScrollComponent},
  {path: 'material', component: MaterialTableComponent},

]

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }

