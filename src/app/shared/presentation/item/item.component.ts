import { PromoService } from './../../promo/promo.service';
import { Promo } from 'src/app/models/Promo';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
@Input() promo: Promo;
  constructor() { }

  ngOnInit() {
  }

}
