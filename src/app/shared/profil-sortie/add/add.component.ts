import { Router } from '@angular/router';
import { AlertService } from './../../../_helper/alert.service';
import { ProfilSortieService } from './../profil-sortie.service';
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
  form: FormGroup;
  // params lists apprenants
  profil = 'APPRENANT';
  nbrApp: number;
  page = 1;


  constructor(
    private route: Router,
    private alert: AlertService,
    private psService: ProfilSortieService,
    private formBuilder: FormBuilder,
    private userService: UserService) {
    this.userService.getApprentLessPs().subscribe(
      users => {
        this.listApprenant = users['hydra:member'];
       // console.log(this.listApprenant);
      }
      );
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      libelle: ['', Validators.required],
      apprenants: [[]]
    });
  }

  onValidate(event): void{
    const appt = 'apprenants';
    this.form.controls[appt].setValue(event);
    console.log(this.form.value);
    this.psService.addProfilSortie(this.form.value).subscribe(
      (reponse) => {
        this.alert.getSimpleAlert('success', 'Profil Sortie ajouté avec success');
        this.route.navigate(['/admin/profilsortie']);
      },
      () => {
        this.alert.getSimpleAlert('warning', 'Erreur lors de l\'ajout');
      }
    );
  }
}
