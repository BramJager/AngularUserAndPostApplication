import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  toggle: boolean = true;

  ngOnInit(): void {
  }

  @Output() menuButton = new EventEmitter<boolean>();

  toggleMenu() : void{
    this.toggle = !this.toggle;
    this.menuButton.emit(this.toggle);
  }

}
