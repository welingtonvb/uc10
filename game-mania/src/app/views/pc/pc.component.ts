import { Component, OnInit } from '@angular/core';
import { Pc } from 'src/app/models/pc';
import { PcService } from 'src/app/services/pc.service';

@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.css']
})
export class PcComponent implements OnInit {

  constructor(
    private pcService: PcService
    ) { }

  listaPc = [] as Pc[]

  ngOnInit(): void {
    this.carregarPcs()
  }

  carregarPcs(){
    this.pcService.getPcs().subscribe((pcs: Pc[]) => {
      this.listaPc = pcs;
    })
  }  
}