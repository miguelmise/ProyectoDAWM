import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  constructor(private http:HttpClient) { }

  getAllInfo():Observable<any>{
    return this.http.get<any>('https://proyecto3bdnorelacional-default-rtdb.firebaseio.com/info_modelos.json');
  }

  getIndexInfo(idModelo:number):Observable<any>{
    return this.http.get<any>(`https://proyecto3bdnorelacional-default-rtdb.firebaseio.com/info_modelos.json?orderBy="idModelo"&equalTo=${idModelo}`);
  }

}
