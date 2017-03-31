import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Just a test', 'http://www.japanesecooking101.com/wp-content/uploads/2014/01/IMG_7897.jpg'),
    new Recipe('Another Test Recipe', 'It\'s delicious!', 'https://i.ytimg.com/vi/GWxACwK8KeA/maxresdefault.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
