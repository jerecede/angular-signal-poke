import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  imports: [CommonModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.scss'
})
export class DirectiveComponent {

  isImage = true;

  currentClasses = {
    triste: true,
    felice: false,
    monospace: true,
  };

  elements = [
    "pippo",
    "pluto",
    "paperino"
  ]

  sonoFelice = true;

  currentStyles = {
    'font-size' : this.sonoFelice ? '50px' : '20px',
    'color' : this.sonoFelice ? 'magenta' : 'crimson'
  }

  changeMood(){
    this.sonoFelice = !this.sonoFelice;
    this.currentStyles = {
      'font-size' : this.sonoFelice ? '50px' : '20px',
      'color' : this.sonoFelice ? 'darkgreen' : 'magenta'
    }
    this.currentClasses.triste = !this.currentClasses.triste;
    this.currentClasses.felice = !this.currentClasses.felice;
  }

  hideImage(){
    this.isImage = !this.isImage;
  }

  imTrue = true;

  changeIfElse(){
    this.imTrue = !this.imTrue
  }

  tripleChoice = 0;
}