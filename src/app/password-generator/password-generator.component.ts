//Angular Imports
import { Component } from '@angular/core';
//Third-party
import { PasswordStrengthMeterComponent } from 'angular-password-strength-meter';
import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-password-generator',
  standalone: true,
  imports: [NgxSliderModule, PasswordStrengthMeterComponent],
  templateUrl: './password-generator.component.html',
  styleUrl: './password-generator.component.scss'
})
export class PasswordGeneratorComponent {
  value: number = 10;
  options: Options = {
    floor: 0,
    ceil: 20
  };

  password: string = '';
}
