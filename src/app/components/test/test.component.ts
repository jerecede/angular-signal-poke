import { Component, computed, input, Input } from '@angular/core';

@Component({
  selector: 'app-test', //button[button-type]
  imports: [],
  // template: `
  //   <h2 class='pippo'>scuca</h2>
  // `,
  // styles: `
  //   .pippo{
  //     color: red;
  //   }
  // `
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

  _input2 = 'Viva angular!!';

  @Input() input1: string = '';

  @Input() set input2(value: string){
    const upperValue = value.toUpperCase();
    this._input2 = upperValue;
    //posso mettere anche if
  }

  input3 = input('', {transform: (value: string) => value.replaceAll('i','@')});
  upperInput3 = computed(() => this.input3().toUpperCase());

  nomeSensato = input('', {alias: 'nome-sensato'}); //input 4, variabile input puo avere un nome con un trattino (nome-sensato)

  @Input({transform: (value: string) => value + 'la pagherete cara'}) input5 = '';
}
