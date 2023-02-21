import { Component, OnInit,  } from '@angular/core';
import { WeatherData } from './weather.module';
import { WeatherService } from './weather.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// export class AppComponent{
// title='app';
// constructor(private weatherservice :WeatherService){
// this.weatherservice.getWeatherData().this.subscribe(data => {
// console.warn(data)

// })



// }


export  class AppComponent implements OnInit {
title = 'app';
  constructor(private weatherservice :WeatherService) {
}

weatherData?: WeatherData;

ngOnInit(): void {
 this.weatherservice.getWeatherData('bhopal')
.subscribe({
  next: (response) =>{
this.weatherData = response;

    console.log(response);
  }
});

}
}
//   title= 'app'; 
//   constructor(private user:weatherservices)
// {
//   this.http.getdata().subscribe(data=>)
// console.warn(data)
// }
	
//   getUserValue(value)
// {
//   console.warn(value)
// }

// x1='new'
// x2='vision'
//   data=[
// {
//    name:'harry',
//    age:24
// },

// {
//   name:'ram',
//   age:26
// },
// {
//   name:'shyam',
//   age:29
// },

//   ]


//   color='red'
  


//   disabledbox=true
//   enablebox()
//   {
//     this.disabledbox=false
//   }
// getval(val)

// {

//   console.warn(val)
// }
// getname()

// {
//   alert( "new vision")
// }
// myevent(evt)
// {
//   console.warn(evt)
// }


