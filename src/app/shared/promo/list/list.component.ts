import { AdminPromoService } from './../../../features/admin/admin-promo.service';
import { FormControl } from '@angular/forms';
import { Promo } from './../../../models/Promo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
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
