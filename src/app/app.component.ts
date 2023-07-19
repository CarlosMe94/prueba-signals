import { Component, inject, signal } from '@angular/core';
import { PruebaService } from './services/prueba.service';
import { PruebaModel } from './services/prueba.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'prueba-signals';

  prueba = inject(PruebaService);
  signal: PruebaModel = this.prueba.signal;
  router = inject(Router);

  constructor() {
    console.log(this.signal);
  }

  change(value: string) {
    this.signal.action = value;
    console.log(this.prueba.signal);
  }

  navigate() {
    this.router.navigate(['prueba']);
  }
}
