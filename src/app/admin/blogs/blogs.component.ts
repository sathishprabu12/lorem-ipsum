import { Component, OnInit } from '@angular/core';
 
interface Blogs {
  imgSrc: string;
  name: string;
  description: string;
}
 
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  blogs: Array<Blogs> = [];
  constructor() {}

  ngOnInit() {
    this.blogs = [
      {
        imgSrc: 'assets/images/oil-gas-rigs-vector.svg',
        name: 'Lorem ipsum dolor sit amet',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper ullamcorper tempor. Praesent euismod fringilla nulla nec bibendum. Cras ut volutpat lectus.`
      },
      {
        imgSrc: 'assets/images/oil-gas-rigs-vector.svg',
        name: 'Lorem ipsum dolor sit amet',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper ullamcorper tempor. Praesent euismod fringilla nulla nec bibendum. Cras ut volutpat lectus.`
      },
      {
        imgSrc: 'assets/images/oil-gas-rigs-vector.svg',
        name: 'Lorem ipsum dolor sit amet',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper ullamcorper tempor. Praesent euismod fringilla nulla nec bibendum. Cras ut volutpat lectus.`
      },
      {
        imgSrc: 'assets/images/oil-gas-rigs-vector.svg',
        name: 'Lorem ipsum dolor sit amet',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ullamcorper ullamcorper tempor. Praesent euismod fringilla nulla nec bibendum. Cras ut volutpat lectus.`
      }
    ];
  }

  
}
