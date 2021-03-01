import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Components
import { PreCheckComponent } from './pages/pre-check/pre-check.component'


const routes: Routes = [
  {
    path: '',
    component: PreCheckComponent,
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
export class PreCheckRoutingModule { }
