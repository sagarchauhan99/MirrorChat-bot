import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChatService } from './chat.service';
import { ChatboxComponent } from './chatbox/chatbox.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat-bot';

  constructor(
        public matdialog: MatDialog,
        public dialog:ChatService
        ) {}

  openDialog() {
    const dialogRef = this.matdialog.open(ChatboxComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

