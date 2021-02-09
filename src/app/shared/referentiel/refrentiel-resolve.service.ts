import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { ReferentielService } from './referentiel.service';
import { Referentiel } from '@/app/models/Referentiel';

@Injectable({
  providedIn: 'root'
})
export class ReferentielResolveService implements Resolve<Referentiel[]> {
  constructor(private referentielService: ReferentielService) {}

  resolve(): Observable<Referentiel[]> | Promise<Referentiel[]> | Referentiel[] {

    return this.referentielService.getReferentiels();
  }

}
