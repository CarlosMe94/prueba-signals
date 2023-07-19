import { Injectable, signal, Signal } from '@angular/core';
import { PruebaModel } from './prueba.model';

@Injectable({
  providedIn: 'root',
})
export class PruebaService {
  private state = signal<PruebaModel>({
    action: 'list',
    prueba: '333',
  });
  constructor() {}

  updateSignal(data: PruebaModel) {
    this.state = signal(data);
  }

  get signal(): PruebaModel {
    return this.state();
  }
}
