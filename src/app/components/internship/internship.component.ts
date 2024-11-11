import {Component} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgStyle} from '@angular/common';
import { InternshipCardComponent } from '../internship-card/internship-card.component';

@Component({
  selector: 'app-internship',
  standalone: true,
  imports: [InternshipCardComponent],
  templateUrl: './internship.component.html',
})
export class InternshipComponent {
  tab = [1,2,3,4]
}
