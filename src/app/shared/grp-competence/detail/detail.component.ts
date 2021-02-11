import { GrpCompetence } from '@/app/models/GrpCompetence';
import { ActivatedRoute, Data } from '@angular/router';
import { Component, OnInit } from '@angular/core';

const GRPCOMP = 'grpCompetence';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
 grpCompetence: GrpCompetence;
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.data.subscribe(
      (grpComp: Data) =>
      {
        this.grpCompetence = grpComp[GRPCOMP];
      }
    );
  }

}
