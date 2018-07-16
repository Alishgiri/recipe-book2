import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private dropdownConfig: NgbDropdownConfig) {
    this.dropdownConfig.placement = 'top-left';
  }

  ngOnInit() {
  }

}
