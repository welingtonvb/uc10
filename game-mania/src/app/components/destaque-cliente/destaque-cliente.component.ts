import { Component, OnInit } from '@angular/core';
import { Opiniao } from 'src/app/models/opiniao';

@Component({
  selector: 'app-destaque-cliente',
  templateUrl: './destaque-cliente.component.html',
  styleUrls: ['./destaque-cliente.component.css']
})
export class DestaqueClienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cliente1 = new Opiniao("Pedro","Bons preços.")
  cliente2 = new Opiniao("Maria","Entrega rápida.")
  cliente3 = new Opiniao("João","Recomendo.")
  cliente4 = new Opiniao("Ana paula","Ótimo atendimento.")

}
