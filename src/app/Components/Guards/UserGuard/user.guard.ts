import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../Services/Auth/auth.service';
import { inject } from '@angular/core';

export const userGuard: CanActivateFn = () => {

  const authServise : AuthService = inject(AuthService)
  const router : Router = inject(Router)

  if(authServise.isAuthenticated()){
    return true
  }else{
    router.navigate(['/login'])
    return false
  }
};
