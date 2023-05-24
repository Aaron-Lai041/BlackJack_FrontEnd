import { Component } from '@angular/core';
@Component({
  selector: 'app-player-action',
  templateUrl: './player-action.component.html',
  styleUrls: ['./player-action.component.css']
})
export class PlayerActionComponent {

  constructor() {
    
  }
  readyMenuHidden:boolean = false;
  readyClicked():void {
    this.readyMenuHidden = !this.readyMenuHidden;
  }

  /** If true stayHitMenu is shown instead of ready menu */



  
}
