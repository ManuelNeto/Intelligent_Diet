import { Component, OnInit } from '@angular/core';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';


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
              private router: Router) { }

  ngOnInit() {
      console.log(this.userService.getUser());
        this.myProteinOptions = [
            { id: 1, name: 'Queijo coalho'},
            { id: 2, name: 'Queijo minas'},
            { id: 3, name: 'Ovo mexido' },
            { id: 4, name: 'Creme de ricota'},
            { id: 5, name: 'Geleia diet'},
            { id: 6, name: 'Frango desfiado'},
            { id: 7, name: 'Peixe grelhado'},
            { id: 8, name: 'Carne magra'},
            { id: 9, name: 'Omelete'}
        ];

        this.myPastaOptions = [
            { id: 1, name: 'Tapioca'},
            { id: 2, name: 'Pão 12 grãos'},
            { id: 3, name: 'Rap 10 integral' },
            { id: 4, name: 'Torrada multigrãos'},
            { id: 5, name: 'Batata doce'},
            { id: 6, name: 'Jerimum'},
            { id: 7, name: 'Macaxeira'},
            { id: 8, name: 'Inhame'},
            { id: 9, name: 'Arroz branco'},
            { id: 10, name: 'Macarrão integral'},
        ];

        this.myFiberOptions = [
            { id: 1, name: 'Castanha de caju'},
            { id: 2, name: 'Cookies integrais'},
            { id: 3, name: 'Ameixa seca' },
            { id: 4, name: 'Castranha do pará'},
            { id: 5, name: 'Amendoas'},
            { id: 6, name: 'Barra de fibras com sementes nutis'},
            { id: 7, name: 'Peixe grelhado'},
            { id: 8, name: 'Carne magra'},
            { id: 9, name: 'Omelete'},
        ];

        this.myFruitOptions = [
            { id: 1, name: 'Maça'},
            { id: 2, name: 'Pêra'},
            { id: 3, name: 'Goiaba' },
            { id: 4, name: 'Banana'},
            { id: 5, name: 'Tangerina'},
            { id: 6, name: 'Ameixa'},
            { id: 7, name: 'Mamão'},
            { id: 8, name: 'Abacaxi'},
            { id: 9, name: 'Laranja'},
        ];
  }

  generateDiet() {
    this.router.navigate(['/diet']);
  }

  onChange(event) {
    console.log(event);
  }

}
