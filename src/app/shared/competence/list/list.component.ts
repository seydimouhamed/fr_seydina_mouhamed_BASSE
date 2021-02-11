import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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
nbrItemPage = 4;
  constructor(
    private competenceService: CompetenceService,
    private router: Router) { }

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
  detailUser(id): void{
    // const cp = this.currentCompetence;
    // this.router.navigate(['admin/competence/details', cp.id],  {queryParams: { competence : cp}} );

    this.router.navigate(['admin/competence/details', id]);
  }

  delete(id): void {

    Swal.fire({
      title: 'Vous etes sur de vouloir supprimer',
      text: '(cette competence sera archiver)',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmer',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.value) {
        this.competenceService.delete(+id).
            subscribe(
              () => {
               this.competences.splice(+id, 1);
               this.currentCompetence = null;
               Swal.fire (
                'Supprimé avec succes',
                'la compétence a été supprimer',
                'success'
               );
              }
            );
      }
    });
  }
}
