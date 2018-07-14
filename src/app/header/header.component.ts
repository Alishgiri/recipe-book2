import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selectedNav = new EventEmitter<string>();
  isCollapsed = false;

  constructor() { }

  ngOnInit() {
  }

  onNavigationClicked(type: string) {
    this.selectedNav.emit(type);
    console.log(type);
  }

}
