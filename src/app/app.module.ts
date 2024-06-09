import { NgModule, DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';
import { HeaderComponent } from './components/header/header.component';

//imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';


//apointmens
import { NgFor } from '@angular/common';
import { DetailsComponent } from './components/details/details.component';
import { FooterComponent } from './components/footer/footer.component';


registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuemSomosComponent,
    HeaderComponent,
    DetailsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    NgFor,
    MatSidenavModule,

  ],
  providers: [
    {provide: LOCALE_ID, useValue: "pt"},
    {provide: DEFAULT_CURRENCY_CODE, useValue: "BRL"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
