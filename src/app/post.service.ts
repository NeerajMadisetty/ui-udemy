import { Injectable } from "@angular/core";
import { Post } from "./post.model";

@Injectable({providedIn: 'root'})
export class PostService{
    listOfPosts: Post[] = [
        new Post("Art","Art description","https://expertphotography.b-cdn.net/wp-content/uploads/2020/10/Fine-Art-Photography-Examples-Sunlight-Planets-by-Troyes-Christina.jpg","Me",new Date()),
        new Post("Dance","Dance description","https://expertphotography.b-cdn.net/wp-content/uploads/2020/10/Fine-Art-Photography-Examples-Sunlight-Planets-by-Troyes-Christina.jpg","Me",new Date()),
        new Post("Music","Music description","https://expertphotography.b-cdn.net/wp-content/uploads/2020/10/Fine-Art-Photography-Examples-Sunlight-Planets-by-Troyes-Christina.jpg","Me",new Date())
      ];

      getPosts(){
        return this.listOfPosts;
      }

      deletePosts(index: number){
        this.listOfPosts.splice(index,1);
      }

      addPost(post: Post){
        this.listOfPosts.push(post);
      }

      updatePost(index: number,post: Post){
        this.listOfPosts[index] = post;
      }


}