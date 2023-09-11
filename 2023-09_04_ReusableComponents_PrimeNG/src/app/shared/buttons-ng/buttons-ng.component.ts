import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-buttons-ng',
  templateUrl: './buttons-ng.component.html',
  styleUrls: ['./buttons-ng.component.css'],
  providers: [MessageService],
})
export class ButtonsNGComponent {
  buttonVisibility: string = 'Show/Hide Button';

  items: MenuItem[];

  constructor(private messageService: MessageService) {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
          this.update();
        },
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
        command: () => {
          this.delete();
        },
      },
      { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' },
      { separator: true },
      { label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup'] },
    ];
  }

  save(severity: string) {
    this.messageService.add({
      severity: severity,
      summary: 'Success',
      detail: 'Data Saved',
    });
  }

  update() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Data Updated',
    });
  }

  delete() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Data Deleted',
    });
  }

  show() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Hello, this is Toast Message',
    });
    // alert('Hello, this is Toast Message');
  }
}
