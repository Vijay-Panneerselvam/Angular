import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponentComponent } from './board-component/board-component.component';
import { CardComponentComponent } from './card-component/card-component.component';

const routes: Routes = [
  { path: "board", component: BoardComponentComponent },
  { path: "Card", component: CardComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
