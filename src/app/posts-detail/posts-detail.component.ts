import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../core/objects/post';

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.scss']
})
export class PostsDetailComponent implements OnInit {

  @Input() post: Post = new Post();

  constructor() { }

  ngOnInit(): void {
  }

}
