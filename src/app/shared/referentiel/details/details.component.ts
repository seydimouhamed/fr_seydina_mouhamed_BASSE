import { ActivatedRoute, Data } from '@angular/router';
import { Referentiel } from './../../../models/Referentiel';
import { Component, OnInit } from '@angular/core';

const REFERENTIEL = 'referentiel';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
referentiel: Referentiel;
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.data.subscribe( (data: Data) => {
      console.log(data);
      this.referentiel = data[REFERENTIEL];
    });
  }

}
