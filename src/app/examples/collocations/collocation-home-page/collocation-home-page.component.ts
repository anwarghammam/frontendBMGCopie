import { Component, OnInit ,ViewChild, ElementRef, Input} from '@angular/core';
import { PostsServiceService } from 'app/services/postservice/posts-service.service';
import {Router,RouterModule} from '@angular/router';
import { EventServiceService } from 'app/services/eventservice/event-service.service';
import { events } from 'app/examples/models/events';
import { ArrayType } from '@angular/compiler/src/output/output_ast';
import { UserserviceService } from 'app/services/userservice/userservice.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
@Component({
  selector: 'app-collocation-home-page',
  templateUrl: './collocation-home-page.component.html',
  styleUrls: ['./collocation-home-page.component.scss']
})
  
export class CollocationHomePageComponent implements OnInit {
    posts:any ;
    upcoming_events: Array <events>;
     profile:boolean=false ;
    commentvisible:boolean=false;
    comment:any ;
   id:any;
   user:any;
   sexe:String;
   user_id:any=localStorage.getItem("currentUser");
   
  constructor(private router:Router ,private postservice: PostsServiceService,private userservice:UserserviceService ,private eventsservice:EventServiceService) {
    
  
   }
   

  ngOnInit() {
    this.postservice.getAll().subscribe(
      (data)=>{
        this.posts=data ;
       
      })
      this.eventsservice.getupcomingevents().subscribe(
        (data)=>{
          this.upcoming_events=data ;
         console.log(this.upcoming_events[0]);
        }
      )
      this.userservice.getuser(this.user_id).subscribe(
        data=>{
          this.user=data ;
          this.sexe=this.user.sexe ;
    })}
     show_profile(){
       this.profile=true ;
     }
      comments(value){
     
        this.postservice.getAllComments(value).subscribe(
          (data)=>{
            this.comment=data;
            console.log(this.comment);
          
          
          }
        )
      }
  addcomment(text:string,post_id:number){
    
    this.user_id=localStorage.getItem("currentUser");
    
    this.postservice.addcomment(text,post_id,this.user_id).subscribe(
      comment=>{
        console.log(comment);
        this.comment.add(comment);
        this.router.navigate(["/profile"]);
      }
    )
  }
  addlike(id){
    console.log(id);
    this.postservice.addlike(id).subscribe(
      (data)=>{
       
      this.router.navigate(["/collocation"]); }
    )
  }
  logout(){
    localStorage.setItem("currentUser",null);
    this.router.navigate[('/login')];
  }
  suppcomment(id_comment,user_id){
    console.log(id_comment);
    console.log(user_id);
  if(user_id==localStorage.getItem("currentUser")){
    this.postservice.suppcomment(id_comment).subscribe(
      (data)=>{
        console.log(data);
      }
    )
  }

  }

}
