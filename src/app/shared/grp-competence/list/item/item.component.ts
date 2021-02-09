import { EventEmitter } from '@angular/core';
import  Swal  from 'sweetalert2';
import { GrpCompetenceService } from './../../grp-competence.service';
import { MatAccordion } from '@angular/material/expansion';
import { Component, OnInit, Input, ViewChild, Output } from '@angular/core';
import { GrpCompetence } from 'src/app/models/GrpCompetence';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {


  @ViewChild(MatAccordion) acordeonTag: MatAccordion;
  @ViewChild(MatAccordion) acordeonCompetence: MatAccordion;
@Input() grpeCompetence: GrpCompetence;
@Output() deleteI = new EventEmitter();
  constructor(private grpCompetenceService: GrpCompetenceService) { }

  ngOnInit(): void {
  }
   deleteItem(): void {
     this.deleteI.emit(this.grpeCompetence.id as unknown as string);
   }
}
