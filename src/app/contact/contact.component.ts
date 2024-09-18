import { Component, Input, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contact = {
    phone: '+44 7768379510',
    email: 'janhavipawar1810@gmail.com',
    linkedin: 'https://www.linkedin.com/in/janhavi-pawar-a0981b200/',
    github: 'https://github.com/JanhaviPawar1810',
    
  };

  notificationMessage: string = '';

  constructor() {}

  ngOnInit(): void {}

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
