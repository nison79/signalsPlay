import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { PanelModule } from 'primeng/panel';
import { RippleModule } from 'primeng/ripple';
import { ProgressBarModule } from 'primeng/progressbar';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { HeaderComponent } from '../layout/header/header.component';
import { MetricsCardsComponent } from './metrics/metrics-cards.component';

interface Item {
  id: number;
  name: string;
  status: 'Active' | 'Pending' | 'Inactive';
  owner: string;
  category: string;
  createdAt: string;
  progress: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    CardModule,
    ToolbarModule,
    ButtonModule,
    TagModule,
    InputTextModule,
    SelectModule,
    PanelModule,
    RippleModule,
    ProgressBarModule,
    CheckboxModule,
    SidebarComponent,
    HeaderComponent,
    MetricsCardsComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  items: Item[] = [
    {
      id: 1001,
      name: 'Alpha',
      status: 'Active',
      owner: 'Alex',
      category: 'A',
      createdAt: '2025-08-01',
      progress: 78,
    },
    {
      id: 1002,
      name: 'Beta',
      status: 'Pending',
      owner: 'Bella',
      category: 'B',
      createdAt: '2025-07-21',
      progress: 32,
    },
    {
      id: 1003,
      name: 'Gamma',
      status: 'Inactive',
      owner: 'Chris',
      category: 'A',
      createdAt: '2025-07-10',
      progress: 0,
    },
    {
      id: 1004,
      name: 'Delta',
      status: 'Active',
      owner: 'Dana',
      category: 'C',
      createdAt: '2025-06-28',
      progress: 55,
    },
    {
      id: 1005,
      name: 'Epsilon',
      status: 'Pending',
      owner: 'Evan',
      category: 'B',
      createdAt: '2025-06-16',
      progress: 20,
    },
  ];

  categories = ['A', 'B', 'C'];
  categoryOptions = this.categories.map((c) => ({ label: c, value: c }));

  onlyActive = false;
  selectedCategory: string | null = null;
  globalFilter = '';

  get filteredItems(): Item[] {
    return this.items.filter((i) => {
      const matchesActive = !this.onlyActive || i.status === 'Active';
      const matchesCat =
        !this.selectedCategory || i.category === this.selectedCategory;
      const q = this.globalFilter.toLowerCase();
      const matchesText =
        !q || Object.values(i).join(' ').toLowerCase().includes(q);
      return matchesActive && matchesCat && matchesText;
    });
  }

  getStatusSeverity(status: Item['status']) {
    return status === 'Active'
      ? 'success'
      : status === 'Pending'
      ? 'warning'
      : 'danger';
  }
}
