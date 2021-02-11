import Swal from 'sweetalert2';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor() { }
  getSimpleAlert(type, message: string): void
  {
    Swal.fire (
    message,
    '',
    type
   );
  }
}
