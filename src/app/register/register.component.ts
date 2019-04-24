import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'app/services/userservice/userservice.service';
import { FormBuilder, FormGroup, Validators,FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

declare var $:any
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private prenom = new FormControl('');
  private nom = new FormControl('');
  private email = new FormControl('');
  private password = new FormControl('');
  private tel = new FormControl('');
  
  private loginForm=new FormGroup({
    nom: this.nom,
    prenom: this.prenom,
    email: this.email,
    tel: this.tel,
    password: this.password
  });
  
    

  constructor(private formBuilder: FormBuilder,private userservice:UserserviceService , private router:Router) { }

  
  

 ngOnInit() {
  $.getScript('../../../assets/js/login.js')
 }
 
 onSubmit(){
   
this.userservice.logup(this.nom.value,this.prenom.value,this.tel.value,this.email.value,this.password.value).subscribe(
  data=>{console.log(data);
    this.router.navigate(["/login"])});
 
  

} }
