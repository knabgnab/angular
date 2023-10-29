import { Component, Input } from '@angular/core';

@Component({
  selector: 'dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})
export class DogComponent {
  @Input()
  onChangeLogo?: (args: any) => void;
}
