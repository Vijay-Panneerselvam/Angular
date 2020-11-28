import { Component, OnInit } from '@angular/core';
import { GetCardDetailsService } from "../get-card-details-service.service";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-board-component',
  templateUrl: './board-component.component.html',
  styleUrls: ['./board-component.component.css']
})
export class BoardComponentComponent implements OnInit {
  SelectedList = '';
  ListCount = new Array(4);
  List1 = [];
  List2 = [];
  List3 = [];
  List4 = [];
  constructor(public cardService: GetCardDetailsService) { }

  getAllListArr() {
    this.SelectedList ='';
    let lArr: any = this.cardService.getAllListValues();
    for (let key in lArr) {
      this[key] = lArr[key];
    }
  }
  updateSelId(ContId, index){
    this.cardService.updateselectedCardind(ContId, index);
  }
  ngOnInit(): void {
    this.getAllListArr();
  }
  DeleteList(contId){
    this[contId]=[];
    this.cardService.resetList(contId)
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
    }
  }

  
}
