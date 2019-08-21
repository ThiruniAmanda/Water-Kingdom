import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  private _url:string="http://localhost:4600";

  constructor(private http:HttpClient) { }

  loadUserProfileData(){
    return this.http.get(`${this._url}/user_profile_details`)
}
  
}
