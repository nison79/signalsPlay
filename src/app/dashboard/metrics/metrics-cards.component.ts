import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-metrics-cards',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './metrics-cards.component.html',
  styleUrls: ['./metrics-cards.component.css']
})
export class MetricsCardsComponent {
  // example inputs for metrics
}
