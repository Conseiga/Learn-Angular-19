import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  fullname:string|boolean |number = 45;
  constructor() { }

  ngOnInit(): void {
  }
  
  nameDisplay(name="TOUNKARA"){
    this.alerting(name);
  }

  alerting(name: string){
    alert(`I am ${name}, responding from alerting function ${this.fullname}`);
  }
}
