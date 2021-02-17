import { User } from 'src/app/models/User';
import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dndapprenant',
  templateUrl: './dndapprenant.component.html',
  styleUrls: ['./dndapprenant.component.scss']
})
export class DndapprenantComponent implements OnInit, OnChanges {

  apprenantAjoutes: User[];
  apprenantLists: User[];
  tab: string[];
  @Input() apprenant$;
  @Output() emitApprenants = new EventEmitter();

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  ngOnInit(): void {

  }
  ngOnChanges(changes): void {
    if (changes.apprenant$){
      this.apprenantLists = this.apprenant$;
      this.apprenantAjoutes = [];
      // console.log(this.apprenant$);
      // this.apprenant$.forEach( apprenants => {
      //     this.apprenantLists.push(apprenants);
      // });
    }
  }

  validAdd(): void
  {
    // console.log(this.getIriApprenant());
    this.emitApprenants.emit(this.getIriApprenant());
  }

  getIriApprenant(): string[]
  { this.tab = [];
    this.apprenantAjoutes.forEach(app => {
      this.tab.push('/api/apprenants/' + app.id);
    });
    return this.tab;
  }
}
