import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';
import { Component } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  standalone: true,
  imports: [NgxSliderModule],
  templateUrl: './password-generator.component.html',
  styleUrl: './password-generator.component.scss'
})
export class PasswordGeneratorComponent {
  value: number = 100;
  options: Options = {
    floor: 0,
    ceil: 200
  };

}
