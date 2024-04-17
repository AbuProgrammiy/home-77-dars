import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';                // HomeComponent |ishlashi uchun
import { GetallComponent } from './components/getall/getall.component';     // GetallComponent |ishlashi uchun
import { CreateComponent } from './components/create/create.component';
import { NgBootstrapCreateComponent } from './components/ng-bootstrap-create/ng-bootstrap-create.component';
import { DeleteComponent } from './components/delete/delete.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"getall" , component: GetallComponent},
  {path:"create",component:CreateComponent},
  {path:"app-ng-bootstrap-create",component:NgBootstrapCreateComponent},
  {path:"app-delete",component:DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
