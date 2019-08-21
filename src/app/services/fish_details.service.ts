import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SyncRequestClient } from 'ts-sync-request/dist';
@Injectable({
    providedIn: 'root'
})
export class FishDetailsService {
    private _url: string = "http://localhost:4600";
    constructor(private http: HttpClient) { }

    getItemData() {
        let url = "http://localhost:4600/fetch_details";
        var response = new SyncRequestClient().addHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NDc2OTg1MzgsIm5iZiI6MTU0NzY5NDIxOCwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6InN0cmluZyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6InN0cmluZyIsIkRPQiI6IjEvMTcvMjAxOSIsImlzcyI6InlvdXIgYXBwIiwiYXVkIjoidGhlIGNsaWVudCBvZiB5b3VyIGFwcCJ9.qxFdcdAVKG2Idcsk_tftnkkyB2vsaQx5py1KSMy3fT4").get<Response>(url);
        return response;
    }

    deleteItemData(id:string) {
        return this.http.get(`${this._url}/delete_data/${id}`);
    }

    filterData(id:string){
        return this.http.get(`${this._url}/search_data/${id}`);
    }

    changeVisibilityFalse(field:string){
        return this.http.get(`${this._url}/visibility_change_false/${field}`)
    }

    changeVisibilityTrue(field:string){
        return this.http.get(`${this._url}/visibility_change_true/${field}`)
    }

    loadVisibility(){
        return this.http.get(`${this._url}/load_visibility`)
    }

    
    getUpdateData(code:string) {
        let url = `http://localhost:4600/to_update_data/${code}`;
        var response = new SyncRequestClient().addHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NDc2OTg1MzgsIm5iZiI6MTU0NzY5NDIxOCwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6InN0cmluZyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6InN0cmluZyIsIkRPQiI6IjEvMTcvMjAxOSIsImlzcyI6InlvdXIgYXBwIiwiYXVkIjoidGhlIGNsaWVudCBvZiB5b3VyIGFwcCJ9.qxFdcdAVKG2Idcsk_tftnkkyB2vsaQx5py1KSMy3fT4").get<Response>(url);
        return response;
    }
}
