import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nb-chat-colors',
  templateUrl: './messages.component.html',
  styles: [`
    ::ng-deep nb-layout-column {
      justify-content: center;
      display: flex;
    }
    nb-chat {
      width: 500px;
      margin: 0.5rem 0 2rem 2rem;
    }
  `]
})
export class MessagesComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
chats: any[] = [
    {
      status: 'success',
      title: 'Messages',
      messages: [
        {
          text: 'Success!',
          date: new Date(),
          reply: false,
          user: {
            name: 'Bot',
            avatar: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png',
          },
        },
      ],
    },
   
  ];

  sendMessage(messages, event) {
    messages.push({
      text: event.message,
      date: new Date(),
      reply: true,
      user: {
        name: 'Jonh Doe',
        avatar: 'https://techcrunch.com/wp-content/uploads/2015/08/safe_image.gif',
      },
    });
  }


}
