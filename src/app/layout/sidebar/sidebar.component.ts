import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, PanelMenuModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  model: MenuItem[] = [
    {
      label: 'Workflows',
      items: [
        { label: 'Dashboard', icon: 'pi pi-home' },
        { label: 'Reports', icon: 'pi pi-chart-line' }
      ]
    },
    {
      label: 'Προϊόντα',
      items: [
        { label: 'POS', icon: 'pi pi-credit-card' },
        { label: 'Κάρτες', icon: 'pi pi-id-card' },
        { label: 'Καταναλωτικό', icon: 'pi pi-shopping-bag' },
        { label: 'Στεγαστικό', icon: 'pi pi-building' },
        { label: 'Επιχειρηματικό', icon: 'pi pi-briefcase' }
      ]
    }
  ];
}
