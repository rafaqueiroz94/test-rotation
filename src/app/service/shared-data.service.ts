import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  values: string[] = [];

  constructor() { }

  setValue(values: string[]) {
    this.values = values;
  }

  getValue() {
    return this.values;
  }
  
  clearValue(){
    this.values = []
  }
}
