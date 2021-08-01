import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  search: string = 'classes';
  form: FormGroup;
  selectedOption: string;
  navList: string[] = [
    "Downloads",
    "Documentation",
    "Get Involved",
    "Help",
    "PHP8"
  ];

  isMouseUp: boolean = false;

  toggle($event) {
    this.isMouseUp = !this.isMouseUp;
  }

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      pass: new FormControl(null, [Validators.required, Validators.minLength(6)])

    })
  };

  onSubmit() {

  };

  showSearchRequest() {

  }

};
