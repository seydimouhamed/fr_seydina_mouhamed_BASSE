import { Promo } from 'src/app/models/Promo';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit, OnChanges {
@Input() promo!: Promo;
nbrApprenant: number;
urlavatar = '../assets/img/logo-SA3.png';
  constructor() { }

  ngOnInit(): void {


  }
  ngOnChanges(changes): void{
    if(changes.promo)
    {

      this.nbrApprenant = (this.promo['groupes'][0]['apprenants']).length;
      if (this.promo.avatar)
      {
          this.urlavatar = 'data:image/jpeg;base64,' + this.promo.avatar;
      }
    }
  }

}
