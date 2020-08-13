import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PostsService } from '../../services/posts.service';

import { Post } from '../../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post;

  constructor(private activatedRoute: ActivatedRoute, private postsService:PostsService) {}
  
  public id:string;

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.postsService.getSinglePost(this.id).subscribe(post => {
      this.post = post[0];
    });
  }

}
