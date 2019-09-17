import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SyncRequestClient } from 'ts-sync-request/dist';
@Injectable({
    providedIn: 'root'
})
export class LoginValidationsService {
    private _url: string = "http://localhost:4600";
    
    constructor(private http: HttpClient) { }

    checkCredentials(email:string,password:string){
        console.log(password)
      //  const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(`${this._url}/login_credentials`,[email,password]);
    }

    logIn(){
        localStorage.setItem('loggedIn','true');
        localStorage.setItem('session','ok');
    }6666

    logOut(){
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('session');
    }

    timeOut(){
        localStorage.removeItem('loggedIn');
        localStorage.setItem('session','timeout');
    }

}
