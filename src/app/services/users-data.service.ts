import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  url = 'https://cat-fact.herokuapp.com/facts';
  constructor(private http: HttpClient) { }
  users(){
    return this.http.get(this.url);
  }
  saveUsers(data: any){
    return this.http.post(this.url,data);
  }
}
