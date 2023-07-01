import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssquestionsComponent } from './cssquestions/cssquestions.component';
import { GeneralComponent } from './general/general.component';
import { HtmlquestionsComponent } from './htmlquestions/htmlquestions.component';
import { JsquestionsComponent } from './jsquestions/jsquestions.component';
import { QuestionComponent } from './question/question.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'',redirectTo:'general' ,pathMatch: 'full'},  
  {path:"welcome",component:WelcomeComponent},
  {path:"general",component:GeneralComponent},
  {path:"question" ,component:QuestionComponent},
  {path:"html",component:HtmlquestionsComponent},
  {path:"css",component:CssquestionsComponent},
  {path:"js",component:JsquestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
