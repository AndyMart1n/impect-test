import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sport-card',
  templateUrl: './sport-card.component.html',
  styleUrls: ['./sport-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SportCardComponent implements OnInit {
  @Input() sport: any;

  constructor() { }

  ngOnInit() {
  }

  getIconImg() {
    const urlBase = 'https://www.thesportsdb.com/images/icons/'; //Soccer.png;
    return `${urlBase}${this.sport.strSport}.png`;
  }

}
