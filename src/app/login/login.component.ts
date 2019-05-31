import { Component, OnInit } from '@angular/core';
import { NgModel, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = {
    search: '',
  }

  constructor() { }

  ngOnInit() {
  }

  doSearch(searchValue) {

    console.log(searchValue);
  }

}
