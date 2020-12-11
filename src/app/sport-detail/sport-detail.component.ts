import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sport-detail',
  templateUrl: './sport-detail.component.html',
  styleUrls: ['./sport-detail.component.scss']
})
export class SportDetailComponent implements OnInit {
  public sportId: string;
  public sports: [] = [];
  public sport: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.sportId = this.getId();
    this.route.params.subscribe(routeParams => {
      this.sportId = routeParams.id;
      if (this.sports.length > 0){
        this.setSport();
      }
    });
  }

  getId() {
    return this.route.snapshot.params['id'];
  }

  setSport(){
    for (const sport of this.sports){
      if (sport['idSport'] == this.sportId){
        this.sport = sport;
      }
    }
  }
}
