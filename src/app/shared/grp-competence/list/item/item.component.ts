import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
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
  constructor(
    private grpCompetenceService: GrpCompetenceService,
    private router: Router) { }

  ngOnInit(): void {
  }
   deleteItem(): void {
     this.deleteI.emit(this.grpeCompetence.id as unknown as string);
   }


  detailUser(id): void{
    this.router.navigate(['/admin/grpCompetence/details', +id]);
  }
}
