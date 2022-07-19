import { Component, OnInit } from '@angular/core';
import { MarvelAPIService } from '../Service/marvel-api.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private service:MarvelAPIService) { }

  series:any=[];

  ngOnInit(): void {

    this.service.GetAllSeries().subscribe((result)=>{
      console.log(result);
      this.series = result.data.results;
    })
  }

}
