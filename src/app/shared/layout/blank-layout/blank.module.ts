import { HomeComponent } from './home/home.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { MoviesComponent } from './movies/movies.component';
import { MostPopularComponent } from './most-popular/most-popular.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MostPopularComponent, MoviesComponent, TopRatedComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class Blank { }


 