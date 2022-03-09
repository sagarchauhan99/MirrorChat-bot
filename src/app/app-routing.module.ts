import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatboxComponent } from './chatbox/chatbox.component';

const routes: Routes = [
  {path:'chat-bot', component:ChatboxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
