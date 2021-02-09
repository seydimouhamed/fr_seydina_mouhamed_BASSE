import { UserService } from './user.service';
import { User } from './../../models/User';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<User> {
  constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
    const ID = 'id';
     // alert("dans le resolver");
    return this.userService.getUserById(+route.params[ID]);
  }

}
