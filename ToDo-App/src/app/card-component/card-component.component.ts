import { Component, OnInit } from '@angular/core';
import { GetCardDetailsService } from "../get-card-details-service.service"
import { Router } from '@angular/router';


@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit {
  lSelectedRec = {
    "CardTitle": '',
    "Comments": []
  };
  constructor(public cardService: GetCardDetailsService, private router: Router) { }

  ngOnInit(): void {
    let lSelInd = this.cardService.getselectedCardind();
    if (lSelInd.index > -1) {
      this.lSelectedRec = lSelInd.ListName[lSelInd.index];
      (<HTMLInputElement>document.getElementById("TitleTextArea")).value = this.lSelectedRec.CardTitle;
    }
  }

  AddComments(e) {
    let lTitleCheck = (<HTMLInputElement>document.getElementById("TitleTextArea")).value;
    let lCommentText = (<HTMLInputElement>document.getElementById("CommentTextArea")).value;
    if (lTitleCheck != '' && lCommentText !== '') {
      (<HTMLInputElement>document.getElementById("errTxt")).value = '';
      this.lSelectedRec.CardTitle = lTitleCheck;
      this.lSelectedRec.Comments.push(lCommentText);
      this.cardService.updateCardDetails(this.lSelectedRec);
      this.router.navigate(['/board']);
    } else {
      var lErrMsg = ("Please enter the \"Card Title\" and \"Comments\" before clicking on Add Comments buton.");
      (<HTMLInputElement>document.getElementById("errTxt")).innerText = lErrMsg;
    }
    e.preventDefault();
  }
  deleteComments() {
    this.cardService.deleteId();
    this.router.navigate(['/board']);
  }

}
