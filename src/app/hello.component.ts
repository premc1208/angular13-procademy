import { Component, Input } from '@angular/core';
import { EnrollService } from './Services/enroll.service';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1><button (click)="Enroll('Dotnet')">Enroll to Dotnet course</button>`,
  styles: [`h1 { font-family: Lato; }`],
  providers: [EnrollService],
})
export class HelloComponent {
  @Input() name: string;

  constructor(private enrollService: EnrollService) {}

  Enroll(title: string) {
    this.enrollService.EnrollToCourse(title);
  }
}
