import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outlets',
  templateUrl: './outlets.component.html',
  styleUrls: ['./outlets.component.css'],
})
export class OutletsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  table_title = 'OFFLINE OUTLETS';

  data: MyData[] = [
    {
      num: 1,
      city: 'Chennai',
      address: '123, Porur, Ramachandra Nagar',
      state: 'Tamil Nadu',
    },
    {
      num: 2,
      city: 'Kolkata',
      address: 'P23, Esplanade, PA',
      state: 'West Bengal',
    },
    {
      num: 3,
      city: 'Mumbai',
      address: '1Sector-94, Panvel Downtown',
      state: 'Maharastra',
    },
    {
      num: 4,
      city: 'Bangalore',
      address: 'Vikas Nagar, WhiteField',
      state: 'Karnataka',
    },
    {
      num: 5,
      city: 'New Delhi',
      address: '12/56N, Ullas Nagar',
      state: 'Delhi - NCR',
    },
  ];
}

class MyData {
  num: number | undefined;
  city: string | undefined;
  address: string | undefined;
  state: string | undefined;
}
