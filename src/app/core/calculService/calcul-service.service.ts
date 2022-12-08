import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculServiceService {

  constructor() { }

  getNumberOf(list: any, critiria: string, value: any): number {
    let nbelements: number = 0
    for (let i = 0; i < list.length; i++) {

      if (list[i][critiria] == value) { nbelements++; }

    }
    return nbelements;

  }
}
