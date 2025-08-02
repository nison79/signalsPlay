import { Component, signal } from '@angular/core';
import { HelloGeorgeComponent } from './hello-george/hello-george.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HelloGeorgeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('signalsPlay');
}
