import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FirstchildComponent } from './firstchild/firstchild.component';
import { SecondchildComponent } from './secondchild/secondchild.component';

const routes: Routes = [
  {
    path: 'first',
    component: FirstComponent,
    pathMatch: 'full'
  },
  {
    path: 'second',
    component: SecondComponent,
    children: [
      {
        path: 'firstchild',
        component: FirstchildComponent
      },
      {
        path: 'secondchild',
        component: SecondchildComponent
      },
    ],
  },
  {
    path: 'third',
    component: ThirdComponent
  },
  {
    path: 'fourth',
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
