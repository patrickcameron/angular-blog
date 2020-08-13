import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'blog',
    component: PostComponent,
    children: [
      {
        path:'blog/:type',
        component: PostComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
