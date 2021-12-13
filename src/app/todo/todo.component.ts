import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  model = new Model();
  name: string = this.model.name;
  items: TodoItem[] = this.model.items;
  displayAll: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getItems() {
    if (this.displayAll) {
      return this.items;
    } else {
      return this.items.filter(item => !item.status);
    }
  }

  addItem(itemText: string) {
    if (itemText != "") {
      this.items.push({ description: itemText, status: false });
    }
  }

  deleteAll() {
    this.items = [];
  }
}
