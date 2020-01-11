import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  BACKEND_URL = environment.url;

  constructor(
    private http: HttpClient
  ) {}

  getPosts() {
    console.log('Getting Posts');
    return this.http.get(`${this.BACKEND_URL}/api/posts/`);
  }

}

