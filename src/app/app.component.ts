//Angular Imports
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//Components
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PasswordGeneratorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'password-generator';
}
