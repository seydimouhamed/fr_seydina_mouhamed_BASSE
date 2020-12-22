import { Profil } from './../../../models/Profil';
import { ProfilService } from './../profil.service';
import { Component, OnInit, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-list-profil',
  templateUrl: './list-profil.component.html',
  styleUrls: ['./list-profil.component.scss']
})
export class ListProfilComponent implements OnInit {
  profils: Profil[];
  error = '';
  editable = false;


  displayedColumns: string[] = ['select', 'id', 'avatar', 'libelle'];
  dataSource: any;
  selection = new SelectionModel<Profil>(true, []);


  constructor(private profilService: ProfilService) { }

  ngOnInit(): void {
   this.getProfils();

  }

  displayUsers(row): void{
    this.profilService.currentProfilSubject.next(row.libelle);
    alert(row.libelle);
  }

  getProfils(): void
  {
       this.profilService.getProfils()
            .subscribe(
              profils => {
                this.profils = profils['hydra:member'];
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
  checkboxLabel(row?: Profil): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

}
