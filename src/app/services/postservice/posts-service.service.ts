import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class PostsServiceService {

  constructor(private HttpClient:HttpClient) { 

  }


  getAll(){
    return this.HttpClient.get("http://localhost:8081/allOffer");


  }

  getAllComments(id:string){
    return this.HttpClient.get("http://localhost:8081/find_comments_bypost"+"/"+id);

  } 
  addcomment(text:string,post_id:number,user_id:any){
    return this.HttpClient.post("http://localhost:8081/addcomment"+"/"+user_id+"/"+post_id,{text:text});


  }
  addlike(id:any){
    return this.HttpClient.get("http://localhost:8081/addlike"+"/"+id);
  }
suppcomment(id:any){
 return this.HttpClient.delete("http://localhost:8081/delete"+"/"+id);
}







}
