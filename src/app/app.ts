import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloGeorgeComponent } from './hello-george/hello-george.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloGeorgeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('signalsPlay');
}
