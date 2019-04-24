import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { User } from 'app/examples/models/user';
import { Observable } from 'rxjs';

@Injectable()
export class UserserviceService {

  constructor(private httpClient:HttpClient) { }

  login(email:string, password:string ):Observable<any>{ 
    return this.httpClient.post("http://localhost:8081",{email:email,password:password})
  
   
    }
    logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
  }
  logup(nom:string,prenom:string,tel:string,email:string,password:string){
    return this.httpClient.post("http://localhost:8081/signUp",{nom:nom,prenom:prenom,tel:tel,email:email,password:password

    })
  }
  getuser(id:any){
    return this.httpClient.get("http://localhost:8081"+"/"+id);
  }
  addfollow(id:any){
   return this.httpClient.get("http://localhost:8081/addfollow"+"/"+id);
  }
  addfollowing(id:any){
   return this.httpClient.get("http://localhost:8081/addfollowing"+"/"+id);
  }

  }






