import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Promo } from '@/app/models/Promo';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() promo: Promo;
  urlavatar = '../assets/img/logo-SA3.png';
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  detailsPromo(): void {
    this.route.navigate(['/admin/promo/details', +this.promo.id]);
  }
}
