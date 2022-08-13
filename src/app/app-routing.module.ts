import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostFormComponent } from './posts/post-form/post-form.component';
import { PostComponent } from './posts/post/post.component';


import { PostsComponent } from './posts/posts.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: '', component: UsersComponent },
  {path: 'users', component: UsersComponent},
  {path: 'user', component: UserComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'post', component: PostComponent},
  {path: 'post-form', component: PostFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
