import { ActivatedRoute, Data } from '@angular/router';
import { Competence } from './../../../models/Competence';
import { User } from './../../../models/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  competence: Competence;
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.data.subscribe(
       (data: Data ) => {
         const COMPETENCE = 'competence';

         const ref = data[COMPETENCE];
         this.competence = ref as Competence;
         console.log(this.competence);
       });
  }

}
