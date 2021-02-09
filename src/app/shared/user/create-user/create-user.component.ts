import { User } from './../../../models/User';
import { UserService } from './../user.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { error } from 'protractor';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  hide = false;
  busy = false;
  updateUser = false;

  @Input() userdata: User;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService) { }

  ngOnInit(): void {
    // Swal.fire({
    //   title: 'Error!',
    //   text: 'Do you want to continue',
    //   icon: 'error',
    //   confirmButtonText: 'Cool'
    // });
    this.getRegisterForm();
    if (this.userdata !== undefined)
    {
      this.updateUser = true;
      console.log(this.userdata.profil.id);
      this.registerForm.setValue({
        usernme: this.userdata['usernme'],
        email: this.userdata.email,
        firstname: this.userdata.firstname,
        lastname: this.userdata.lastname,
        idProfil: this.userdata.profil.id,
        avatar: '',
      });
    }else {
     // alert('undifined');
    }
  }


 getRegisterForm(): void {
  this.registerForm = this.formBuilder.group({
    usernme: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    idProfil: ['', Validators.required],
    avatar: ['']
  });

 }

onSubmit(): void{

  this.submitted = true;

  if ( this.registerForm.invalid ){
    return;
  }

  // const registerValue = this.registerForm.value;
  const attrs = ['usernme', 'email', 'firstname', 'lastname', 'idProfil', 'avatar'];
  const registerFormData = new FormData();

  for ( const att of attrs){
    console.log(this.registerForm.get(att).value);
    registerFormData.append(att, this.registerForm.get(att).value);
  }

  if (!this.updateUser){

    alert('dans le persiste');
    this.persist(registerFormData);
  }
  else {
    alert('dans le update');
    this.update(registerFormData);
  }

  // this.userService.addUser(registerFormData).
  //   subscribe(response => {
  //         alert('ajouté avec success!');
  //   }, err => {
  //           console.log(err);
  //           alert(err);
  //   });
}
persist(registerFormData): void
{

  this.userService.addUser(registerFormData).
    subscribe(response => {
          alert('ajouté avec success!');
    }, err => {
            console.log(err);
            alert(err);
    });
}
update(updateFormData: FormData): void
{
  updateFormData.append('_method', 'PUT');
  this.userService.updateUser(this.userdata.id, updateFormData).
    subscribe(response => {
          console.log(response);
          alert('modifié avec success!');
    }, err => {
            console.log(err);
            alert(err);
    });
}
  public get f(): any{
      return this.registerForm.controls;
  }
}
