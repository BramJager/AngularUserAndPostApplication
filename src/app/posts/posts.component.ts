import { Component, OnInit } from '@angular/core';
import { Post } from '../core/objects/post';
import { PostService } from '../core/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private service: PostService) { }

  postList: Post[] = []

  ngOnInit(): void {
    this.service.getAll().subscribe(data => {this.postList = data} );
  }

}
