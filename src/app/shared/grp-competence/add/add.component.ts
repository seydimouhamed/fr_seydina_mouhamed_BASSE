import { GrptagService } from './../../grptag/grptag.service';
import { TagService } from './../../tag/tag.service';
import { CompetenceService } from './../../competence/competence.service';
import { GrpCompetence } from './../../../models/GrpCompetence';
import { GrpCompetenceService } from './../grp-competence.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';

import {map, startWith} from 'rxjs/operators';
import { Competence } from 'src/app/models/Competence';
import { Tag } from 'src/app/models/Tag';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
form: FormGroup;
submitted = false;
busy = false;

private HYDRA = 'hydra:member';
  // chips
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  // -----------------------------------------------------
  competenceCtrl = new FormControl();
  filteredCompetences: Observable<Competence[]>;
  competences: Competence[] = [];
  allCompetences: Competence[] = [];
 // chips

  @ViewChild('competenceInput') competenceInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

// ---------------  tags   ----------------------------
  tagCtrl = new FormControl();
  filteredTags: Observable<Tag[]>;
  tags: Tag[] = [];
  allTags: Tag[] = [];
  @ViewChild('tagsInput') tagsInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') auto1: MatAutocomplete;
// ----------------------------------------------------
  constructor(
    private formBuilder: FormBuilder,
    private grpCompeteenceService: GrpCompetenceService,
    private competenceService: CompetenceService,
    private grpTagService: GrptagService,
    private tagService: TagService
    ) {

    this.filteredCompetences = this.competenceCtrl.valueChanges.pipe(
      startWith(null),
      map((libelle: string | null) => {

        const result = libelle ? this._filter(libelle) : this.allCompetences.slice();

        // result.forEach( compet => this.allCompetences.splice(this.allCompetences.indexOf(compet), 1));
        return result;
      }));


    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null ) => {
        const result = tag ? this._filterTag(tag) : this.allTags.slice();
        return result;
      })
    );
    // -- Debut recuperation des groupes de tags
    this.tagService.getAll()
      .subscribe( response => {
         this.allTags = response[this.HYDRA];
          console.log(response[this.HYDRA]);
      });
    // -- Fin recuperation des groupes de tags

    // -- Debut recuperation des competences
    this.competenceService.getAllCompetenceResume()
    .subscribe( response => {
      this.allCompetences = response[this.HYDRA];
        console.log(response[this.HYDRA]);
    });
  // -- Fin recuperation des competences
  }

  ngOnInit(): void {
    this.getRegisterForm();
  }

  getAllCompetence(): Competence[]{
    return this.allCompetences.slice();
  }
  getRegisterForm(): void {
   this.form = this.formBuilder.group({
     libelle: ['', [Validators.required, Validators.min(5)]],
     descriptif: ['', [Validators.required, Validators.min(5)]],
     competences: [[]],
     tags: [[]],
   });

  }


  public get f(): any{
    return this.form.controls;
}

  onSubmit(): void
  {
    this.saveGrpCompetence();
  }


  // constructor() {
  // }


  // chip
  add(event: MatChipInputEvent): void {
    // console.log(event);
    const input = event.input;
    const competence = event.value as Competence;

    // Add our fruit
    if ((competence.libelle || '').trim()) {
      this.competences.push(competence);
      this.allCompetences.splice(this.allCompetences.indexOf(competence), 1);
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.competenceCtrl.setValue(null);
  }

  remove(competence: Competence): void {
    const index = this.competences.indexOf(competence);

    if (index >= 0) {
      this.competences.splice(index, 1);
      this.allCompetences.push(competence);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const competenceSelected = event.option.value as Competence;
    if (this.competences.indexOf(competenceSelected)  >= 0)
    {
        return ;
    }
    this.competences.push(competenceSelected);
    this.allCompetences.splice(this.allCompetences.indexOf(competenceSelected), 1);
    this.competenceInput.nativeElement.value = '';
    this.competenceCtrl.setValue(null);
  }

  private _filter(libelle: any): Competence[] {

    const filterValue = libelle.toLowerCase();

    return this.allCompetences.filter(competence => competence.libelle.toLowerCase().indexOf(filterValue) === 0);
  }
 selectCompetence(competence: Competence): void {
   this.competences.push(competence);
   this.allCompetences.splice(this.allCompetences.indexOf(competence), 1);
 }
  selectTag(tag: Tag): void {
    //alert('dans select');
    this.tags.push(tag);
    this.allTags.splice(this.allTags.indexOf(tag), 1);
  }
  // tags
  addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const tag = (event.value as unknown) as Tag;

    // Add our fruit
    if ((tag.libelle || '').trim()) {
      this.tags.push(tag);
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.tagCtrl.setValue(null);
  }

  removeTag(tag: Tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
      this.allTags.push(tag);
    }
  }

  selectedTag(event: MatAutocompleteSelectedEvent): void {

    const tagSelected = event.option.value as Tag;
    if (this.tags.indexOf(tagSelected)  >= 0)
    {
        return ;
    }
    this.tags.push(tagSelected);
    alert('la');
    this.allTags.splice(this.allTags.indexOf(tagSelected), 1);
    this.tagsInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
  }

  private _filterTag(libelle: string): Tag[] {
    const filterValue = libelle.toLowerCase();

    return this.allTags.filter(tag => tag.libelle.indexOf(filterValue) === 0);
  }

  // private _filter(libelle: any): Competence[] {

  //   const filterValue = libelle.toLowerCase();

  //   return this.allFruits.filter(fruit => fruit.libelle.toLowerCase().indexOf(filterValue) === 0);
  // }
 // ---------------------------- //
 // save groupe de competences   //
 // ---------------------------- //

 saveGrpCompetence(): void {

  // this.form.controls.competences =
  if (this.form.invalid){
    return;
  }
  const grpCompetence = this.form.value as GrpCompetence;
  grpCompetence.tags  = [];
  grpCompetence.competences = [];
  this.competences.forEach( (competence: Competence) => grpCompetence.competences.push(competence['@id']));
  this.tags.forEach((tag: Tag) => grpCompetence.tags.push(tag['@id']));
  console.log(this.form.value);
  this.grpCompeteenceService.addGrpCompetence(this.form.value).
      subscribe( grpComp => {
        console.log(grpComp);
        alert('ajouté avec succes');
      });
 }


}
