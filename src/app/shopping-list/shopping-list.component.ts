import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Wheat', 1),
    new Ingredient('Bread', 2)
  ];

  constructor() { }

  ngOnInit() {
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
