import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

    //RouterModule.forRoot([
    //  {
    //   path: "dashboard"
     //     component: "dashboard"
     // }
   // ])
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
