import { Component, inject } from '@angular/core';
import { PruebaService } from '../services/prueba.service';
import { PruebaModel } from '../services/prueba.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css'],
})
export class PruebaComponent {
  prueba = inject(PruebaService);
  signal: PruebaModel = this.prueba.signal;

  constructor() {
    console.log(this.signal);
  }
}
