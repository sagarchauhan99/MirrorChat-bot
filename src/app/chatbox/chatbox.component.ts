import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent implements OnInit {

  messages: Message[] = [];
  public value: string='';

  constructor(
    public chatService:ChatService
  ) { 
    //if(JSON.parse(localStorage.getItem('msg')).length !=0){

   // }
  }

  ngOnInit(): void {
    this.chatService.conversation.subscribe((val) => {
    // let hello = JSON.parse(localStorage.getItem('msg'));
      this.messages = this.messages.concat(val);
    });
  }

  sendMessage() {
    this.chatService.getBotAnswer(this.value);
    localStorage.setItem('msg',JSON.stringify(this.messages))
    this.value = '';
  }

}
