import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonImg, IonInput, IonButton, IonText, IonItem, IonLabel } from '@ionic/angular/standalone';
import { Circulo } from '../../models/figuras';

@Component({
  selector: 'app-circulo',
  standalone: true,
  imports: [CommonModule, FormsModule, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonImg, IonInput, IonButton, IonText, IonItem, IonLabel],
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss']
})
export class CirculoComponent {
  radio: number = 0;
  perimetro: number = 0;
  resultadoMostrado: boolean = false;

  calcularPerimetro() {
    const circulo = new Circulo(this.radio);
    this.perimetro = circulo.calcularPerimetro();
    this.resultadoMostrado = true;
  }
}
