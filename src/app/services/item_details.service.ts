import {Injectable} from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class ItemDetailsService{

    private _url:string="http://localhost:4600";

    constructor(private http:HttpClient){}

    getItemData(){
        return this.http.get(`${this._url}/fetch_items`);
    }

    deleteItemData(id:number){
        return this.http.get(`${this._url}/delete_data/${id}`);
    }


}