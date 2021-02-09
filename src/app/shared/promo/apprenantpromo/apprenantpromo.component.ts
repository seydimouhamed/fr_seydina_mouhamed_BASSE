import Swal from 'sweetalert2';
import { Apprenant } from './../../../models/Apprenant';
import { UserService } from './../../user/user.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-apprenantpromo',
  templateUrl: './apprenantpromo.component.html',
  styleUrls: ['./apprenantpromo.component.scss']
})
export class ApprenantpromoComponent implements OnInit {
  @Output() submitEvent = new EventEmitter<any>();
  fileApp: any;

  // chips
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  apprenantCtrl = new FormControl();
  filteredApprenants: Observable<Apprenant[]>;
  apprenants: Apprenant[] = [];
  allApprenants: Apprenant[] = [];
 // chips

  @ViewChild('apprenantInput') apprenantInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  constructor(private userService: UserService) {

    this.filteredApprenants = this.apprenantCtrl.valueChanges.pipe(
      startWith(null),
      map((email: string | null) => email ? this._filter(email) : this.allApprenants.slice()));
  }

  ngOnInit(): void {
     this.userService.getUsers(1, 200, 'APPRENANT').subscribe(
       apprenants => {
         this.allApprenants = apprenants['hydra:member'];
       }
     );
  }

  isValidEmail(value): boolean
  {
    const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regularExpression.test(String(value).toLowerCase());
  }

  onDocumentCheck(event): void
  {
    // console.log(event);
    // alert('fffff');
    this.fileApp = event;
  }
   // chip
    add(event): void {

    if ( !this.isValidEmail(event.value)){
      Swal.fire({
        position: 'top-end',
        title: 'email n\'est pas valide',
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }


    const input = event.input;
    const email = event.value;

    // Add our apprenant
    if ((email || '').trim()) {
      const apprenant = new Apprenant();
      apprenant.email = email;
      this.apprenants.push(apprenant);
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.apprenantCtrl.setValue(null);
  }

  remove(apprenant: Apprenant, isExistUser = false): void {
   // alert(apprenant);
    if (isExistUser)
    {
      // alert('isExist user');
      const index1 = this.allApprenants.indexOf(apprenant);
      if (index1 >= 0) {
        this.allApprenants.splice(index1, 1);
        this.apprenants.push(apprenant);
      }
      return;
    }

    const index = this.apprenants.indexOf(apprenant);

    if (index >= 0) {
      this.apprenants.splice(index, 1);
      if (apprenant.id){
        this.allApprenants.push(apprenant);
      }
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.apprenants.push(event.option.value);
    this.apprenantInput.nativeElement.value = '';
    this.apprenantCtrl.setValue(null);
  }

  private _filter(value: string): Apprenant[] {
    const filterValue = value.toLowerCase();
    return this.allApprenants.filter(apprenant => apprenant.email.toLowerCase().indexOf(filterValue) === 0);
  }
  // chip

  onSubmit(): void
  {
    this.submitEvent.emit( {apprenants: this.apprenants, fileApp: this.fileApp});
  }
}
