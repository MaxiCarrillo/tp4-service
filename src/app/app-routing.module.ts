import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './components/page1/page1.component';
import { PageAComponent } from './components/page-a/page-a.component';
import { PageBComponent } from './components/page-b/page-b.component';
import { PageCComponent } from './components/page-c/page-c.component';
import { PageDComponent } from './components/page-d/page-d.component';

const routes: Routes = [
  {path: "page1", component: Page1Component},
  {path: "page-a", component: PageAComponent},
  {path: "page-b", component: PageBComponent},
  {path: "page-c", component: PageCComponent},
  {path: "page-d", component: PageDComponent},
  {path: '', redirectTo: '/page-a', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
