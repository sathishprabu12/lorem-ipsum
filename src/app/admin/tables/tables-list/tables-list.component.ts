import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
  selector: 'app-tables-list',
  templateUrl: './tables-list.component.html',
  styleUrls: ['./tables-list.component.scss']
})
export class TablesListComponent implements OnInit, AfterViewInit{
   
  displayedColumns: string[] = ['image', 'name', 'designation', 'joiningDate'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort) sort: MatSort;


  ngOnInit() {
    
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }


}
