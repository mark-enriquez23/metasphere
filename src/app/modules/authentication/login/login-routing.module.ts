import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Components
import { LoginComponent } from './pages/login/login.component'


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    // children: [
    //     {
    //      path: '',
    //      redirectTo: '',
    //      pathMatch: 'full'
    //     },
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
