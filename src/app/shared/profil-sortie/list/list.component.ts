import { ProfilSortie } from './../profil-sortie';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Profil } from 'src/app/models/Profil';
import { ProfilService } from '../../profil/profil.service';
import { ProfilSortieService } from '../profil-sortie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  profils: ProfilSortie[];
  error = '';
  editable = false;


  displayedColumns: string[] = ['select', 'id', 'libelle'];
  dataSource: any;
  selection = new SelectionModel<ProfilSortieService>(true, []);


  constructor(private profilService: ProfilSortieService) { }

  ngOnInit(): void {
   this.getProfils();

  }

  displayPsUser(idPs): void{
    this.profilService.currentPsSubject.next(idPs);
   }

  getProfils(): void
  {
       this.profilService.getProfilSorties()
            .subscribe(
              profils => {
                this.profils = profils['hydra:member'];
                console.log(this.profils);
                this.dataSource = new MatTableDataSource<Profil>(this.profils);
            },
              error => { this.error = error; }
              );
  }

  toInput(id): void{
    this.editable = true;
  }


  onBlurInput(id): void {
    this.editable = false;
    alert('blur');
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected(): any {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle(): void {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  // checkboxLabel(row?: Profil): string {
  //   if (!row) {
  //     return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
  //   }
  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  // }

}
