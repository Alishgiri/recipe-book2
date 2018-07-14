import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Ham cheese Sandwitch', 'Comes with selection of salad and sauce',
      'https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/201309-xl-inside-out-grilled-ham-and-cheese-sandwiches.jpg?itok=1TtiAfhX'),
    new Recipe('Chicken cheese Sandwitch', 'Comes with selection of salad and sauce',
      'http://www.ideahacks.com/wp-content/uploads/2017/01/Barbecue-Chicken-Grilled-Cheese.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  toRecipes(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
