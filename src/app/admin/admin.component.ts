import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  // public sports = ["basketball", "cricket", "chess", "football"]

  // particular array of object matum vnumna intha method use panikalam 
  // var result = this.student.filter(obj => obj.age === '25')[0];
  // console.log(result);

  public student = [
    { name: "tamil", age: 18, result: "pass", },
    { name: "berlin", age: 23, result: "pass", },
    { name: "virat", age: 23, result: "pass", },
    { name: "john", age: 25, result: "fail", },
    { name: "denver", age: 42, result: "fail", },
    { name: "tokyo", age: 30, result: "fail", },
    { name: "tokyo", age: 30, result: "fail", },
    { name: "sachin", age: 45, result: "pass", },

  ];
  // particular onu  matum yeaduka ithu
  //   for(let i = 0; i <this.student.length; i++) {
  // console.log(this.student)
  //   if (this.student[i].age == 25) {
  //     console.log(this.student[i].age)
  //   }
  // }


  actors = [{ name: "vijay" }, { name: "ajith" }, { name: "surya" }];
  cricketers = [{ name: "sachin" }, { name: "dhoni" }, { name: "ajith" }, { name: "ashwin" }];

  public color = "blue red and my favourite color";

  constructor() {
    this.sending(" tamil");



  }
  public number = ["tamil", "hari", "fazil", "balan", "venki", "abinesh", "ajith", "nafil", "kathir"];
  ngOnInit() {
  }

  form() {
    // console.log(this.student)
    // console.log(this.student.reverse());
    for (let i = 0; i < this.student.length; i++) {
      // console.log([this.student[i]]);
      if (this.student[i].result == "pass") {
        console.log(this.student[i].result)
      }
    }
  }








  submit() {
    var star = this.color.split(" ");
    console.log(star);
    for (let i = 0; i < star.length; i++) {
      if ((i % 2) == 0) {
        console.log("even position")
        console.log(star[i].toUpperCase());

      } else {
        console.log("add position")
        console.log(star[i]);
      }
    }
  }




  send() {
    // console.log(this.sports)
    console.log(this.number)
    for (let i = 0; i < this.number.length; i++) {
      // console.log(this.number[i]);
      if (i < 6) {
        console.log(i, this.number[i]);
      }
    }
  }

  sending(name) {
    console.log("good morning" + name)
  }


  remove() {

  }


}

