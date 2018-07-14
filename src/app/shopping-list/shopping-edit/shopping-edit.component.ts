import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from './../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputName') nameRef: ElementRef;
  @ViewChild('inputAmount') amountRef: ElementRef;
  @Output() ingredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient() {
    const ingName = this.nameRef.nativeElement.value;
    const ingAmount = this.amountRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredient.emit(newIngredient);
  }

}
