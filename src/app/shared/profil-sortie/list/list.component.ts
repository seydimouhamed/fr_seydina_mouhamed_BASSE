import Swal from 'sweetalert2';
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
  currentprofil: ProfilSortie;
  error = '';
  editable = false;
  psModel = { id: 0, libelle: ''};

  displayedColumns: string[] = ['select', 'id', 'libelle'];
  dataSource: any;
  selection = new SelectionModel<ProfilSortieService>(true, []);


  constructor(private profilService: ProfilSortieService) { }

  ngOnInit(): void {
   this.getProfils();

  }

  displayPsUser(row): void{
    this.currentprofil = row as ProfilSortie;
    this.profilService.currentPsSubject.next(row.id);
   }

  getProfils(): void
  {
       this.profilService.getProfilSorties()
            .subscribe(
              profils => {
                this.profils = profils['hydra:member'];
                // console.log(profils);
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
  delete(row): void {

    Swal.fire({
      title: 'Vous etes sur de vouloir supprimer',
      text: '(le profils de sortie sera archiver)',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmer',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.value) {
        this.profilService.delete(+row.id).
            subscribe(
              () => {

              this.dataSource.data.splice(this.profils.indexOf(row), 1);
              this.dataSource._updateChangeSubscription();
               // this.grpCompetences.splice(+id, 1);
              Swal.fire (
                'Supprimé avec succes',
                '',
                'success'
               );
              }
            );
      }
    });
  }
  updateData(event): void{
    console.log(event);
    const value = event.value;
    this.profilService.updateProfilSortie(event.id, { libelle : value}).subscribe(
      (data) => {
          console.log(data);
          alert('changer');
      },
    );
  }
  /** The label for the checkbox on the passed row */
  // checkboxLabel(row?: Profil): string {
  //   if (!row) {
  //     return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
  //   }
  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  // }

}
