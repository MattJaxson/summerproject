import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class FavoritesService {
  BACKEND_URL = environment.url;

  constructor(
    private http: HttpClient
  ) {}

  getFavorites() {
    console.log('Getting Favorites');
    // return this.http.get(`${this.BACKEND_URL}/api/admin/jobs`);
  }
}

