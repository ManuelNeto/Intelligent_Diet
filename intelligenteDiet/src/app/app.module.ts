import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { DietComponent } from './diet/diet.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-router.module';
import {HeaderComponent} from './header/header.component';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';

import {
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
} from '@angular/material';
import {AlimentoService} from './services/alimento.service';
import {DietService} from './services/diet.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MultiselectDropdownModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    RegisterComponent,
    PreferencesComponent,
    DietComponent,
    HeaderComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [UserService, AlimentoService, DietService]
})
export class AppModule { }
