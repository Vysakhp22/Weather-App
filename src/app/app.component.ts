import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WeatherServiceService } from './services/weather-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public cities: string[] = ["London", "Paris", "Moscow", "New York", "Karachi", "Sydney"];
  public cityControl: FormControl = new FormControl('');
  public city: string | undefined

  constructor(private wService: WeatherServiceService) { }

  ngOnInit(): void {
    this.cityControl.valueChanges.subscribe((val) =>{
      this.city = val;
      
    })
    this.wService.getWeather('London').subscribe((res) => {
      console.log(res);

    })
  }

}
