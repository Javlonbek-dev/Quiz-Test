import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
import { HeaderComponent } from './header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeBgDirective } from './change-bg.directive';
import { GeneralComponent } from './general/general.component';
import { HtmlquestionsComponent } from './htmlquestions/htmlquestions.component';
import { CssquestionsComponent } from './cssquestions/cssquestions.component';
import { JsquestionsComponent } from './jsquestions/jsquestions.component';
import { TsquestionsComponent } from './tsquestions/tsquestions.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuestionComponent,
    HeaderComponent,
    ChangeBgDirective,
    GeneralComponent,
    HtmlquestionsComponent,
    CssquestionsComponent,
    JsquestionsComponent,
    TsquestionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
