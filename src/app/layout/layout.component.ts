import { Component } from '@angular/core';
import { LibLayoutComponent, NgAlertComponent } from '../../../projects/libs/src/public-api';
import { NAVITEMS } from '../app.nav';

@Component({
  selector: 'app-layout',
  imports: [LibLayoutComponent,NgAlertComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  navItes = NAVITEMS;
}
