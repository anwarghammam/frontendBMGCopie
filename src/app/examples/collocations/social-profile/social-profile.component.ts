import { Component, OnInit, Input } from '@angular/core';
import { UserserviceService } from 'app/services/userservice/userservice.service';


@Component({
  selector: 'app-social-profile',
  templateUrl: './social-profile.component.html',
  styleUrls: ['./social-profile.component.scss']
})
export class SocialProfileComponent implements OnInit {
@Input() user:any ;
@Input() sexe:String;
@Input() profile:boolean ;
current_id:any ;
follow:boolean;
connected:boolean
  constructor(private userservice:UserserviceService,) { }

  ngOnInit() {
    if(this.user.id==localStorage.getItem("currentUser")){
      this.connected=true ;
    }
  }

  addfollow(id:any){
    console.log(id)
    this.follow=true ;
     this.current_id=localStorage.getItem("currentUser");
    console.log(this.current_id);
    this.userservice.addfollow(id).subscribe(
      (data)=>{
        console.log(data);
      }
    )
    console.log("success");
    this.userservice.addfollowing(this.current_id).subscribe(
      (data)=>{
        console.log(data)
      }
    )
    console.log("success1");

    
  }

}
