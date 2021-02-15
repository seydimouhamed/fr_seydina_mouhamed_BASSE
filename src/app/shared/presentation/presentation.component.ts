import { FormControl } from '@angular/forms';
import { Promo } from 'src/app/models/Promo';
import { AdminPromoService } from 'src/app/features//admin/admin-promo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {
  sumPromos: Promo[];
  promoCtl = new FormControl('');
  constructor(private promoService: AdminPromoService) { }

  ngOnInit(): void {
    console.log(this.promoService.getSumPromos().subscribe(
      promo => this.sumPromos = promo['hydra:member']
    ));
  }

  loadPromo(): void{
      console.log(this.sumPromos);
  }

}
