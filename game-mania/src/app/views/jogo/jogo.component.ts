import { Component, OnInit } from '@angular/core';
import { Jogo } from 'src/app/models/jogo';
import { JogoService } from 'src/app/services/jogo.service';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {

  constructor(
    private jogoService: JogoService
    ) { }

  listaJogo = [] as Jogo[]

  ngOnInit(): void {
    this.carregarJogos()
  }

  carregarJogos(){
    this.jogoService.getJogos().subscribe((jogos: Jogo[]) => {
      this.listaJogo = jogos;
    })
  }  
}
