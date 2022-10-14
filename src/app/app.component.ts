import { Component, VERSION } from '@angular/core';
import { EnrollService } from './Services/enroll.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [EnrollService],
})
export class AppComponent {
  name1 = 'Angular ' + VERSION.major;

  constructor(private enrollService: EnrollService) {}

  Enroll(title: string) {
    debugger;
    this.enrollService.EnrollToCourse(title);
  }
}
