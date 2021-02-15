
import { Apprenant } from './../../../../models/Apprenant';
import { Component, Inject, Input, OnInit, OnChanges } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// carte etudiant


@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent{
  apprenant: Apprenant;
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = '';
  constructor(
      public dialogRef: MatDialogRef<CarteComponent>
    , @Inject(MAT_DIALOG_DATA) data)
  {
    this.apprenant = data['apprenant'] ;
    const dataUser = {
      id: this.apprenant.id,
      // prenom: this.apprenant.firstname,
      // nom: this.apprenant.lastname,
      // telephone: this.apprenant.telephone,
      // email: this.apprenant.email,
      username: this.apprenant.username
      }
    ;
    this.value = btoa(btoa(JSON.stringify(dataUser)));
  }

  generateCarte(): void
  {
    const element = document.getElementById('pdf');
    html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL('image/jpeg');
        const doc = new jspdf.jsPDF('landscape');
        const imgHeight = canvas.height * 208 / canvas.width;
        doc.addImage(imgData, 0, 25, 300, 150);
        doc.save('carte-etudiant');
        this.dialogRef.close();

     });
  }

}


@Component({
  selector: 'app-stat-apprenant',
  templateUrl: './stat-apprenant.component.html',
  styleUrls: ['./stat-apprenant.component.scss']
})
export class StatApprenantComponent implements OnInit, OnChanges {
@Input() apprenant: Apprenant;
elementType = NgxQrcodeElementTypes.URL;
correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
value = 'https://www.techiediaries.com/';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.apprenant);
  }
  ngOnChanges(changes): void {
    if (changes.apprenant){

    const dataUser = {
      id: this.apprenant.id,
      // prenom: this.apprenant.firstname,
      // nom: this.apprenant.lastname,
      // telephone: this.apprenant.telephone,
      // email: this.apprenant.email,
      username: this.apprenant.username
      }
    ;
     this.value = btoa(btoa(JSON.stringify(dataUser)));
    }

  }
  // generateCarte(): void
  // {
  //   const element = document.getElementById('pdf');
  //   html2canvas(element).then((canvas) => {
  //       const imgData = canvas.toDataURL('image/jpeg');
  //       const doc = new jspdf.jsPDF('landscape');
  //       const imgHeight = canvas.height * 208 / canvas.width;
  //       doc.addImage(imgData, 0, 25, 300, 150);
  //       doc.save('carte-etudiant');
  //    });
  // }
  sendSms(): void {

  }

  openCarte(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      apprenant: this.apprenant
    };
    const dialogRef = this.dialog.open(CarteComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
