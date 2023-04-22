import { Component } from '@angular/core';

@Component({
  selector: 'app-evolver',
  templateUrl: './evolver.component.html',
  styleUrls: ['./evolver.component.css']
})
export class EvolverComponent {

  formatLabel(value: number) {
    return value + '%';
  }

}
