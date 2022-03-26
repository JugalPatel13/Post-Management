import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostDeleteComponent } from './post/post-delete/post-delete.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { PostListComponent } from './post/post-list/post-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostDetailComponent,
    PostDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
