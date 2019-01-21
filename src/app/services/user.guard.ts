import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class UserGuard implements CanActivate {
constructor(private _router: Router, private _userService: UserService) {}

canActivate() {
const identity = this._userService.getIdentity();
if ( identity && (identity.role_coach === 'yes' || identity.role_coachee === 'yes')) {return true; } else {
this._router.navigate(['/login']);
return false;
}
}
}
