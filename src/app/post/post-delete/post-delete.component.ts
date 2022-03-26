import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-delete',
  templateUrl: './post-delete.component.html'
})
export class PostDeleteComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const url = this.activatedRoute.snapshot['url'];
    let id= url[2];
  }

}
