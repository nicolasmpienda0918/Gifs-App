import { Component, Input,  } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-lits',
  templateUrl: './card-lits.component.html',
  styleUrl: './card-lits.component.css'
})
export class CardLitsComponent {

  @Input()
  public gifs: Gif[] = [];

}
