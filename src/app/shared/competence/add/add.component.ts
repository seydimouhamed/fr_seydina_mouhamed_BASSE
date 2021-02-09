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
  @Input() userdata: User;

  constructor(
    private formBuilder: FormBuilder,
    private competenceService: CompetenceService) {

  }

  ngOnInit(): void {
    this.getRegisterForm();
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

    return this.formBuilder.group({
      critereEvaluation: ['', Validators.required],
      groupeAction: ['', Validators.required],
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
  // public get n1(): any {
  //   return this.niv1.controls;
  // }
  // public get n2(): any {
  //   return this.niv1.controls;
  // }
  // public get n3(): any {
  //   return this.niv3.controls;
  // }


  onSubmit(): void
  {
    console.log(this.form.value);
    this.competenceService.addCompetence(this.form.value as Competence).
        subscribe( (competence: Competence) => {
          alert('ajouté avec succès');
        },
          error => { console.log(error); }
        );

  }

}
