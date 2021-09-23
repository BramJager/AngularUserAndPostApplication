import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularWeekOpdracht3';

  toggle: boolean = true;

  toggleMenu(toggle: boolean){
    this.toggle = toggle;
  }
}


