// // modal-form.component.ts
// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-modal-form',
//   template: `
//     <div class="overlay" *ngIf="isOpen"></div>
//     <div class="modal" *ngIf="isOpen">
//       <h2>Modal Form</h2>
//       <label for="modalField">Field from Main Form:</label>
//       <input type="text" id="modalField" name="modalField" [value]="fieldValue" readonly>
//       <br>
//       <button type="button" (click)="closeModal()">Close</button>
//     </div>
//   `,
//   styles: [`
//     .overlay {
//       position: fixed;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 100%;
//       background-color: rgba(0, 0, 0, 0.5);
//     }

//     .modal {
//       position: fixed;
//       top: 50%;
//       left: 50%;
//       transform: translate(-50%, -50%);
//       background-color: white;
//       padding: 20px;
//     }
//   `]
// })
// export class ModalFormComponent {
//   @Input() isOpen = false;
//   @Input() fieldValue = '';

//   closeModal() {
//     this.isOpen = false;
//     this.fieldValue = '';
//   }
// }
