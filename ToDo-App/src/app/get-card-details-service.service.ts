import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetCardDetailsService {
  containerId = '';
  SelectedList = {
    "ListName":{},
    "index":0
   };
  List1 = [];
  List2 = [];
  List3 = [];
  List4= [];
  constructor() { }

  getAllListValues = () => {
    var lObj = {
      "List1": this.List1,
      "List2": this.List2,
      "List3": this.List3,
      "List4": this.List4
    };
    this.SelectedList = {
      "ListName":{},
      "index":0
     };
    return lObj;
  }
  updateselectedCardind(ContId, index){
    this.SelectedList.ListName = this[ContId];
    this.containerId =ContId;
    if(index == "new"){
      this.SelectedList.index = -1;
    }else{
      this.SelectedList.index = index;
    }
    
  }
  getselectedCardind(){
    return this.SelectedList;
  }
  updateCardDetails(cardInfo){
    var lObj = this.SelectedList.ListName[this.SelectedList.index];
    if(lObj != null){
      lObj.CardTitle = cardInfo.CardTitle;
      lObj.Comments=(cardInfo.Comments);
      console.log(this.SelectedList.ListName);
    }else{
      lObj = {};
      lObj.CardTitle = cardInfo.CardTitle;
      lObj.Comments = new Array();
      lObj.Comments.push(cardInfo.Comments);
      this.SelectedList.ListName=lObj;
      this[this.containerId].push(this.SelectedList.ListName);
    }
    
    
  }
  resetList(ContId){
    this[ContId] = [];
  }
  deleteId(){
    if(this.SelectedList.index > -1){
      this[this.containerId].splice(this.SelectedList.index  ,1);
    }
    
  }
}
