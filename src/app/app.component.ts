import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Password Generator';
  letters = 'abcdefghijklmnopqrstuvwxyz';
  numbers = '0123456789';
  symbols = '!@#$%^&*()';
  password='';
  searchString = '';
  useLetters:boolean = false;
  useNumbers:boolean = false;
  useSymbols:boolean = false;
  length:number = 12;

  changeUseLetters()
  {
  this.useLetters=!this.useLetters;
  this.updateSearchString();
  console.log("letters");
  }

  changeUseNumbers()
  {
  this.useNumbers=!this.useNumbers;
  this.updateSearchString();
  console.log("numbers");
  }

  changeUseSymbols()
  {
  this.useSymbols=!this.useSymbols;
  this.updateSearchString();
  console.log("symbols");
  }

  updateSearchString()
  {
  this.searchString='';
  if(this.useLetters)
    this.searchString+=this.letters;
  if(this.useNumbers)
    this.searchString+=this.numbers;
  if(this.useSymbols)
    this.searchString+=this.symbols;
  }

  generatePassword()
  {
  this.password='';
  for(let i=0;i<=this.length;i++)
  {
    let j = Math.floor(Math.random() * this.searchString.length);
    this.password += this.searchString[j];
  }
  }

}
