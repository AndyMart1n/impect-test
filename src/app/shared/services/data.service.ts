import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlBase: string = 'https://www.thesportsdb.com/api/v1/json/1';
  private allSports: any;

  constructor(
    private http: HttpClient
  ) { }

  getAllSports() { 
    const url = this.urlBase + '/all_sports.php';

    return this.http.get(url).pipe( map((data: any) => {
      this.allSports = data.sports;
      return data;
    }));
  }

  getSport(id: string) {
    if (this.allSports) {
      return this.allSports.filter(sport => sport.idSport === id);
    }
    else {

    }
  }
}
