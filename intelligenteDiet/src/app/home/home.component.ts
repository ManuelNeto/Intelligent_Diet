import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showProfile: boolean = true;
  showPreferences: boolean = false;
  showDiet: boolean = false;

  constructor() {

  }

  public setViewToShow = function(view){
    if(view == 'profile'){
      console.log('profile');
      this.showProfile = true;
      this.showPreferences = false;
      this.showDiet = false;
    }else if(view == 'preferences'){
      console.log('preferences');
      this.showProfile = false;
      this.showPreferences = true;
      this.showDiet = false;
    }else if(view == 'diet'){
      console.log('diet');
      this.showProfile = false;
      this.showPreferences = false;
      this.showDiet = true;
    }
  }

  ngOnInit() {

  }

}
