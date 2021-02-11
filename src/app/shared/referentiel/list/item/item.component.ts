import { Router } from '@angular/router';
import { Referentiel } from './../../../../models/Referentiel';
import { Component, Input, OnInit, OnChanges, AfterContentInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { reduce } from 'rxjs/operators';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, AfterViewInit {
  panelOpenState = false;
  @Input() referentiel: Referentiel;
  @Input() index: number;
  @Output() deleteI = new EventEmitter();
  critereEvalutions: Array<string>;
  critereAdmissions: Array<string>;
  constructor(
  private router: Router
  ) { }
  ngOnInit(): void {
    this.critereEvalutions = JSON.parse(this.referentiel.critereEvaluation);
    this.critereAdmissions = JSON.parse(this.referentiel.critereAdmission);

  }

  ngAfterViewInit(): void {
    if (this.referentiel.programme)
    {
      const byteArray = new Uint8Array(atob(this.referentiel.programme).split('').map(char => char.charCodeAt(0)));
      const blob = new Blob([byteArray], {type: 'application/pdf'});
      if (blob){
        const url = window.URL.createObjectURL(blob);
        if (url !== null){
          // document.querySelector('iframe' + this.index).src = url;
          document.getElementById('iframe_' + this.index).setAttribute('src', url);

        }
      }
    }
  }

  generatePDF(): void{
    const documentDefinition =
    {
      content: [
        {
          text: 'testeqdshjqsd',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        {
          columns: [
            [
              {
                text: 'row1'
              },
              {
                text: 'row2'
              },
              {
                text: 'row3'
              },
            ]
          ]
        }
      ],
      styles: {
        name: {
          fontSize: 16,
          bold: true,
          color: 'red',
        }
      }
    };

    pdfMake.createPdf(documentDefinition).open();
  }
 // DELETE

  delete(referentiel): void {
    this.deleteI.emit(this.referentiel);
  }


  detail(id): void{
    this.router.navigate(['/admin/referentiel/details', +id]);
  }
}
