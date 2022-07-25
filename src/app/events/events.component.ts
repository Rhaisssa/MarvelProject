import { Component, OnInit } from '@angular/core';
import { MarvelAPIService } from '../Service/marvel-api.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private service:MarvelAPIService) { }

  events:any=[];

  ngOnInit(): void {

    this.service.GetAllEvents().subscribe((result)=>{
      console.log(result);
      this.events = result.data.results;
    });
  }

}
