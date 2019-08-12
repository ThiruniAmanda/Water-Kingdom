import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  private _url:string="http://localhost:4600";

  constructor(private http:HttpClient) { }

  loadProfilePic(){
    return this.http.get(`${this._url}/load_profile`);
  }
  
}
