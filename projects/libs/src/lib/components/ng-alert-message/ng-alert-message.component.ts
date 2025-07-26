import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageButton } from '../../models/alert';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'ng-alert-message',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './ng-alert-message.component.html',
  styleUrl: './ng-alert-message.component.scss',
})
export class NgAlertMessageComponent implements OnInit {
  @Input() alertType!: string;
  @Input() buttons!: MessageButton[];
  @Input() id!: number;
  @Input() messageText!: string;
  @Input() hideCloseButton!: boolean;
  @Output() clearAlert: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
    // this.alertType = this.alertType || 'info';
  }
  onCloseAlert(id: number): void {
    this.clearAlert.emit(id);
  }
  trackByFn(index: number, item: any): any {
    return item ? item.id || index : index;
  }
}
