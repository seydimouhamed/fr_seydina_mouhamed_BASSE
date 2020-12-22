import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { error } from 'protractor';

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
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService) { }

  ngOnInit(): void {
    this.getRegisterForm();
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

  this.userService.addUser(registerFormData).
    subscribe(response => {
          alert('ajouté avec success!');
    }, err => {
            console.log(err);
            alert(err);
    });
}

  public get f(){
      return this.registerForm.controls;
  }
}
