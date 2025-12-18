import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonImg, IonInput, IonButton, IonText, IonItem, IonLabel } from '@ionic/angular/standalone';
import { TrianguloEscaleno } from '../../models/figuras';

@Component({
  selector: 'app-triangulo',
  standalone: true,
  imports: [CommonModule, FormsModule, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonImg, IonInput, IonButton, IonText, IonItem, IonLabel],
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss']
})
export class TrianguloComponent {
  ladoA: number = 0;
  ladoB: number = 0;
  ladoC: number = 0;
  perimetro: number = 0;
  resultadoMostrado: boolean = false;

  calcularPerimetro() {
    const triangulo = new TrianguloEscaleno(this.ladoA, this.ladoB, this.ladoC);
    this.perimetro = triangulo.calcularPerimetro();
    this.resultadoMostrado = true;
  }
}
