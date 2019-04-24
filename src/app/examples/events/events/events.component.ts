import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs';
import { EventServiceService} from  '../../../services/eventservice/event-service.service';
import { Router } from '@angular/router';
import {events} from '../../models/events';
import { ArrayObservable } from 'rxjs/observable/ArrayObservable';
import { ArrayType } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  admin :boolean=true ;
  clicked:boolean=false ;
  expandEnabled: boolean = true;
  entries:any;
  entry:any;
  
  constructor(private s:EventServiceService,private router:Router ) {
  }

  
  ngOnInit() {
    this.s.getevents()
  
    .subscribe(data=>{
     console.log(JSON.stringify(data))
      this.entries=data
      
    });
  }

  addEntry() {
    
  }
 removeEntry(i) {
  this.entries = this.entries.filter(u => u!==this.entries[i]);

   this.s.delete(this.entries[i].id).subscribe( data =>{
     console.log(data)
   }
      
   )
   
    
    //alert("an evnt was deleted")
  }


  
  onclick(i){
 this.clicked=true;
 console.log(this.clicked);
 this.entry=this.entries[i];
  }

  onDotClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  

 
}

