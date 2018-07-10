import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.css']
})
export class DietComponent implements OnInit {

  cafeDaManha;
  almoco;
  sobremesa;
  lanche;
  jantar;

  constructor() {
    this.cafeDaManha = [
        { id: 1, name: 'Tapioca', tipo: 'Massas', quantidade: '100g', calorias: '120kcal'},
        { id: 2, name: 'Pão 12 grãos', tipo: 'Massas', quantidade: '100g', calorias: '120kcal'},
        { id: 3, name: 'Rap 10 integral', tipo: 'Massas', quantidade: '100g', calorias: '120kcal' },
        { id: 5, name: 'Batata doce', tipo: 'Massas', quantidade: '100g', calorias: '120kcal'},
        { id: 6, name: 'Jerimum' , tipo: 'Massas', quantidade: '100g', calorias: '120kcal'},
        { id: 7, name: 'Macaxeira', tipo: 'Massas', quantidade: '100g', calorias: '120kcal'},
        { id: 9, name: 'Arroz branco', tipo: 'Massas', quantidade: '100g', calorias: '120kcal'},
        { id: 10, name: 'Macarrão integral', tipo: 'Massas', quantidade: '100g', calorias: '120kcal'},
        { id: 1, name: 'Queijo coalho', tipo: 'Proteinas', quantidade: '100g', calorias: '120kcal'},
        { id: 2, name: 'Queijo minas', tipo: 'Proteinas', quantidade: '100g', calorias: '120kcal'},
        { id: 8, name: 'Carne magra', tipo: 'Proteinas', quantidade: '100g', calorias: '120kcal'},
        { id: 9, name: 'Omelete', tipo: 'Proteinas', quantidade: '100g', calorias: '120kcal'}
      ];

    this.almoco = [
        { id: 1, name: 'Tapioca', tipo: 'Massas', quantidade: '100g', calorias: '120kcal'},
        { id: 2, name: 'Pão 12 grãos', tipo: 'Massas', quantidade: '100g', calorias: '120kcal'},
        { id: 3, name: 'Rap 10 integral', tipo: 'Massas', quantidade: '100g', calorias: '120kcal' },
        { id: 5, name: 'Batata doce', tipo: 'Massas', quantidade: '100g', calorias: '120kcal'},
        { id: 6, name: 'Jerimum' , tipo: 'Massas', quantidade: '100g', calorias: '120kcal'},
        { id: 7, name: 'Macaxeira', tipo: 'Massas', quantidade: '100g', calorias: '120kcal'},
        { id: 9, name: 'Arroz branco', tipo: 'Massas', quantidade: '100g', calorias: '120kcal'},
        { id: 10, name: 'Macarrão integral', tipo: 'Massas', quantidade: '100g', calorias: '120kcal'},
        { id: 1, name: 'Queijo coalho', tipo: 'Proteinas', quantidade: '100g', calorias: '120kcal'},
        { id: 2, name: 'Queijo minas', tipo: 'Proteinas', quantidade: '100g', calorias: '120kcal'},
        { id: 8, name: 'Carne magra', tipo: 'Proteinas', quantidade: '100g', calorias: '120kcal'},
        { id: 9, name: 'Omelete', tipo: 'Proteinas', quantidade: '100g', calorias: '120kcal'}
      ];

    this.sobremesa = [
      { id: 1, name: 'Maça', tipo: 'Fruta', quantidade: '100g', calorias: '120kcal'},
      { id: 2, name: 'Pêra', tipo: 'Fruta', quantidade: '100g', calorias: '120kcal'},
      { id: 3, name: 'Goiaba', tipo: 'Fruta', quantidade: '100g', calorias: '120kcal' },
      { id: 4, name: 'Banana', tipo: 'Fruta', quantidade: '100g', calorias: '120kcal'},
      { id: 5, name: 'Tangerina', tipo: 'Fruta', quantidade: '100g', calorias: '120kcal'},
    ];

    this.lanche = [
      { id: 1, name: 'Castanha de caju', tipo: 'Fibras', quantidade: '100g', calorias: '120kcal'},
      { id: 2, name: 'Cookies integrais', tipo: 'Fibras', quantidade: '100g', calorias: '120kcal'},
      { id: 3, name: 'Ameixa seca', tipo: 'Fibras', quantidade: '100g', calorias: '120kcal' },
      { id: 4, name: 'Castranha do pará', tipo: 'Fibras', quantidade: '100g', calorias: '120kcal'},
      { id: 5, name: 'Amendoas', tipo: 'Fibras', quantidade: '100g', calorias: '120kcal'},
    ];

    this.jantar = [
        { id: 1, name: 'Tapioca', tipo: 'Massas', quantidade: '100g', calorias: '120kcal'},
        { id: 2, name: 'Pão 12 grãos', tipo: 'Massas', quantidade: '100g', calorias: '120kcal'},
        { id: 3, name: 'Rap 10 integral', tipo: 'Massas', quantidade: '100g', calorias: '120kcal' },
        { id: 5, name: 'Batata doce', tipo: 'Massas', quantidade: '100g', calorias: '120kcal'},
        { id: 6, name: 'Jerimum' , tipo: 'Massas', quantidade: '100g', calorias: '120kcal'},
        { id: 7, name: 'Macaxeira', tipo: 'Massas', quantidade: '100g', calorias: '120kcal'},
        { id: 9, name: 'Arroz branco', tipo: 'Massas', quantidade: '100g', calorias: '120kcal'},
        { id: 10, name: 'Macarrão integral', tipo: 'Massas', quantidade: '100g', calorias: '120kcal'},
        { id: 1, name: 'Queijo coalho', tipo: 'Proteinas', quantidade: '100g', calorias: '120kcal'},
        { id: 2, name: 'Queijo minas', tipo: 'Proteinas', quantidade: '100g', calorias: '120kcal'},
        { id: 8, name: 'Carne magra', tipo: 'Proteinas', quantidade: '100g', calorias: '120kcal'},
        { id: 9, name: 'Omelete', tipo: 'Proteinas', quantidade: '100g', calorias: '120kcal'}
    ];
  }

  ngOnInit() {
    console.log(this.cafeDaManha);
  }





};
