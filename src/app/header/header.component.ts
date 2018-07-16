import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selectedNav = new EventEmitter<string>();
  isCollapsed = false;

  constructor(private dropdownConfig: NgbDropdownConfig) {
    this.dropdownConfig.placement = 'bottom-right';
  }

  ngOnInit() {
  }

  onNavigationClicked(type: string) {
    this.selectedNav.emit(type);
    console.log(type);
  }

}
