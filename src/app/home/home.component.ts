import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'Intro Speaker App';
  introduction = 'Hello, I am Janvi Pawaar';
  speechSynthesisUtterance: SpeechSynthesisUtterance | null = null;
  isSpeaking = false;

  constructor() {}

  ngOnInit(): void {}

  speakOnLoad(): void {
    if ('speechSynthesis' in window) {
      this.speechSynthesisUtterance = new SpeechSynthesisUtterance(
        this.introduction
      );
      this.speechSynthesisUtterance.onstart = () => {
        this.isSpeaking = true;
      };
      this.speechSynthesisUtterance.onend = () => {
        this.isSpeaking = false;
      };
      speechSynthesis.speak(this.speechSynthesisUtterance);
    } else {
      alert('Text-to-speech is not supported in your browser.');
    }
  }

  stopSpeaking() {
    speechSynthesis.cancel();
  }
}
