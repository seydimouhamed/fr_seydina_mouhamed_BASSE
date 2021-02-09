import { User } from 'src/app/models/User';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dndapprenant',
  templateUrl: './dndapprenant.component.html',
  styleUrls: ['./dndapprenant.component.scss']
})
export class DndapprenantComponent implements OnInit, OnChanges {

  apprenantAjoutes: User[];
  apprenantLists: User[];

  @Input() apprenant$;
  items = [
  ];

  basket = [
    'Oranges',
    'Bananas',
    'Cucumbers',
    'Carrots',
    'Tomatoes',
    'Onions',
    'Apples',
    'Avocados'
  ];

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
  ngOnChanges(): void {
    if (this.apprenant$ !== undefined){
      this.apprenantLists = this.apprenant$;
      this.apprenantAjoutes = [];
      // console.log(this.apprenant$);
      // this.apprenant$.forEach( apprenants => {
      //     this.apprenantLists.push(apprenants);
      // });
    }
  }
}
