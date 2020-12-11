import { Component, OnInit } from '@angular/core';

import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public sports: any[];

  constructor(
    private dataService: DataService
    ) { }

  ngOnInit() {
    this.dataService.getAllSports().subscribe((res: any) => {
      this.sports = res.sports;
      console.log(res);
    })
  }

}
