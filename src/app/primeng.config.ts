// Import PrimeNG modules
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';

// Import and configure PrimeNG components
@NgModule({
  imports: [
    ButtonModule,
    InputTextModule,
    CardModule,
    CheckboxModule,
    RadioButtonModule,
    RippleModule,
    ToastModule,
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    CardModule,
    CheckboxModule,
    RadioButtonModule,
    RippleModule,
    ToastModule,
  ],
})
export class PrimeNGModule {}
