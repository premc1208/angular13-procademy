import { Injectable } from '@angular/core';

@Injectable()
export class EnrollService {
  constructor() {}

  EnrollToCourse(title: string) {
    debugger;
    alert('Successfully enrolled to ' + title + ' course!!!');
  }
}
