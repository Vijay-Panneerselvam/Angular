import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  Squares:any[];
  Winner:String;
  NextPlayer:String = "X";
  BoardLock:Boolean = false;
  counter(i: number) {
    return new Array(i);
}
  constructor() { }

  ngOnInit(): void {
    this.StartGame();
  }

  StartGame(){
    this.Squares = new Array(9).fill(false);
    this.NextPlayer = "X";
    this.BoardLock = false;
    this.Winner = '';
  }
  get Player(){
    return this.NextPlayer =="X"  ? "O" : "X"
  }
  UpdatePlayer(index){
    if(!this.Squares[index] && this.BoardLock == false){
      this.Squares.splice(index, 1, this.NextPlayer);
      this.BoardLock = this.CheckWinner(this.NextPlayer);
      if(!this.BoardLock){
        this.NextPlayer = this.Player;
      }
      
    }
  }

  CheckWinner(symbol){
    const winningIndexes = [
      [0, 1, 2],  //top row
      [3, 4, 5],  //middle row
      [6, 7, 8],  //bottom row
      [0, 3, 6],  //first col
      [1, 4, 7],  //second col
      [2, 5, 8],  //third col
      [0, 4, 8],  //first diagonal
      [2, 4, 6]   //second diagonal
    ];
    for(let pattern of winningIndexes) {
      const foundWinner = this.Squares[pattern[0]] == symbol && this.Squares[pattern[1]] == symbol && this.Squares[pattern[2]] == symbol;

      if(foundWinner) {
        this.Winner = symbol;

        return true;
      }
    }

    return false;
  }
}
