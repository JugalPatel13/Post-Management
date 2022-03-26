import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComment, IPost } from '../post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html'
})
export class PostDetailComponent implements OnInit {

  basUrl = 'https://jsonplaceholder.typicode.com/';
  post!:IPost;
  comments:IComment[]= [];
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  const url = this.activatedRoute.snapshot['url'];
  let id= url[2];
  fetch(this.basUrl + 'posts/' + id).then((response) => response.json()).then(post =>  this.post = post);
  fetch(this.basUrl + 'posts/'+ id +'/comments').then((response) => response.json()).then(comments=>  this.comments = comments);
  }

}
