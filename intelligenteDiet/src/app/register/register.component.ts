import { Component, OnInit } from '@angular/core';
import { UserService} from '../services/user.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
  export class RegisterComponent implements OnInit {

  profile;

  constructor(private userService: UserService, private router: Router) {
    this.profile = {};
  }

  public nextStep = function() {
    this.userService.createUser(this.profile).subscribe(res => {
      this.userService.setUser(res.data);
      this.router.navigate(['/preferences']);
    });

    console.log(this.profile);
  };

  ngOnInit() {
  }



}
