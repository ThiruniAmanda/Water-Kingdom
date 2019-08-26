import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SyncRequestClient } from 'ts-sync-request/dist';
@Injectable({
    providedIn: 'root'
})
export class RemembermeService {
    private _url: string = "http://localhost:4600";
    
    constructor(private http: HttpClient) { }

    setRememberToken(email:string){
        localStorage.setItem('remember_me',email)
    }

    removeRememberToken(){
        localStorage.removeItem('remember_me');
    }
}
