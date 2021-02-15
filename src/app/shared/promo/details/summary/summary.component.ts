import { Promo } from 'src/app/models/Promo';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit, OnChanges {
@Input() promo: Promo;
nbrApprenant: number;
  constructor() { }

  ngOnInit(): void {

  }
  ngOnChanges(changes): void{
    if(changes.promo)
    {
      this.nbrApprenant = (this.promo['promoprinc']['hydra:member'][0]['groupes'][0]['apprenants']).length;
      alert(this.nbrApprenant);
    }
  }

}
