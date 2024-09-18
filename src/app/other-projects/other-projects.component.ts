import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-other-projects',
  templateUrl: './other-projects.component.html',
  styleUrls: ['./other-projects.component.css'],
})
export class OtherProjectsComponent implements OnInit {
  public textToSpeechApp = {
    title: 'Text to Speech App',
    description:
      'The "Text to Speech" application is a user-friendly and privacy-focused ' +
      'web tool that transforms text input into spoken words using advanced ' +
      'text-to-speech technology.',
    appLink: 'https://sac799.github.io/text_to_speech_app/',
    moreLink:
      'https://github.com/sac799/text_to_speech_app/blob/43eba52b73793c9cee0c016ef1d90a388d10f7e9/Speech%20to%20Text%20App.pdf',
    gifSource: 'https://media.giphy.com/media/oMg7wBHYhS3p5ER9y6/giphy.gif',
  };

  public ecommerceApp = {
    title: 'Ecommerce App',
    description:
      'Simple Ecommerce Website with pagination using fake API to get the products. (No server-side implementation)',
    appLink: '/ecomm',
    moreLink: '/ecomm',
    gifSource: 'https://media.giphy.com/media/JogBOCr1eDSQxxAMNk/giphy.gif',
  };
  constructor(public router: Router) {}

  ngOnInit(): void {}

  openEcommComponent() {
    this.router.navigate(['/ecomm']);
  }
}
