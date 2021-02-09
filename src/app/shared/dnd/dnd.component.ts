import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dnd',
  templateUrl: './dnd.component.html',
  styleUrls: ['./dnd.component.scss']
})
export class DndComponent  {

  files: any = [];

  @Output() fileDropped = new EventEmitter<any>();

  uploadFile(event): void {
    for (const element of event) {
     // for (let index = 0; index < event.length; index++) {
    // const element = event[index];
       const file = event[0];

       this.fileDropped.emit(file);
      //  this.registerForm.patchValue({avatar: file });
      //  this.registerForm.get('avatar').updateValueAndValidity();
      this.files.push(element.name);
    }
  }
  deleteAttachment(index): void {
    this.files.splice(index, 1);
  }

}
