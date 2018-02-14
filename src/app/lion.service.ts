import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Lion } from './lion';
//import { LIONS } from './squad-list';

import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable()
export class LionService {
  private lionsUrl = 'api/lions'; //URL to web api

  constructor(
    private http:  HttpClient,
    private messageService: MessageService,


  ) { }

  getLions(): Observable<Lion[]> {
    //this.messageService.add('LionService: retrieved Lions');
    return this.http.get<Lion[]>(this.lionsUrl)
  }

  getLion(id: number):Observable<Lion>{
    //this.messageService.add(`LionService: fetched lion id=${id}`);
    const url = `${this.lionsUrl}/${id}`;
    return this.http.get<Lion>(url);
    //return of (LIONS.find(lion => lion.id === id));
  }



  updateLion(lion: Lion): Observable<any>{
    return this.http.put(this.lionsUrl, lion, httpOptions);
  }

  addLion(lion: Lion): Observable<Lion>{
    return this.http.post<Lion>(this.lionsUrl, lion, httpOptions);
  }

  deleteLion(lion: Lion | number): Observable<Lion>{
    const id = typeof lion === 'number' ? lion : lion.id;
    const url = `${this.lionsUrl}/${id}`;

    return this.http.delete<Lion>(url, httpOptions);
  }

  searchLions(term: string): Observable<Lion[]>{
    if(!term.trim()){
      //if not search term, return empty hero array
      return of([])
    }
    return this.http.get<Lion[]>(`api/lions/?name=${term}`);
  }

}
