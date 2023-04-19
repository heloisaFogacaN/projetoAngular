import { Component, EventEmitter, OnInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto';

  appBotaoClick(): void {
    console.log("AppComponent -> appBotaoClick")
  }
  mouseBotaoOver(): void {
    console.log("AppComponent -> mouseBotaoOver")
  }
}

