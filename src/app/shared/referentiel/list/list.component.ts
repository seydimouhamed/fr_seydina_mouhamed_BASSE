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

}
