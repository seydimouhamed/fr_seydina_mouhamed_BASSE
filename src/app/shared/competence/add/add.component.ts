import { Router } from '@angular/router';
import { Competence } from 'src/app/models/Competence';
import { CompetenceService } from './../competence.service';
import { User } from './../../../models/User';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';

import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  form: FormGroup;
  niv1: FormGroup;
  niv2: FormGroup;
  niv3: FormGroup;
  submitted = false;
  busy = false;
  @Input() competence: Competence;

  constructor(
    private formBuilder: FormBuilder,
    private competenceService: CompetenceService,
    private route: Router) {

  }

  ngOnInit(): void {
    this.getRegisterForm();

    if (this.competence){
      this.setUpdateCompetence();
    }

  }

  setUpdateCompetence(): void
  {
    this.form.patchValue({
    libelle: this.competence.libelle,
    descriptif: this.competence.descriptif,
  });
  }
  niveaux(): FormArray{
    return this.form.get('niveaux') as FormArray;
  }
  getRegisterForm(): void {

    this.form = this.formBuilder.group({
      libelle: ['', Validators.required],
      descriptif: ['', Validators.required],
      niveaux: this.formBuilder.array([])
    });
    this.addNiveau();
  }

  getNiveau(i: number): FormGroup {
    let ce = '';
    let ga = '';
    if (this.competence){
      ce = this.competence.niveaux[i - 1]['critereEvaluation'];
      ga = this.competence.niveaux[i - 1]['groupeAction'];

    }
    return this.formBuilder.group({
      critereEvaluation: [ce, Validators.required],
      groupeAction: [ga, Validators.required],
      numero: [i]
    });
  }

  addNiveau(): void
  {
    const NIVEAUX = 'niveaux';
    const control = this.form.controls[NIVEAUX] as FormArray;
    [1, 2, 3].forEach( i => {
      control.push(this.getNiveau(i));
    });
  }
  public get f(): any{
    return this.form.controls;
  }


  onSubmit(): void
  {
    console.log(this.form.value);
    if (!this.competence){
      this.competenceService.addCompetence(this.form.value as Competence).
          subscribe( (competence: Competence) => {
            this.route.navigate(['/admin/competence/list']);
          },
            error => { console.log(error);
            }
          );
    }
    else {
      this.competenceService.updateCompetence(this.competence.id, this.form.value as Competence).
          subscribe( (competence: Competence) => {
            this.route.navigate(['/admin/competence/list']);
          },
            error => { console.log(error); }
          );
    }

  }

}
