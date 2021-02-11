import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { ReferentielService } from './referentiel.service';
import { Referentiel } from '@/app/models/Referentiel';
const ID = 'id';
@Injectable({
  providedIn: 'root'
})
export class ReferentielResolveService implements Resolve<Referentiel[]> {
  constructor(private referentielService: ReferentielService) {}

  resolve(): Observable<Referentiel[]> | Promise<Referentiel[]> | Referentiel[] {

    return this.referentielService.getReferentiels();
  }
}


@Injectable({
  providedIn: 'root'
})
export class ReferentielDetailResolveService implements Resolve<Referentiel> {
  constructor(private referentielService: ReferentielService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Referentiel> | Promise<Referentiel> | Referentiel {
    const data = this.referentielService.getReferentiel(+route.params[ID]);
    console.log(data);
    return data;
  }
}
