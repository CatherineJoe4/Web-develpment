import { Injectable } from '@angular/core';
export interface Student{
  id:string,
  Name: string,
  Age:string,
  Gender:string,
  Mobilenumber:string,
  mail:string,
  Degree:string,
  Experience:string,
  Work:any

}
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }
}
