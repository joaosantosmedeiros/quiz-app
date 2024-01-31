import { Component } from '@angular/core';
import {universes} from '../../../assets/data/questions.json'
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
  selector: 'app-harry-potter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './harry-potter.component.html',
  styleUrl: './harry-potter.component.css',
})
export class HarryPotterComponent {
  questions: Question[] = universes.harryPotter.questions;
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
    let response = 'mal';
    if (a > 4) {
      response = 'bem';
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
