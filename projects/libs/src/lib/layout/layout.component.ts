import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { INav } from '../models/inav';

@Component({
  selector: 'lib-layout',
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LibLayoutComponent {
  currentYear: number = new Date().getFullYear();
  isExpanded = true; // Default state is collapsed
  isHovered = false; // Tracks hover state
  isRotated = false;
  isLogin = false;
  @Input() navItems: INav[] = [];
  toggleSidenav() {
    this.isExpanded = !this.isExpanded;
    this.isRotated = !this.isRotated;
  }
  onHoverStart(): void {
    if (!this.isExpanded) {
      this.isHovered = true;
    }
  }
  toggleSubMenu(item: INav) {
   // this.closeAllMenus(this.navItems);
    if (item.expanded) {
      this.closeAllChildren(item);
    }
    item.expanded = !item.expanded;
  }
  onHoverEnd(): void {
    if (!this.isExpanded) {
      this.isHovered = false;
    }
  }
  private closeAllChildren(item: INav) {
    if (item.children) {
      item.children.forEach((child) => {
        child.expanded = false;
        this.closeAllChildren(child); // Recursive call for deep nesting
      });
    }
  }
  private closeAllMenus(items: INav[]) {
    items.forEach((navItem) => {
      if (navItem ) {
        navItem.expanded = false;
      }
      if (navItem.children) {
        this.closeAllMenus(navItem.children);
      }
    });
  }
}
