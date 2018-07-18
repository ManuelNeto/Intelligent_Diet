import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() menuPress = new EventEmitter();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }


  onMenuPress() {
    this.menuPress.emit();
  }
}
