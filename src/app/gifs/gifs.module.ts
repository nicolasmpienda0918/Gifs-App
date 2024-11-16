import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';


import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardLitsComponent } from './components/card-lits/card-lits.component';





@NgModule({
  declarations: [
 HomePageComponent,
 SearchBoxComponent,
 CardLitsComponent,





  ],
  imports: [
    CommonModule,
    SharedModule


  ],
  exports: [
    HomePageComponent,
  ]
})
export class GifsModule { }
