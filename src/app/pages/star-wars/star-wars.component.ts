import { Component, OnInit } from '@angular/core';
import { universes } from '../../../assets/data/questions.json';
import { CommonModule } from '@angular/common';

type Question = {
  id: number;
  img: string;
  title: string;
  options: {
    letter: string;
    option: string;
    alias: string;
  }[];
};

@Component({
  selector: 'app-star-wars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-wars.component.html',
  styleUrl: './star-wars.component.css',
})
export class StarWarsComponent {
  questions: Question[] = universes.starWars.questions;
  index: number = 0;
  selectedQuestion: Question = this.questions[this.index];
  answers: string[] = [];
  isFinished: boolean = false;
  result: string = '';

  selectAnswer(alias: string) {
    this.index++;
    this.answers.push(alias);
    if (this.index < 9) {
      this.selectedQuestion = this.questions[this.index];
    } else {
      this.isFinished = true;
      this.result = this.findResult(this.answers);
    }
  }

  findResult(answers: string[]): string {
    const a = answers.filter((answ) => answ == 'A').length;
    let response = 'sith';
    if (a > 4) {
      response = 'jedi';
    }

    this.addCookie(response);

    return response;
  }

  addCookie(response: string) {
    if (!document.cookie.includes('results=')) {
      document.cookie = `results=${response}`;
    } else {
      let results = document.cookie.split('results=')[1];
      results += `,${response}`;
      document.cookie = `results=${results}`;
    }
  }
}
