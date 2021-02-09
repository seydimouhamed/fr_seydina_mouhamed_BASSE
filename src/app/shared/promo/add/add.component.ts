import { ReferentielService } from './../../referentiel/referentiel.service';
import { Referentiel } from './../../../models/Referentiel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PromoService } from '../promo.service';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [DatePipe]
})
export class AddComponent implements OnInit {


  form: FormGroup;
  submitted = false;
  busy = false;
  isLinear = false;
  referentiels: Referentiel[];
  avatar: any;

  constructor(
    private formBuilder: FormBuilder,
    private promoService: PromoService,
    private referentielService: ReferentielService,
    private datePipe: DatePipe
    ) {
  }

  ngOnInit(): void {
    this.initForm();
    this.referentielService.getReferentiels().
      subscribe( ref => {
        this.referentiels = ref['hydra:member'];
      });

  }
  onFileSelect(event): void
  {
    if (event.target.files.length > 0)
    {
      // alert('une image a été electionné');
        const file = (event.target as HTMLInputElement).files[0];

        this.avatar = file.name;
        this.form.patchValue({avatar: file });
        this.form.get('avatar').updateValueAndValidity();
       //this.registerForm.get('avatar').setValue(file);
       //this.avatar=file;
    }
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      langue: ['', Validators.required],
      fabrique: [''],
      lieu: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFinPro: ['', Validators.required],
      referentiel: ['', Validators.required],
      userDatas: [''],
      avatar: '',
      document: ''
    });
  }


  public get f(): any{
    return this.form.controls;
  }

  onSubmit(data): void
  {
      // if (this.form.invalid)
      // {
      //   return;
      // }

      // console.log(data);
      this.form.value.dateDebut = this.datePipe.transform(this.form.value.dateDebut, 'yyyy-MM-dd');
      this.form.value.dateFinPro = this.datePipe.transform(this.form.value.dateFinPro, 'yyyy-MM-dd');
      this.form.value.userDatas =  JSON.stringify(data['apprenants']);
      this.form.value.document = data['fileApp'];
      const promoFormData = new FormData();

      // for ( const att of attrs){
      //   console.log(this.registerForm.get(att).value);
      //   ;
      // }
      Object.entries(this.form.value).forEach( att => {
         // console.log(att[1]);
          if (att[0] !== 'avatar')
          {
            promoFormData.append(att[0], att[1] as string);
          }
      });

      // promoFormData.append('avatar', this.form.value.avatar);
      // console.log(registerFormData);

      this.promoService.addPromo(promoFormData).subscribe(
        datas => {
          // console.log(datas);
          alert('ajouter avec succes');
        },
        error => {
          // console.log(error);
          alert('Echec');
        }
        );
  }

}
