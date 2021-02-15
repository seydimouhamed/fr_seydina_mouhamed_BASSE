import { PromoService } from './promo.service';
import { User } from './../../models/User';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { Promo } from '@/app/models/Promo';

@Injectable({
  providedIn: 'root'
})
export class PromoPrincipaleResolveService implements Resolve<Promo> {
  constructor(private promoService: PromoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Promo> | Promise<Promo> | Promo {
    const ID = 'id';
     // alert("dans le resolver");
    return this.promoService.getPromoPrincipal(+route.params[ID]);
  }

}
