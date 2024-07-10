import { CanActivateFn, Router } from '@angular/router';
import { AdminService } from '../../Services/Auth/admin.service';
import { inject } from '@angular/core';

export const AdminCanActivateGuard: CanActivateFn = () => {

  const adminAuthService : AdminService = inject(AdminService);
  const router:Router  = inject(Router)

  if(adminAuthService.AdminIsAuthenticated()){
    return true
  }else{
    router.navigate(['/adminlogin/adminhome'])
    return false
  }
  
};
