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

  gameResult: string = '' // 存储游戏结果的变量

  handleGameResult(result: string) {
    this.gameResult = result;
  }

  
  players = [
    { name: '沉睡山羊', index: 1 },
    { name: '火山孝子', index: 2 },
    { name: 'player3', index: 3 },
  ];

}
