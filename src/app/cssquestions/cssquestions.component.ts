import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { CssquesService } from '../service/cssques.service';

@Component({
  selector: 'app-cssquestions',
  templateUrl: './cssquestions.component.html',
  styleUrls: ['./cssquestions.component.scss']
})
export class CssquestionsComponent {

  public name: string = "";
  public questionList: any = [];
  public currentQuestion: number = 0;
  public points: number = 0
  counter = 60
  correctAnswer: number = 0;
  incorectAnswer: number = 0;
  interval$: any
  progress: string = "0"
  isQuizCompleted:boolean=false;
  constructor(private questionService: CssquesService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
    this.startcounter();
  }
  getAllQuestions() {
    this.questionService.getQuestionJson()
      .subscribe(res => {
        this.questionList = res.questions
      })
  }
  newQuestion() {
    this.currentQuestion++;
  }
  previousQuestion() {
    this.currentQuestion--;
  }
  answer(curretQno: number, option: any) {
    if(curretQno===this.questionList.length){
      this.isQuizCompleted=true
      this.stopcounter();
    }
    if (option.correct) {
      this.points += 10;
      this.correctAnswer++
      setTimeout(() => {
        this.currentQuestion++
        this.resetcounter()
        this.getProgresPercent()
      }, 1000);
    }
    else {
      setTimeout(() => {
        this.currentQuestion++;
        this.incorectAnswer++;
        this.resetcounter();
        this.getProgresPercent()
      }, 1000);

      this.points -= 10;
    }
  }
  startcounter() {
    this.interval$ = interval(1000)
      .subscribe(val => {
        this.counter--;
        if (this.counter === 0) {
          this.currentQuestion++;
          this.counter = 60;
          this.points -= 10
        }
      });
    setTimeout(() => {
      this.interval$.unsubscribe()
    }, 600000);
  }
  stopcounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }
  resetcounter() {
    this.stopcounter();
    this.counter = 60;
    this.startcounter();
  }

  resetQuiz() {
    this.resetcounter();
    this.getAllQuestions();
    this.points = 0;
    this.counter = 60;
    this.currentQuestion = 0;
    this.progress = "0"
  }

  getProgresPercent() {
    this.progress = ((this.currentQuestion / this.questionList.length) * 100).toString();
    return this.progress;
  }

}

