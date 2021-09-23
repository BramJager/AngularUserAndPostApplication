import { Component, Input, OnInit } from '@angular/core';
import { MatDrawerToggleResult } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  @Input() toggle: boolean = true;

  

  ngOnInit(): void {
  }

}
