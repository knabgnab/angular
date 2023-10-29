import { Component, Input } from '@angular/core';

@Component({
  selector: 'cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent {
  @Input()
  onChangeLogo?: (args: any) => void;

  text: string="You can animate lots of things with CSS. For one, \
  you can animate CSS properties with values that can change over time using CSS animations or CSS transitions.\
   For a full list of these properties, check out the MDN Web Doc for a list of animatable CSS Properties. \
   To spark some inspiration, let’s review a few demos. <br><br>\
  There are two main types of animations we’ll cover, and they differ by the amount of control they provide. <br><br>\
  1. Rotating loader <br>\
  The animation references the name of the @keyframes, \
  where the transform: rotate is set to go from 0 degrees to 360 degrees, a full rotation.\
  That’s all it takes to make this spinner come to life!<br>\
  2. Sass <br>\
  Wanting something smoother? SVGs support gradients, \
  so you can achieve a smoother effect using the same Sass but with an SVG that has a gradient applied to the ring. \
  \
  ";

}
