import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  language: string = "";
  languages_list: string[] =  ['Hindi','Tamil'];
  
  addLang(){
    console.log("Event Detetced");
    this.languages_list.push(this.language);
    console.log(this.languages_list);
  }
}
