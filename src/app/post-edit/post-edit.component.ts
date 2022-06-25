import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  form!: FormGroup;
  index: number = 0;
  editMode = false;
  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {

    let title = '';
    let description = '';
    let imagePath = '';

    this.route.params.subscribe((params: Params) => {
        if(params['index']){
            console.log(params['index']);
        }

        this.index = params['index'];
        const post = this.postService.getPost(this.index);
        title = post.title;
        description = post.description;
        imagePath = post.imagePath;

        this.editMode = true;
    });
    this.form = new FormGroup({
      Title: new FormControl(title, [
        Validators.required,
        Validators.maxLength(10),
      ]),
      Description: new FormControl(description),
      ImagePath: new FormControl(imagePath),
    });
  }

  onSubmit() {
    console.log('onSubmit called');
    const title = this.form.value.Title;
    const description = this.form.value.Description;
    const imagePath = this.form.value.ImagePath;

    const post: Post = new Post(
      title,
      description,
      imagePath,
      "test@gmail.com",
      new Date()
    );
    
    if(this.editMode){
      this.postService.updatePost(this.index,post);
    }else{
      this.postService.addPost(post);
    }
    this.router.navigate(['/post-list']);
  }
}
