import { Component ,Input , OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-money-counter',
  templateUrl: './money-counter.component.html',
  styleUrls: ['./money-counter.component.css']
})
export class MoneyCounterComponent{
  private _gameResult: string = '';
  private _finalBet: number = 0;

  @Input()
  set gameResult(value: string) {
    this._gameResult = value;
    this.updateBetMoney();
  }
  @Input()
  set finalBet(value: number) {
    this._finalBet = value;
    this.tryBetMoney();
  }

  get finalBet(): number {
    return this._finalBet;
  }

  get gameResult(): string {
    return this._gameResult;
  }
  
  private _betMoney: number = 10000;

  get betMoney(): number {
    return this._betMoney;
  }
  
  
  constructor() { }

  tryBetMoney(): void {
    this._betMoney -= this.finalBet;
  }

  updateBetMoney(): void {
    if (this.gameResult === 'win') {
      this._betMoney += this.finalBet * 2;
    } else if (this.gameResult === 'draw') {
      this._betMoney += this.finalBet;
    }
  }

  
  
  



}
