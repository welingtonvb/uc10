import { Component, OnInit } from '@angular/core';
import { Telefone } from 'src/app/models/telefone';
import { TelefoneService } from 'src/app/services/telefone.service';

@Component({
  selector: 'app-telefone',
  templateUrl: './telefone.component.html',
  styleUrls: ['./telefone.component.css']
})
export class TelefoneComponent implements OnInit {

  constructor(
    private telefoneService: TelefoneService
    ) { }

  listaTelefone = [] as Telefone[]

  ngOnInit(): void {
    this.carregarTelefones()
  }

  carregarTelefones(){
    this.telefoneService.getTelefones().subscribe((telefones: Telefone[]) => {
      this.listaTelefone = telefones;
    })
  }  
}
