import { Component } from '@angular/core';

@Component({
  selector: 'app-input-value',
  imports: [],
  templateUrl: './input-value.component.html',
  styleUrls: ['./input-value.component.css','./style2.css']
})
export class InputValueComponent {
  username?:string;
  usernameInputValue?:string;
  
  getUserName(text_event:Event){
    this.username = (text_event.target as HTMLInputElement).value;
  }

  displayUserName(usernameInput:string){
    this.usernameInputValue = usernameInput;
  }
}
