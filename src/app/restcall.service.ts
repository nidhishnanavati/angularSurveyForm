import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Model } from './model';

@Injectable({
  providedIn: 'root'
})
export class RestcallService {

  constructor(private http:HttpClient) { }

  public submit(model: Model){
    return this.http.post("http://34.74.81.186/submitSurvey", model);
  }  

  public fetch(){
    return this.http.get("http://34.74.81.186/getAllSurveys");
  }
}
