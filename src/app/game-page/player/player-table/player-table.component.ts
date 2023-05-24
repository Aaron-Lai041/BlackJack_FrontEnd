import { Component } from '@angular/core';


@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.css']
})
export class PlayerTableComponent {
  tablePath: string = '../../../assets/images/BJtable.png'
  tabelalttext: string = 'Blackjack Table'

  winPath: string = '../../../assets/images/win.png'
  winalttext: string = 'Win'

  losePath: string = '../../../assets/images/lose.png'
  losealttext: string = 'Lose'

  normalPath: string = '../../../assets/images/normal.png'
  noramlalttext: string = 'Normal'

  constructor() { }

}
