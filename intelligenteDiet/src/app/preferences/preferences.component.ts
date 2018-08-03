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

  proteinOptionsIds: string[];
  myProteinOptions: IMultiSelectOption[];

  pastaOptionsIds: string[];
  myPastaOptions: IMultiSelectOption[];

  fiberOptionsIds: string[];
  myFiberOptions: IMultiSelectOption[];

  vegetableOptionsIds: string[];
  myVegetableOptions: IMultiSelectOption[];

  fruitOptionsIds: string[];
  myFruitOptions: IMultiSelectOption[];

  constructor(private userService: UserService,
              private alimentoService: AlimentoService,
              private router: Router) { }

  ngOnInit() {
    this.fetchAlimentos();
  }

  fetchAlimentos() {
    this.alimentoService.getAlimentosByType('proteina').subscribe(
      (data: Data) => {
        this.myProteinOptions = data.data;
        this.myProteinOptions = this.mapIds(this.myProteinOptions);
      }
    );
    this.alimentoService.getAlimentosByType('carboidrato').subscribe(
      (data: Data) => {
        this.myPastaOptions = data.data;
        this.myPastaOptions = this.mapIds(this.myPastaOptions);
      }
    );
    this.alimentoService.getAlimentosByType('fruta').subscribe(
      (data: Data) => {
        this.myFruitOptions = data.data;
        this.myFruitOptions = this.mapIds(this.myFruitOptions);
      }
    );
    this.alimentoService.getAlimentosByType('fibra').subscribe(
      (data: Data) => {
        this.myFiberOptions = data.data;
        this.myFiberOptions = this.mapIds(this.myFiberOptions);
      }
    );
    this.alimentoService.getAlimentosByType('legume').subscribe(
      (data: Data) => {
        this.myVegetableOptions = data.data;
        this.myVegetableOptions = this.mapIds(this.myVegetableOptions);
      }
    );
  }

  mapIds(options) {
    for(let i = 0; i<options.length; i++) {
      options[i].id = options[i]._id;
    }
    return options;
  }

  generateDiet() {
    this.router.navigate(['/diet']);
  }

  onChange(event) {
    console.log(event);
    console.log(this.myPastaOptions);
  }

}
