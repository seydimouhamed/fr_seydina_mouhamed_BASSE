import { ActivatedRoute, Data } from '@angular/router';
import { User } from './../../../models/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  userdata: User;
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.data.subscribe(
       (data: Data ) => {
         const USER = 'user';
         this.userdata = data[USER];
       });
  }

}
