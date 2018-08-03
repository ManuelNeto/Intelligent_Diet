import { Component, OnInit } from '@angular/core';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import {UserService} from '../services/user.service';
import {Data, Router} from '@angular/router';
import {AlimentoService} from '../services/alimento.service';
import {Alimento} from '../models/Alimento';


@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {

  proteinOptions: number[];
  myProteinOptions: IMultiSelectOption[];

  pastaOptions: number[];
  myPastaOptions: IMultiSelectOption[];

  fiberOptions: number[];
  myFiberOptions: IMultiSelectOption[];

  vegetableOptions: number[];
  myVegetableOptions: IMultiSelectOption[];

  fruitOptions: number[];
  myFruitOptions: IMultiSelectOption[];

  constructor(private userService: UserService,
              private alimentoService: AlimentoService,
              private router: Router) { }

  ngOnInit() {
      console.log(this.userService.getUser());
      this.fetchAlimentos();
  }

  fetchAlimentos() {
    this.alimentoService.getAlimentosByType('proteina').subscribe(
      (data: Data) => {
        this.proteinOptions = data.data;
      }
    );
    this.alimentoService.getAlimentosByType('carboidrato').subscribe(
      (data: Data) => {
        this.pastaOptions = data.data;
        console.log(data);
      }
    );
    this.alimentoService.getAlimentosByType('fruta').subscribe(
      (data: Data) => {
        this.fruitOptions = data.data;
      }
    );
    this.alimentoService.getAlimentosByType('fibra').subscribe(
      (data: Data) => {
        this.fiberOptions = data.data;
      }
    );
    this.alimentoService.getAlimentosByType('legume').subscribe(
      (data: Data) => {
        this.vegetableOptions = data.data;
      }
    );
  }

  generateDiet() {
    this.router.navigate(['/diet']);
  }

  onChange(event) {
    console.log(event);
  }

}
