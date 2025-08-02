import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvantageCardComponent } from '../../components/commom/advantage-card/advantage-card.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AdvantageCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  vantagens = [
    {
      iconSrc: 'assets/icon-gift.svg',
      title: 'Conta e cartão gratuitos',
      description: 'Isso mesmo, nossa conta é digital, sem custo fixo e você não tem tarifa de manutenção.',
    },
    {
      iconSrc: 'assets/icon-money.svg',
      title: 'Saques sem custo',
      description: 'Você pode sacar gratuitamente 4x por mês de qualquer banco 24h.',
    },
    {
      iconSrc: 'assets/icon-star.svg',
      title: 'Programa de pontos',
      description: 'Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!',
    },
    {
      iconSrc: 'assets/icon-shield.svg',
      title: 'Seguro Dispositivos',
      description: 'Seus dispositivos móveis (computadores, celulares) protegidos por uma mensalidade simbólica.',
    },
  ];
}