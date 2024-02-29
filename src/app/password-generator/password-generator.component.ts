//Angular Imports
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
//Third-party
import { PasswordStrengthMeterComponent } from 'angular-password-strength-meter';
import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-password-generator',
  standalone: true,
  imports: [NgxSliderModule, PasswordStrengthMeterComponent, FormsModule],
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
  includeUppercaseLetters: boolean = true;
  includeLowercaseLetters: boolean = true;
  includeNumbersLetters: boolean = true;
  includeSymbolsLetters: boolean = true;

  generatePassword() {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let availableCharacters = '';

    if (this.includeUppercaseLetters) availableCharacters += uppercaseChars;
    if (this.includeLowercaseLetters) availableCharacters += lowercaseChars;
    if (this.includeNumbersLetters) availableCharacters += numberChars;
    if (this.includeSymbolsLetters) availableCharacters += symbolChars;

    let generatePassword = '';

    for (let i = 0; i < this.value; i++) {
      const maxValue = availableCharacters.length;
      const randomIndex = Math.floor(Math.random() * maxValue);
      generatePassword += availableCharacters.charAt(randomIndex);
    }

    this.password = generatePassword;

  }
}
