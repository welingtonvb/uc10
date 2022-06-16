import { Component, OnInit } from '@angular/core';
import { Console } from 'src/app/models/console';
import { ConsoleService } from 'src/app/services/console.service';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {

  constructor(
    private consoleService: ConsoleService
    ) { }

  listaConsole = [] as Console[]

  ngOnInit(): void {
    this.carregarConsoles()
  }

  carregarConsoles(){
    this.consoleService.getConsoles().subscribe((consoles: Console[]) => {
      this.listaConsole = consoles;
    })
  }  
}
