import { Component } from '@angular/core';
import {AuthorsService} from './authors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  authors:string[];
  title = 'app';
  constructor(private authorService:AuthorsService){
  	this.authors = authorService.getAuthors();
  }
}
