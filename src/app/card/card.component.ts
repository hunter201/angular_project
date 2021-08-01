import { Component, Input } from "@angular/core";
import { Auto } from "../auto/auto";
import { CarService } from "../service/car.service";

enum members {
    greeting = 'hello',
    farewell = 'goodbye'
}

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent {

    @Input() item: any;

    //title = this.item.name;

    date = new Date;
    isMarked: boolean = false;

    cars: Auto[] = [];
    searchStr: string = 'название';
    age: number = 0;
    distance: number = 0;


    constructor(private carService: CarService) {

    }

    ngOnInit() {
        this.cars = this.carService.getCars();
    }

    addClass(): void {
        this.isMarked = !this.isMarked;
        // this.cars.push(new Auto(this.name, this.age, this.distance));
        // this.clearFormCar();
    }

    

}
