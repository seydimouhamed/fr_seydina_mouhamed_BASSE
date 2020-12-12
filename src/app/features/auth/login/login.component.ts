import { User } from './../../../models/User';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, first } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { TestService } from './test.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit{

 form: FormGroup;
 submitted = false;
 returnUrl: string;
 error = '';
 busy = false;
 hide = true;
 RETURNEURL = 'returnUrl' ;
constructor(
   private formBuilder: FormBuilder,
   private authService: AuthService,
   private route: ActivatedRoute,
   private router: Router,
   private testServie: TestService
){
    if (this.authService.currentUserValue){

      this.router.navigate(['/admin']);

    }
}

  ngOnInit(): void{

    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams[this.RETURNEURL];
  }


  get f(): any{ return this.form.controls; }

  onSubmit(): void{
    this.submitted = true;
    if ( this.form.invalid ) { return; }

    this.authService.login( this.f.username.value, this.f.password.value )
      .pipe(first())
      .subscribe(
        data => {
              if ( data )
              {
                this.getInfo();
              }
        },
        error => {
          console.log(error);
        }
      );
    }


    getInfo(): User
    {
      return  this.authService.getUser().
      pipe(first()).
         subscribe(
           user => {
             console.log(user);
             const role = user.profil.libelle;
             if ( role === 'ADMIN') {
               console.log('page admin redirection');
               this.returnUrl = '/admin';
             }else if ( role  === 'FORMATEUR') {
               this.returnUrl = '/formateur';
             }else if ( role === 'APPRENANT') {
               this.returnUrl = '/apprenant';
             }
             else {
               console.log('autre page redirection');
             }
             this.router.navigate([this.returnUrl]);
           }
         );
    }
  // submit() {
  //   if (this.form.valid) {
  //     this.submitEM.emit(this.form.value);
  //   }
  // }
  // @Input() error: string | null;

  // @Output() submitEM = new EventEmitter();

}
