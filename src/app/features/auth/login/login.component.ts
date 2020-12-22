import { User } from './../../../models/User';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { TestService } from './test.service';
import { LowerCasePipe } from '@angular/common';

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
      const role = this.authService.getCurrentUserTokenInfo()['roles'][0];

      const rout = (role.split('_')[1]).toLowerCase();

     // alert(rout);
      this.router.navigate(['/' + rout]);

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
             this.authService.setCurrentUserValue(user);
             const role = (user.profil.libelle).toLowerCase();
             this.router.navigate(['/' + role]);
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
