import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {
  
  authors:string[] = ['Author 1','Author 2','Author 3','Author 4','Author 5','Author 6'];

  constructor() { }

  getAuthors(){
  	return this.authors;
  }

}
