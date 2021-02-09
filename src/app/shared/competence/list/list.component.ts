import { Competence } from './../../../models/Competence';
import { CompetenceService } from './../competence.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
competences: Competence[];
currentCompetence: Competence;
nbrItem: number;
pageIndex = 1;
nbrItemPage = 2;
  constructor(private competenceService: CompetenceService) { }

  ngOnInit(): void {
    this.getAll();
  }

  selectCompetence(competence: Competence): void {
    this.currentCompetence = competence;
  }

  pager(event): void
  {
    this.nbrItemPage = event.pageSize;
    this.pageIndex = event.pageIndex + 1;
   // alert(event);
    this.getAll();
  }
 getAll(): void
 {
  this.competenceService.getAll(this.pageIndex, this.nbrItemPage).subscribe(
    competences => {
      this.competences = competences['hydra:member'];
      this.nbrItem = competences['hydra:totalItems'];
      this.currentCompetence = this.competences[0];
    }
  );
 }

  changeThing(event): void{
  }
}
