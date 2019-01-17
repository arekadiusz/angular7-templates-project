import { Component } from '@angular/core';
import { ListItem } from '../interfaces/list-item.interface';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponent {

  public items: Array<ListItem> = [
    { key: 'Key 1', value: 1 },
    { key: 'Key 2', value: 2 },
    { key: 'Key 3', value: 3 },
    { key: 'Key 4', value: 4 },
  ];

}
