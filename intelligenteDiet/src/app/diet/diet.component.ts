import { Component, OnInit } from '@angular/core';
import {DietService} from '../services/diet.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.css']
})
export class DietComponent implements OnInit {

  cafeDaManha;
  almoco;
  lanche;
  jantar;
  proteinaTotal = 0;
  carboidratoTotal = 0;
  gorduraTotal = 0;
  proteinaEsperada;
  carboidratoEsperado;
  gorduraEsperada;

  constructor(private dietService: DietService,
              private userService: UserService) {}

  ngOnInit() {
    this.fetchDiet();
    this.fetchInfo();
  }

  fetchInfo() {
    const user = this.userService.getUser();
    this.proteinaEsperada = user.protein;
    this.carboidratoEsperado = user.carbo;
    this.gorduraEsperada = user.fat;

    this.almoco.forEach((food) => {
      this.proteinaTotal += food.proteina;
      this.carboidratoTotal += food.carboidrato;
      this.gorduraTotal += food.gordura;;
    })

    this.lanche.forEach((food) => {
      this.proteinaTotal += food.proteina;
      this.carboidratoTotal += food.carboidrato;
      this.gorduraTotal += food.gordura;;
    })

    this.jantar.forEach((food) => {
      this.proteinaTotal += food.proteina;
      this.carboidratoTotal += food.carboidrato;
      this.gorduraTotal += food.gordura;;
    })

    this.cafeDaManha.forEach((food) => {
      this.proteinaTotal += food.proteina;
      this.carboidratoTotal += food.carboidrato;
      this.gorduraTotal += food.gordura;;
    })
    this.proteinaTotal = Math.round(this.proteinaTotal * 100) / 100;
    this.carboidratoTotal = Math.round(this.carboidratoTotal * 100) / 100;
    this.gorduraTotal = Math.round(this.gorduraTotal * 100) / 100;
    this.proteinaEsperada = Math.round(this.proteinaEsperada * 100) / 100;
    this.carboidratoEsperado = Math.round(this.carboidratoEsperado * 100) / 100;
    this.gorduraEsperada = Math.round(this.gorduraEsperada * 100) / 100;
  }

  fetchDiet() {
    let diet = this.dietService.getDiet();
    this.cafeDaManha = diet.breakfast;
    this.almoco = diet.lunch;
    this.jantar = diet.dinner;
    this.lanche = diet.snack;
  }
};
