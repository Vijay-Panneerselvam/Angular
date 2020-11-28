import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponentComponent } from './board-component/board-component.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { GetCardDetailsService } from './get-card-details-service.service';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponentComponent,
    CardComponentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [GetCardDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
