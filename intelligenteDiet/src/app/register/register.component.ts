import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  profile;

  constructor() {
    this.profile = {};
  }

  public setGender = function(gender){
    this.profile.gender = gender;
  }

  public setGoal = function(goal){
    this.profile.goal = goal;
  }

  public nextStep = function() {
    console.log(this.profile);
  }

  ngOnInit() {
  }



}
