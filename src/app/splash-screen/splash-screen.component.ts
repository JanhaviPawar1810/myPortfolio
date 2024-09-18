import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent implements OnInit {

  constructor(private router: Router) { }
  showSplash = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/home']); // Adjust the route accordingly
    }, 2000);
  }

}
