import { Component, OnInit } from '@angular/core';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import {UserService} from '../services/user.service';
import {Data, Router} from '@angular/router';
import {AlimentoService} from '../services/alimento.service';
import {Alimento} from '../models/Alimento';
import {DietService} from '../services/diet.service';
import {Diet} from '../models/Diet';
import {HttpClient} from '@angular/common/http';
import {containsElement} from '@angular/animations/browser/src/render/shared';


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
              private dietService: DietService,
              private router: Router,
              private httpClient: HttpClient) { }

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

  getSelectedFood() {
    let allFood = this.myPastaOptions.concat(this.myProteinOptions, this.myFiberOptions, this.myFruitOptions, this.myVegetableOptions);
    let selectedFoodIds = this.pastaOptionsIds.concat(this.proteinOptionsIds, this.fiberOptionsIds, this.fruitOptionsIds, this.vegetableOptionsIds);
    let selectedFood = [];
    allFood.forEach((food) => {
      if(selectedFoodIds.some(id => id === food.id)) {
        selectedFood.push(food);
      }
    })
    return selectedFood;
  }

  generateDiet() {
    let diets;
    let info = this.userService.getUser();
    info.prefereces = this.getSelectedFood();

    this.httpClient.post('http://127.0.0.1:5002/generateDiet', info).subscribe(data => {
      diets = JSON.parse(data.toString());
      this.dietService.setDiets(diets);
      this.router.navigate(['/diet']);
    });

  }
}
