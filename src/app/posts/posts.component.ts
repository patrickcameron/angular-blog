import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

import { Post } from '../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts:Post[];

  constructor(private postsService:PostsService) {}

  ngOnInit() {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    })
  }

}
