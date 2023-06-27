import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HtmlquesService {

  constructor( private http: HttpClient) { }

  getQuestionJson(){
    return this.http.get<any>("assets/htmlquestions.json");
  }
}
