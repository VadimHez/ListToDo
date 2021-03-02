import { Component, OnInit } from '@angular/core';
import { CardDetailComponent } from '../card-detail/card-detail.component';
import { MatDialog } from '@angular/material/dialog';
import { TODOItemModel } from '../shared/todo-item-model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  public filledList: TODOItemModel[] = [
    new TODOItemModel(true, "title 1", "some descriptin here"),
    new TODOItemModel(true, "title 2", "some descriptin here "),
    new TODOItemModel(false, "title 3", "some descriptin here"),
    new TODOItemModel(false, "title 4", "some descriptin here")];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public edit(currentModel: TODOItemModel) {
    const dialogRef = this.dialog.open(CardDetailComponent, {
      data: currentModel
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != null) {
        this.filledList.forEach(item => { 
          if(item.id == result.id){
            item.title = result.title;
            item.description = result.description;
          }
        });
      }
    });
  }

  public create() {
    const dialogRef = this.dialog.open(CardDetailComponent, {
      data: new TODOItemModel(false, "", "")
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result != null) {
        this.filledList.push(result);
      }
    });
  }

}
