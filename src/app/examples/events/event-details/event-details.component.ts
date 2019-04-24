import { Component, OnInit, Input } from '@angular/core';
import {EventServiceService} from 'app/services/eventservice/event-service.service';
import { FormBuilder, FormGroup, Validators,FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
@Input() entry ;

private prenom = new FormControl('');
private nom = new FormControl('');
private email = new FormControl('');
private password = new FormControl('');
private tel = new FormControl('');

private addparticipantForm=new FormGroup({
  nom: this.nom,
  prenom: this.prenom,
  email: this.email,
  tel: this.tel,
  password: this.password
});

  

constructor(private formBuilder: FormBuilder,private eventservice:EventServiceService , private router:Router) { }



 
  ngOnInit() {
  }
  onSubmit(){
    alert("we are glad of your participation");
        this.router.navigate(["/profile"]);
    this.eventservice.addparticipant(this.entry.id,this.nom.value,this.prenom.value,this.email.value,this.tel.value,this.password.value)
    .subscribe(
      data=>{
       
        alert("we are glad of your participation");
        this.router.navigate(["/profile"]);
      }
    )
  
  }

}
