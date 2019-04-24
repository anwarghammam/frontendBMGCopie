import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'app/services/userservice/userservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'app/examples/models/user';


declare var $: any;
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})

export class UserloginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
    submitted = false;
    returnUrl: string;

  constructor(private formBuilder: FormBuilder ,private userservice:UserserviceService, private router: Router,) {

   } 
   get f(){
     return this.loginForm.controls;}
   

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  $.getScript('../../../assets/js/login.js')
  }
  onSubmit(){
    let user:User 
    this.userservice.login(this.f.email.value,this.f.password.value)
        .subscribe(
     (Response) :any =>{
          
            console.log(Response)
            if(Response!=null) {
             
              
          localStorage.setItem('currentUser',JSON.stringify(Response.id));
          console.log("success1");
          this.router.navigate(["/profile"]).then(e=>{
            if(e){
              console.log("ok")
            }
            else{
              console.log("!ok")
            }
          })
            console.log("router");}

           else if( Response ==null){
           
          alert('invalid !!');

         
           
        }
      }
        )
       

  }

}
