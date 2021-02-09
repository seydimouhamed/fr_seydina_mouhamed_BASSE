import { User } from './../../../models/User';
import { UserService } from './../../user/user.service';
import { Component, OnChanges, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  listApprenant: User[];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  // params lists apprenants
  profil = 'APPRENANT';
  nbrApp: number;
  page = 1;


  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.userService.getUsers(this.page, 10, this.profil).subscribe(
      users => {
        this.listApprenant = users['hydra:member'];
       // console.log(this.listApprenant);
      }
      );
  }

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }
}
