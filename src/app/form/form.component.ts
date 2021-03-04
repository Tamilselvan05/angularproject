import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formObj = {
    name: "",
    email: "",
    Address: "",
    password: "",
  }
  formlist = []

  constructor() { }

  ngOnInit() {
  }
  submit() {
    console.log(this.formObj)
    this.formlist.push(this.formObj)
    console.log(this.formlist)
  }

  send() {
    if (!this.formObj.email) {
      alert("Enter email");
      return;
    }

    if (!this.formObj.password) {
      alert("Enter password");
      return;
    }

    if (this.formObj.password.length < 4) {
      alert("Password should be more than 4 characters");
      return;
    }
    alert("form is successful");
    console.log(this.formObj);
  }

}
