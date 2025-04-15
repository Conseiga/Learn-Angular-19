import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { IncrementationComponent } from './incrementation/incrementation.component';
import { InputValueComponent } from './input-value/input-value.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent,IncrementationComponent,InputValueComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Learn-Angular-19 from beginning to the end';
  name = "Tounkara Abel"
}
