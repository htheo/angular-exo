import { Injectable } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http:Http) { }
  getData(){
    return this.http.get('https://angularhttp-13ba1.firebaseio.com/goats.json')
        .map((response:Response)=>response.json());
  }

  sendData(goat:any){
    const body=JSON.stringify(goat);
    const headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('https://angularhttp-13ba1.firebaseio.com/goats.json',body,{headers:headers})
        .map((data:Response)=>data.json());
  }
  sendUsers(user:any){
    const body=JSON.stringify(user);
    const headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('https://angularhttp-13ba1.firebaseio.com/users.json',body,{headers:headers})
        .map((data:Response)=>data.json());
  }
  getUsers(){
    return this.http.get('https://angularhttp-13ba1.firebaseio.com/users.json')
        .map((response:Response)=>response.json());
  }

  getMydata(){
    return this.http.get('https://angularhttp-13ba1.firebaseio.com/goats.json')
        .map((response:Response)=>response.json());
  }
  getMyusers(){
    return this.http.get('https://angularhttp-13ba1.firebaseio.com/users.json')
        .map((response:Response)=>response.json());
  }
}
