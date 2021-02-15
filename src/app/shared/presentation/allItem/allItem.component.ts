import { AdminPromoService } from 'src/app/features/admin/admin-promo.service';
import { FormControl } from '@angular/forms';
import { Promo } from 'src/app//models/Promo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allItem',
  templateUrl: './allItem.component.html',
  styleUrls: ['./allItem.component.scss']
})
export class AllItemComponent implements OnInit {

  sumPromos: Promo[];
  promoCtl = new FormControl('');
  constructor(private promoService: AdminPromoService) { }

  ngOnInit(): void {
    console.log(this.promoService.getSumPromos().subscribe(
      promo => this.sumPromos = promo['hydra:member']
    ));
  }


}
