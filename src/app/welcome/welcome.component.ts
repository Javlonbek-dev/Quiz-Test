import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
name: string = '';

  onSubmit(name:string) {
    if (this.name.trim() === '') {
      alert("Ism kirit!!!")
     
    } else {
      console.log('Name:', this.name);
    }
  }

  @ViewChild('name') nameKey!:ElementRef;

  startQuiz(){
    localStorage.setItem("name", this.nameKey.nativeElement.value);
    console.log(this.nameKey);
    
  }
}
