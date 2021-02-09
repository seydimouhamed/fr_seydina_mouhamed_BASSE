import { GrpCompetenceService } from './../../grp-competence/grp-competence.service';
import { ReferentielService } from './../referentiel.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';

import {map, startWith} from 'rxjs/operators';
import { GrpCompetence } from '@/app/models/GrpCompetence';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
form: FormGroup;
submitted = false;
busy = false;


  // chips grpCompétences
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  // for group competences
  grpCompetenceCtrl = new FormControl();
  filteredGrpCompetences: Observable<GrpCompetence[]>;
  grpCompetences: GrpCompetence[] = [];
  allGrpCompetences: GrpCompetence[] = [];

 // chips

  @ViewChild('grpCompetenceInput') grpCompetenceInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  // critereAdmission
  critereadmissionCtrl = new FormControl();
  filteredCritereadmissions: Observable<string[]>;
  critereadmissions: string[] = [];
  allCritereadmissions: string[] = [];
  @ViewChild('critereadmissionInput') critereadmissionInput: ElementRef<HTMLInputElement>;

  // critereEvaluation
  critereevaluationCtrl = new FormControl();
  filteredCritereevaluations: Observable<string[]>;
  critereevaluations: string[] = [];
  allCritereevaluations: string[] = [];
  @ViewChild('critereevaluationInput') critereevaluationInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private refService: ReferentielService,
    private grpCompetenceService: GrpCompetenceService
    ) {

    this.filteredGrpCompetences = this.grpCompetenceCtrl.valueChanges.pipe(
      startWith(null),
      map((libelle: string | null) =>
      {
        const result = libelle ? this._filter(libelle) : this.allGrpCompetences.slice();
        return result;
      })
      );

    this.filteredCritereadmissions = this.critereadmissionCtrl.valueChanges.pipe(
      startWith(null),
      map((criteradmission: string | null) => criteradmission ? this._filterCA(criteradmission) : this.allCritereadmissions.slice())
      );

    this.filteredCritereevaluations = this.critereevaluationCtrl.valueChanges.pipe(
      startWith(null),
      map((criterevaluation: string | null) => criterevaluation ? this._filterCE(criterevaluation) : this.allCritereevaluations.slice())
      );
  }

  ngOnInit(): void {
    this.grpCompetenceService.getAll().subscribe(
      grpCompetences => {
        this.allGrpCompetences = grpCompetences['hydra:member'];
      }
    );
    this.getRegisterForm();
  }

  onFileSelect(event): void
  {
    this.form.patchValue({programme: event });
    this.form.get('programme').updateValueAndValidity();
  }
  getRegisterForm(): void {
   this.form = this.formBuilder.group({
     libelle: ['', Validators.required],
     presentation: ['', Validators.required],
     programme: '',
     critereAdmission: [''],
     critereEvaluation: [''],
     grpCompetences: ['']
   });

  }


  public get f(): any{
    return this.form.controls;
}

getIRIGrpCompetence(): any
{
  const result = [];
  Object.values(this.grpCompetences).forEach(
    gc => {
      result.push(`/api/admin/grpecompetences/${gc.id}`);
    }
  );
  return result;
}

  onSubmit(): void
  {
    this.submitted = true;
    const formData = new FormData();
    this.form.value.critereEvaluation = JSON.stringify(this.critereevaluations);
    this.form.value.critereAdmission = JSON.stringify(this.critereadmissions);
    this.form.value.grpCompetences = JSON.stringify(this.getIRIGrpCompetence());

    if (!this.validator){
      return;
    }
    Object.entries(this.form.value).forEach(
      att => {
        console.log(att[1]);
        formData.append( att[0], att[1] as string);
      }
      );
    formData.append('critereEvaluation', this.form.value.critereEvaluation);
    formData.append('critereAdmission', this.form.value.critereEvaluation);
    formData.append('programme', this.form.value.programme);

    this.refService.addReferentiel(formData).
        subscribe( response => {
            console.log(response);
            alert('ok');
        },
        error => alert('Erreur lors de linsertion')
        );

  }


  // chip group competences DEBUT
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const gc = event.value as GrpCompetence;

    // Add our fruit
    if ((gc.libelle || '').trim()) {
      this.grpCompetences.push(gc);
      this.allGrpCompetences.splice(this.allGrpCompetences.indexOf(gc), 1);
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.grpCompetenceCtrl.setValue(null);
  }

  remove(grpCompetence: GrpCompetence): void {
    const index = this.grpCompetences.indexOf(grpCompetence);

    if (index >= 0) {
      this.grpCompetences.splice(index, 1);
      this.allGrpCompetences.push(grpCompetence);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const grpCompetenceSelect = event.option.value as GrpCompetence;

    if (this.grpCompetences.indexOf(grpCompetenceSelect)  >= 0)
    {
        return ;
    }
    this.grpCompetences.push(grpCompetenceSelect);
    this.allGrpCompetences.splice(this.allGrpCompetences.indexOf(grpCompetenceSelect), 1);
    this.grpCompetenceInput.nativeElement.value = '';
    this.grpCompetenceCtrl.setValue(null);
  }

  private _filter(value: string): GrpCompetence[] {
    const filterValue = value.toLowerCase();

    return this.allGrpCompetences.filter(grpCompetence => (grpCompetence.libelle as string).toLowerCase().indexOf(filterValue) === 0);
    // return this.allCompetences.filter(competence => competence.libelle.toLowerCase().indexOf(filterValue) === 0);
  }
  selectGrpCompetence(grpCompetence: GrpCompetence): void {
    this.grpCompetences.push(grpCompetence);
    this.allGrpCompetences.splice(this.allGrpCompetences.indexOf(grpCompetence), 1);
  }
  // chip groupe de competence FIN



  // chip critere admission DEBUT
  addCA(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.critereadmissions.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.critereadmissionCtrl.setValue(null);
  }

  removeCA(ca: string): void {
    const index = this.critereadmissions.indexOf(ca);

    if (index >= 0) {
      this.critereadmissions.splice(index, 1);
    }
  }

  selectedCA(event: MatAutocompleteSelectedEvent): void {
    this.critereadmissions.push(event.option.viewValue);
    this.critereadmissionInput.nativeElement.value = '';
    this.critereadmissionCtrl.setValue(null);
  }

  private _filterCA(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allCritereadmissions.filter(critereadmission => critereadmission.toLowerCase().indexOf(filterValue) === 0);
  }
  // chip critere admission FIN



  // chip critere admission DEBUT
  addCE(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.critereevaluations.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.critereevaluationCtrl.setValue(null);
  }

  removeCE(competence: string): void {
    const index = this.critereevaluations.indexOf(competence);

    if (index >= 0) {
      this.critereevaluations.splice(index, 1);
    }
  }

  selectedCE(event: MatAutocompleteSelectedEvent): void {
    this.critereevaluations.push(event.option.viewValue);
    this.critereevaluationInput.nativeElement.value = '';
    this.critereevaluationCtrl.setValue(null);
  }

  private _filterCE(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allCritereevaluations.filter(critereevaluation => critereevaluation.toLowerCase().indexOf(filterValue) === 0);
  }
  // chip critere admission FIN

  resetForm(): void{
    this.form.reset();
  }
  validator(): boolean{
    if (this.form.invalid || this.grpCompetences.length < 1 || this.critereadmissions.length < 1 || this.critereevaluations.length < 1){
      return false;
    }

    return true;
  }
  // submit traitement

}
