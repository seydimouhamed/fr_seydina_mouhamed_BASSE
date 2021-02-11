import { GrpCompetenceService } from './grp-competence.service';
import { GrpCompetence } from './../../models/GrpCompetence';
import { Competence } from './../../models/Competence';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrpCompetenceResolverService implements Resolve<GrpCompetence> {
  constructor(private grpCompetenceService: GrpCompetenceService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GrpCompetence> | Promise<GrpCompetence> | GrpCompetence {
    const ID = 'id';
    return this.grpCompetenceService.getById(+route.params[ID]);
  }

}
