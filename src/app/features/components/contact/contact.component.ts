import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DomSanitizer } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [
    CommonModule,
    RouterModule,
    MatInputModule, // Material Input Fields
    MatButtonModule, // Material Buttons
    MatIconModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.registerIcons();
  }
  private registerIcons() {
    this.iconRegistry.addSvgIcon(
      'instagram',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/instagram.svg'
      )
    );
    // this.iconRegistry.addSvgIcon(
    //   'linkedin',
    //   this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg')
    // );
    // this.iconRegistry.addSvgIcon(
    //   'twitter',
    //   this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/twitter.svg')
    // );
    // this.iconRegistry.addSvgIcon(
    //   'facebook',
    //   this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/facebook.svg')
    // );
  }
}
