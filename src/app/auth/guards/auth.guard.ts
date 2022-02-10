import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanLoad, CanActivate {

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
    


      if(this.authService.auth.id){
        return true;
      }
    
      console.log('bloqueado por el guards - canActivate');

    return false;


  }



  constructor( private authService: AuthService  ){}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean  {



      if(this.authService.auth.id){
        return true;
      }
    
      console.log('bloqueado por el guards - canLoad');

    return false;
  }

}
