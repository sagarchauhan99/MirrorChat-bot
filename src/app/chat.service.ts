import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { ChatboxComponent } from './chatbox/chatbox.component';

export class Message {
  constructor(public author: string, public content: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  backdrop: any = true;
    backdropClass: any = 'dialogBackdrop';
    focus: any = false;
    navigationClose: any = true;
    disableClose: any = false;
    maxWidth: any = 'calc(100% - 16px)';

  constructor(private dialog:MatDialog) { }

 public ChatDialogRef!: MatDialogRef<ChatboxComponent>;

  conversation = new Subject<Message[]>();

  getBotAnswer(msg: string) {
    const userMessage = new Message('user', msg);  
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', this.getBotMessage(msg));
    
    setTimeout(()=>{
      this.conversation.next([botMessage]);
    }, 1500);
  }

  getBotMessage(question: string){
    let answer = question;
    return answer;
  }

  openchatDialogRef() {
    this.ChatDialogRef = this.dialog.open(ChatboxComponent, {
       // data: { text:  },
        id: 'chat',
        hasBackdrop: this.backdrop,
        backdropClass: this.backdropClass,
        autoFocus: this.focus,
        closeOnNavigation: this.navigationClose,
        disableClose: this.disableClose,
        maxWidth: this.maxWidth
    });
}
}
