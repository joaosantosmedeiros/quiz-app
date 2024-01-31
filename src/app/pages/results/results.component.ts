import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css',
})
export class ResultsComponent implements OnInit {
  results: string[] = [];
  ngOnInit(): void {
    const results = this.getCookieValues('results');
    this.results = results ?? this.results;
    console.log(this.results);
  }

  getCookieValues(cookieName:string) {
    const cookies = document.cookie;

    const cookieStart = cookies.indexOf(`${cookieName}=`);
    if (cookieStart !== -1) {
      const cookieValueStart = cookieStart + cookieName.length + 1;

      let cookieValueEnd = cookies.indexOf(';', cookieValueStart);
      if (cookieValueEnd === -1) {
        cookieValueEnd = cookies.length;
      }

      const cookieValue = cookies.substring(cookieValueStart, cookieValueEnd);

      const valuesArray = cookieValue.split(',');
      for (let i = 0; i < valuesArray.length; i++) {
          let capitalizedValues = valuesArray[i][0].toUpperCase() + valuesArray[i].slice(1);
          if(capitalizedValues == 'Bem' || capitalizedValues == 'Mal'){
            capitalizedValues = `Bruxo do ${capitalizedValues}`;
          }
          valuesArray[i] = capitalizedValues;
      }

      return valuesArray;
    }

    return null;
  }
}
