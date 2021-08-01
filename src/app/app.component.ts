import { Component, Inject } from '@angular/core';
import { CarService } from './service/car.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CarService]
})
export class AppComponent {

  count: any[] = [];
  searchStr = '';
  cards = [
    {title:'1',content: "hello"},
    {title:'2',content: "is fine"},
    {title:'3',content: "Angular"},
  ]
  constructor( private carService: CarService) {

  }

  ngOnInit() {
    this.count = this.carService.count;
    // this.carService.getData().subscribe(count=>{console.log(count)});
  }

}
