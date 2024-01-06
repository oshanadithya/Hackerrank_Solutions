import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Item } from "../../types/Item";

@Component({
  selector: 'data-form',
  templateUrl: './dataForm.component.html',
  styleUrls: ['./dataForm.component.scss']
})
export class DataForm implements OnInit {
  @Output() onItemAdded: EventEmitter<Item> = new EventEmitter<Item>();
  newItem: Item = {
    name: '',
    genre: '',
    creator: '',
    type: '',
    totalTime: 0
  };

  ngOnInit() {}

  addItem() {
    // You may want to validate the form inputs before emitting the event
    this.onItemAdded.emit({ ...this.newItem });
    // Clear the form after emitting the event
    this.clearForm();
  }

  clearForm() {
    this.newItem = {
      name: '',
      genre: '',
      creator: '',
      type: '',
      totalTime: 0
    };
  }
}
