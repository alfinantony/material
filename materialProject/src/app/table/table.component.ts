import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent implements AfterViewInit{

  displayedColumns: string[] = ['position', 'item', 'quantity', 'price'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
}
}


export interface PeriodicElement {

  
  item: string;
  position: number;
  quantity: number;
  price: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, item: 'AGV Helmets', quantity: 2, price: 7000},
  {position: 2, item: 'AGV MOTO-X', quantity: 4, price: 8500},
  {position: 3, item: 'AGV', quantity: 6, price: 14000},
  {position: 4, item: 'AGV limited', quantity: 9, price: 8522},
  {position: 5, item: 'Axis', quantity: 10, price: 5654},
  {position: 6, item: 'Steel Bird', quantity: 24, price: 4582},
  {position: 7, item: 'Steel Bird II', quantity: 14.0067, price: 1500},
  {position: 8, item: 'Carbon', quantity: 50, price: 9500},
  {position: 9, item: 'MT', quantity: 18, price: 7522},
  {position: 10, item: 'MT II', quantity: 20, price: 7854},
  {position: 11, item: 'Thunder', quantity: 22, price: 4586},
  {position: 12, item: 'Thunder Mag', quantity: 24, price: 2000},
  {position: 13, item: 'Gold', quantity: 26, price: 4521},
  {position: 14, item: 'Silicon', quantity: 28, price: 652},
  {position: 15, item: 'Carbon XR', quantity: 30, price: 1522},
];
