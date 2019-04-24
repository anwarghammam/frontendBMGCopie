import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {events} from '../../examples/models/events';
import { Observable } from 'rxjs';
@Injectable()
export class EventServiceService {
  test:any[] 

  constructor(private HttpClient:HttpClient){

  }
  getevents(){
   return  this.HttpClient.get("http://localhost:8081/bmg/afficher")
        

      }
      getupcomingevents() : Observable<any>{
        return this.HttpClient.get("http://localhost:8081/bmg/upcoming")
      }
    
    

      public  delete(id:any): Observable<any>{
        return  (this.HttpClient.delete("http://localhost:8081/bmg/delete"+"/"+id) )
}
 addevent(nom:string,region:string,description:string,prix:number,date_deb:string,date_fin:string,nbre_de_place:number){
   return this.HttpClient.post("http://localhost:8081/bmg/addE",{nom:nom,region:region,description:description,prix:prix,date_deb:date_deb,date_fin:date_fin,nbre_de_place:nbre_de_place});
 }
 sendemail(nom:string,email:string,msg:string){
   return this.HttpClient.post("http://localhost:8081/bmg/sendmail",{nom:nom,email:email,msg:msg})

 }
 public addparticipant(id:any,nom:string,prenom:string,email:string,tel:string,password:string){
   return this.HttpClient.post("http://localhost:8081/event"+"/"+id,{nom:nom,prenom:prenom,tel:tel,password:password,email:email})
 }
}

 


