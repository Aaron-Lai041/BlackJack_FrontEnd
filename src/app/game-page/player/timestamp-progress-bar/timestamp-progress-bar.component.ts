import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timestamp-progress-bar',
  templateUrl: './timestamp-progress-bar.component.html',
  styleUrls: ['./timestamp-progress-bar.component.css'],
})
export class TimestampProgressBarComponent {
  progressValue: number = 100;
  durationInSeconds: number = 30;
  interval: any;
  isCountdownStarted: boolean = false; // 確認是否倒數計時

  readyProgressClicked(): void {
    if (!this.isCountdownStarted) {
      this.startCountdown();
    } else {
      clearInterval(this.interval);
      this.isCountdownStarted = false;
      this.progressValue = 100;
    }
  }

  startCountdown(): void {
    this.isCountdownStarted = true;
    const decrementValue = 100 / ((this.durationInSeconds * 1000) / 100);
    this.interval = setInterval(() => {
      this.progressValue -= decrementValue;
      if (this.progressValue <= 0) {
        this.progressValue = 0;
        clearInterval(this.interval);
        this.isCountdownStarted = false;
      }
    }, 100);
  }
}
