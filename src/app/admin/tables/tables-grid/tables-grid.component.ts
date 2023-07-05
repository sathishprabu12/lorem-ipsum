import { Component, OnInit } from '@angular/core';
export interface UserElement {
  image: string;
  name: string;
  designation: string;
  joiningDate: string;
}
const ELEMENT_DATA: UserElement[] = [
  {image: "../../../assets/images/Ellipse.svg", name: 'Lorem Epsum', designation: 'consectetur adipiscing', joiningDate: '12 July 2020'},
  {image: "../../../assets/images/Ellipse1.svg", name: 'Lorem Epsum', designation: 'consectetur adipiscing', joiningDate: '12 July 2020'},
  {image: "../../../assets/images/Ellipse.svg", name: 'Lorem Epsum', designation: 'consectetur adipiscing', joiningDate: '12 July 2020'},
  {image: "../../../assets/images/Ellipse.svg", name: 'Lorem Epsum', designation: 'consectetur adipiscing', joiningDate: '12 July 2020'},
  {image: "../../../assets/images/Ellipse1.svg", name: 'Lorem Epsum', designation: 'consectetur adipiscing', joiningDate: '12 July 2020'},
  {image: "../../../assets/images/Ellipse.svg", name: 'Lorem Epsum', designation: 'consectetur adipiscing', joiningDate: '12 July 2020'},
  {image: "../../../assets/images/Ellipse.svg", name: 'Lorem Epsum', designation: 'consectetur adipiscing', joiningDate: '12 July 2020'},
  {image: "../../../assets/images/Ellipse1.svg", name: 'Lorem Epsum', designation: 'consectetur adipiscing', joiningDate: '12 July 2020'},
  {image: "../../../assets/images/Ellipse1.svg", name: 'Lorem Epsum', designation: 'consectetur adipiscing', joiningDate: '12 July 2020'},
  {image: "../../../assets/images/Ellipse.svg", name: 'Lorem Epsum', designation: 'consectetur adipiscing', joiningDate: '12 July 2020'},
  {image: "../../../assets/images/Ellipse1.svg", name: 'Lorem Epsum', designation: 'consectetur adipiscing', joiningDate: '12 July 2020'},

];
@Component({
  selector: 'app-tables-grid',
  templateUrl: './tables-grid.component.html',
  styleUrls: ['./tables-grid.component.scss']
})
export class TablesGridComponent implements OnInit {

  constructor() { }

   
  pageSize=5;
  List=ELEMENT_DATA;

  ngOnInit() {
  // get your list from api
    
  }

  

}
