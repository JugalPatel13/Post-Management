import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IComment, IPost } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html'
})
export class PostListComponent implements OnInit {
  loading:boolean = false;
  posts:IPost[] = [];
  comments: IComment[] = [];
  basUrl = 'https://jsonplaceholder.typicode.com/';
  
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.loading = true;
    fetch(this.basUrl + 'posts').then((response) => response.json()).then(posts =>  this.posts = posts);
    fetch(this.basUrl + 'comments').then((response) => response.json()).then(comments=>  this.comments = comments);
    this.loading = false;
  }

  edit(id:number | undefined){
    this.router.navigate(['post/detail/' + id])
  }

  delete(id:number| undefined){
    this.router.navigate(['post/delete/' + id])
  }
}
