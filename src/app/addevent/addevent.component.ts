import { Component, OnInit } from '@angular/core';
import { EventServiceService } from 'app/services/eventservice/event-service.service';
import { events } from 'app/examples/models/events';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.scss']
})
export class AddeventComponent implements OnInit {
  private date_deb = new FormControl('');
  private date_fin = new FormControl('');
  private prix = new FormControl('');
  private region = new FormControl('');
  private nom = new FormControl('');
 private nbre_de_place= new FormControl('');
 private description= new FormControl('');
  
  private addevent=new FormGroup({
    date_deb : this.date_deb ,
    date_fin: this.date_fin,
    prix: this.prix,
    region: this.region,
    nom : this.nom ,
    nbre_de_place:this.nbre_de_place,
    description:this.description
  });
  
  constructor(private formBuilder: FormBuilder ,private s:EventServiceService,private router:Router) { }

  ngOnInit() {
  }
  onSubmit(){
    let event={
      date_deb : this.date_deb.value,
    date_fin: this.date_fin.value,
    prix: this.prix.value,
    region: this.region.value,
    nom : this.nom.value,
    nbre_de_place:this.nbre_de_place.value,
    description:this.description.value
    };
    console.log(event) ;
   this.s.addevent(this.nom.value,this.region.value,this.description.value, this.prix.value,this.date_deb.value
   ,this.date_fin.value,this.nbre_de_place.value)
   .subscribe(data=>{
     console.log(data);
     this.router.navigate(["/events"]);
   });

  }

}
