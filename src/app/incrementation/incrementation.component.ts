import { Component } from '@angular/core';

@Component({
  selector: 'app-incrementation',
  imports: [],
  templateUrl: './incrementation.component.html',
  styleUrl: './incrementation.component.css'
})
export class IncrementationComponent {
  counter:number = 0;

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }

  reset(){
    this.counter = 0;
  }

  changeValue(opt: number) {
    switch (opt) {
      case 1:
        this.counter++; // Increments if opt is -1
        break; // Stops execution here for case -1
      case 0:
        this.counter = 0; // Resets if opt is 0
        break; // Stops execution here for case 0
      default:
        this.counter--; // Decrements for any other value of opt
        break; // Good practice to include break in default too
    }
  }
}
