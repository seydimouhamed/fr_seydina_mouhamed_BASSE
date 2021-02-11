import Swal from 'sweetalert2';
import { GrpCompetenceService } from './../grp-competence.service';
import { GrpCompetence } from './../../../models/GrpCompetence';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  grpCompetences: GrpCompetence [];
  constructor(
    private grpCompetenceService: GrpCompetenceService) { }

  ngOnInit(): void {
      this.getAllGroupecompetence();
  }

 private getAllGroupecompetence(): void
  {
    this.grpCompetenceService.getAll().subscribe(
      grpCompetences => {
        this.grpCompetences = grpCompetences['hydra:member'];
        // console.log(this.grpCompetences);
      }
    );
  }


  delete(id): void {

    Swal.fire({
      title: 'Vous etes sur de vouloir supprimer',
      text: '(le groupe de competence sera archiver)',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmer',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.value) {
        this.grpCompetenceService.delete(+id).
            subscribe(
              () => {
               this.grpCompetences.splice(+id, 1);
               Swal.fire (
                'Supprimé avec succes',
                '',
                'success'
               );
              }
            );
      }
    });
  }
}
