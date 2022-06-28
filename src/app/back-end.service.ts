import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { PostService } from './post.service';

/**
 * https://ui-udemy-default-rtdb.firebaseio.com/
 */
@Injectable({ providedIn: 'root' })
export class BackEndService {
  constructor(private postService: PostService, private http: HttpClient) {}

  saveData() {
    const listOfPosts: Post[] = this.postService.getPosts();

    this.http.put(
      'https://ui-udemy-default-rtdb.firebaseio.com/posts.json',
      listOfPosts
    ).subscribe((res)=>{
        console.log(res);
    });
  }
}
