import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Telefone } from '../models/telefone';

@Injectable({
  providedIn: 'root'
})
export class TelefoneService {

  url = "http://localhost:3000/telefones"

  constructor(private httpClient: HttpClient) { }

  getTelefones(): Observable<Telefone[]>{
    return this.httpClient.get<Telefone[]>(this.url)
  }
}
