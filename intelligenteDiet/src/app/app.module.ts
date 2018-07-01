import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }         from './app.component';

import { RegisterComponent } from './register/register.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { DietComponent } from './diet/diet.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

import { AppRoutingModule }     from './app-router.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MultiselectDropdownModule
  ],
  declarations: [
    AppComponent,
    RegisterComponent,
    PreferencesComponent,
    DietComponent,
    HomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
