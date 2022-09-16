import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http:HttpClient
  ) { }
  apiCountryAll(){
    return this.http.get("https://restcountries.com/v3.1/all");
  }
  // apiCountryName(name){
  //   return this.http.get("https://restcountries.com/v3.1/name/{name}");
  // }
}
