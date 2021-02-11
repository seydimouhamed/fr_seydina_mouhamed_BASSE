import { CompetenceService } from './competence.service';
import { Competence } from './../../models/Competence';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompetenceResolveService implements Resolve<Competence> {
  constructor(private competenceService: CompetenceService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Competence> | Promise<Competence> | Competence {
    const ID = 'id';
    return this.competenceService.getCompetenceById(+route.params[ID]);

  }

}
