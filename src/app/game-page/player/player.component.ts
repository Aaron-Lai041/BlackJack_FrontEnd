import { Component } from '@angular/core';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  type: 'dealer' | 'player' = 'player';
  scoreBottom: boolean | null = false;

  constructor() { }
  
  players = [
    { name: 'player1', index: 1 },
    { name: 'player2', index: 2 },
    { name: 'player3', index: 3 },
    { name: 'player4', index: 4 },
    { name: 'player5', index: 5 }
  ];

}
