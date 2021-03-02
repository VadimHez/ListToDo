import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TODOItemModel } from '../shared/todo-item-model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() 
  public data : TODOItemModel = new TODOItemModel(false, "", "");

  @Output() 
  public edit = new EventEmitter<TODOItemModel>();

  constructor() { }

  ngOnInit(): void {
  }

  onEdit() {
    this.edit.emit(Object.assign({}, this.data));
  }

}
