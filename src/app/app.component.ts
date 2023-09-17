import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WeatherServiceService } from './services/weather-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public cities: string[] = ["Kottayam", "Idukki", "Alappuzha", "Ernakulam", "Thiruvananthapuram"];
  public cityControl: FormControl = new FormControl('');
  public climate: any;

  constructor(private wService: WeatherServiceService) { }

  ngOnInit(): void {
    this.cityControl.valueChanges.subscribe((val) => {
      this.wService.getWeather(val).subscribe((res) => {
        this.climate = res;
      });
    });
  }
}
