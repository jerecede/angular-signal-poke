import { CommonModule } from '@angular/common';
import { Component, input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-lyfecicle',
  imports: [CommonModule],
  templateUrl: './lyfecicle.component.html',
  styleUrl: './lyfecicle.component.scss'
})
export class LyfecicleComponent {

  textColor = input('black', {alias: 'text-color'});
  backgroundColor = input('white', {alias: 'bg-color'});

  constructor(){
    console.log('constructor');
  }

  ngOnInit(){
    console.log('on init');
  }

  ngAfterViewInit(){
    console.log('after view init');
    
  }

  ngOnDestroy(){
    //per salavare dati all'ultimo
    //per salvare sessione
    console.log('destroy')
  }
}
