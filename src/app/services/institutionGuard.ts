import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { InstitutionService } from './institution.service';

@Injectable()
export class InstitutionGuard implements CanActivate {
    constructor(private _router: Router, private _institutionService: InstitutionService) { }

    canActivate() {
        const identity2 = this._institutionService.getIdentity2();
        if (identity2 && (identity2.verify === 'yes')) { return true; } else {
            this._router.navigate(['/dar-acceso']);
            return false;
        }
    }
}