import { Component, OnInit } from '@angular/core';

interface Place {
  imgSrc: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  places: Array<Place> = [];
  constructor() {}
  ngOnInit() {
    this.places = [
      {
        imgSrc: 'assets/images/Rectangle897.svg',
        name: 'Lorem ipsum dolor sit amet',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper ullamcorper tempor. Praesent euismod fringilla nulla nec bibendum. Cras ut volutpat lectus.`
      },
      {
        imgSrc: 'assets/images/Rectangle897.svg',
        name: 'Lorem ipsum dolor sit amet',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper ullamcorper tempor. Praesent euismod fringilla nulla nec bibendum. Cras ut volutpat lectus.`
      },
      {
        imgSrc: 'assets/images/Rectangle897.svg',
        name: 'Lorem ipsum dolor sit amet',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper ullamcorper tempor. Praesent euismod fringilla nulla nec bibendum. Cras ut volutpat lectus.`
      }
    ];
  }
}
