import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDeleteComponent } from './post/post-delete/post-delete.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { PostListComponent } from './post/post-list/post-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo:'post/list'
  },
  {
    path: 'post/list',
    component: PostListComponent,
  },
  {
    path:'post/detail/:id',
    component: PostDetailComponent
  },
  {
    path: 'post/delete/:id',
    component: PostDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
