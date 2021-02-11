import Swal from 'sweetalert2';
import { ActivatedRoute, Data } from '@angular/router';
import { ReferentielService } from './../referentiel.service';
import { Referentiel } from '@/app/models/Referentiel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  referentiels: Referentiel[];

  constructor(
    private referentielService: ReferentielService,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.data.subscribe(
       (data: Data ) => {
         const REFERENTIELS = 'referentiels';

         const ref = data[REFERENTIELS];
         this.referentiels = ref['hydra:member'];
       });
  }

  delete(ref: Referentiel): void
  {
    Swal.fire({
      title: 'Vous etes sur de vouloir supprimer',
      text: '(le groupe de competence sera archiver)',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmer',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.value) {
        this.referentielService.delete(ref.id).
            subscribe(
              () => {
                this.removeItemFormList(ref);
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

  removeItemFormList(referentiel: Referentiel): void{
    const index = this.referentiels.indexOf(referentiel);
    if (index >= 0){
      this.referentiels.splice(+index, 1);
    }
  }
}
