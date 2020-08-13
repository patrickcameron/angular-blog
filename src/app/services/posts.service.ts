import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Post } from '../models/post';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

@Injectable({
    providedIn: 'root'
})

export class PostsService {
    postsUrl:string = 'https://jsonplaceholder.typicode.com/posts';
    
    constructor(private http:HttpClient) {}

    // Get All Posts
    getPosts():Observable<Post[]> {
        return this.http.get<Post[]>(`${this.postsUrl}?_limit=10`);
    }

    // Get Single Post
    getSinglePost(id:string):Observable<Post> {
        return this.http.get<Post>(`${this.postsUrl}?id=${id}`);
    }
}