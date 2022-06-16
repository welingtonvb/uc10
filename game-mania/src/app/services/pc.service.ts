import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pc } from '../models/pc';

@Injectable({
  providedIn: 'root'
})
export class PcService {

  url = "http://localhost:3000/pcs"

  constructor(private httpClient: HttpClient) { }

  getPcs(): Observable<Pc[]>{
    return this.httpClient.get<Pc[]>(this.url)
  }
}
