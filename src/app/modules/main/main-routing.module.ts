import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Components
import { MainComponent } from './pages/main/main.component'


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
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
export class MainRoutingModule { }
