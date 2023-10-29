import { Component } from '@angular/core';
import { from, mergeMap, tap, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title? = 'Choose any options!';

  onChangeLogo = (newTitle: string): void => {
    console.log(`loading newtitle: ${newTitle}`);
    this.title = undefined;
    this.createDelayUsingTimer(500)
      .subscribe(
        (res) => {
          console.log("loaded new title")
          this.title = newTitle;
        }
      );
  }
  onChangeLogo2(newTitle: string) {
    console.log(`loading newtitle: ${newTitle}`);
    this.title = undefined;
    this.createDelayUsingTimer(500)
      .subscribe(
        (res) => {
          console.log("loaded new title")
          this.title = newTitle;
        }
      );
  }

  createDelayUsingTimer(delayValue: number) {
    console.log(`Starting the ${delayValue} ms delay at ${new Date()}`);
    return timer(delayValue);
  }

}
