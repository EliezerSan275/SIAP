import { Injectable } from '@angular/core';
import { BotonOnlyText } from './shared-data.model';
import { BotonWithIcon } from './shared-data.model';
import { ModelFirmas } from './shared-data.model';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  // Codigo para enviar informacion a los botones desde cualquier component
  private botones: BotonOnlyText[] = [];
  private botonwIcon: BotonWithIcon[] = [];
  private modelFirmas: ModelFirmas[] = [];

  setBotones(botones: BotonOnlyText[]) {
    this.botones = botones;
  }

  getBotones() {
    return this.botones;
  }

  setBotonesWithIcon(botonwIcon: BotonWithIcon[]) {
    this.botonwIcon = botonwIcon;
  }

  getBotonesWithIcon() {
    return this.botonwIcon;
  }

  setModelFirma(modelFirmas: ModelFirmas[]) {
    this.modelFirmas = modelFirmas;
  }

  getModelFirma() {
    return this.modelFirmas;
  }

  constructor() {}
}
