import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { TimestampProgressBarComponent } from './timestamp-progress-bar/timestamp-progress-bar.component';
import { PlayingCardComponent } from './playing-card/playing-card.component';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent  {
  
  
  type: 'dealer' | 'player' = 'player';
  scoreBottom: boolean | null = false;

  constructor() { }

  gameResult: string = '' // 存储游戏结果的变量

  handleGameResult(result: string) {
    this.gameResult = result;
  }

  getFinalBetValue(): number {
    return this['finalBet'];
  }

  finalBet: number = 0;

  updateFinalBet(finalBet: number): void {
    this.finalBet = finalBet;
  }

  
  players = [
    { name: '沉睡山羊', index: 1 },
    { name: '火山孝子', index: 2 },
    { name: 'player3', index: 3 },
  ];


  // 進度條啟動
 
  progressValue: number = 100;
  durationInSeconds: number = 30;
  isCountdownStarted: boolean = false;

  ngOnInit() {}

  onReadyButtonClick(): void {
    this.isCountdownStarted = !this.isCountdownStarted;
  }

  onProgressUpdate(value: number): void {
    this.progressValue = value;
  }

}
