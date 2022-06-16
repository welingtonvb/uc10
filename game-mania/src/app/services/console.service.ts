import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Console } from '../models/console';

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {

  url = "http://localhost:3000/consoles"

  constructor(private httpClient: HttpClient) { }

  getConsoles(): Observable<Console[]>{
    return this.httpClient.get<Console[]>(this.url)
  }
}
