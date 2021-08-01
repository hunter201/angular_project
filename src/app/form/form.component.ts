import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  
})
export class FormComponent implements OnInit {
  title = 'Registration';
  logo: string = './assets/images/starbucks-logo.png';
  colorText = 'blue';
  textColor = true;
  
  changeTitle () {
    this.title='Welcome';
  }

  
  ngOnInit(): void {
  }

}
