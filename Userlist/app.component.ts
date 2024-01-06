import { Component } from '@angular/core';
import { Item } from "../types/Item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Book: string = 'Book';
  Song: string = 'Song';
  bookList: Item[] = [];
  songList: Item[] = [];

  constructor() {}

  onItemAdded(item: Item) {
    if (item.type === this.Book) {
      this.bookList.push(item);
    } else if (item.type === this.Song) {
      this.songList.push(item);
    }
  }

  onItemDelete(item: Item) {
    // Implement the logic to delete an item from the respective list
    if (item.type === this.Book) {
      this.bookList = this.bookList.filter(i => i !== item);
    } else if (item.type === this.Song) {
      this.songList = this.songList.filter(i => i !== item);
    }
  }
}
