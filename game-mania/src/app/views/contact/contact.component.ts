import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Opiniao } from 'src/app/models/opiniao';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  opiniaoModel = new Opiniao("","")

  onSubmit() {
    console.log(this.opiniaoModel)
  }
}
