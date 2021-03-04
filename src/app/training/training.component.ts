import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-training',
	templateUrl: './training.component.html',
	styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {


	actors = [{ name: "vijay" }, { name: "ajith" }, { name: "surya" }];
	cricketers = [{ name: "sachin" }, { name: "dhoni" }, { name: "ajith" }, { name: "ashwin" }];

	user = {
		email: "",
		password: ""
	}

	userName = "Tamilselvan is a good boy";
	// showValue = true;

	constructor() {
		// this.capitilizeEven(this.userName);
		// this.charCount(this.userName);
		this.removeDuplicates(this.actors, this.cricketers);
	}

	ngOnInit() {
	}

	capitilizeEven(str) {
		let strArr = this.userName.split(" ");
		let output = "";
		console.log(strArr);
		for (let i = 0; i < strArr.length; i++) {
			if (i % 2 == 0) {
				output = output + " " + strArr[i];
			} else {
				output = output + " " + strArr[i].toUpperCase();
			}
		}
		return output;
	}

	submit() {
		// this.showValue = !this.showValue;
		this.userName = this.capitilizeEven(this.userName)
		// this.capitilizeEven(this.userName);
		// if (!this.user.email) {
		// 	alert("Enter Email");
		// 	return;
		// }

		// if (!this.user.password) {
		// 	alert("Enter Password");
		// 	return;
		// }

		// if (this.user.password.length < 4) {
		// 	alert("Password should be more than 4 characters");
		// 	return;
		// }
	}


	charCount(str) {
		console.log(str)
		let output = {};
		let strArr = str.split("");
		console.log(strArr);

		for (let i = 0; i < strArr.length; i++) {
			if (output[strArr[i]]) {
				output[strArr[i]] = output[strArr[i]] + 1;
			} else {
				output[strArr[i]] = 1;
			}
		}
		console.log(output)
	}


	removeDuplicates(arr1, arr2) {
		let index: number;
		// for (let i = 0; i < arr2.length; i++) {

		// index = arr1.indexOf(arr2[i])
		// if (index > -1) {
		// arr1.splice(index, 1);
		// }
		// }
		for (let i = arr1.length - 1; i >= 0; i--) {
			for (let j = 0; j < arr2.length; j++) {
				if (arr1[i]['name'] == arr2[j]['name']) {
					arr1.splice(i, 1);
				}
			}
		}
		console.log(arr1);
		// return arr1;
	}
	
}
