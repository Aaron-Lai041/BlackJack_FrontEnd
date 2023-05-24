import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {


  isButtonDisabled: boolean = true;
  roomId = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(4),
  ]);
  constructor(private router:Router) {
    
   }

  ngOnInit(): void {
  }
  enableButton() {
    this.isButtonDisabled = false;
  }
  disableButton() {
    this.isButtonDisabled = true;
  }
  navigateToGamePage() {
    this.router.navigate(['/GameRoom']); // 导航到 game-page 路由
  }

}
