import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componententes
import { RegisterComponent } from './components/user/coach/register/register.component';
import { LoginComponent } from './components/user/coach/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ContactComponent } from './components/contact/contact.component';
import { EditComponent } from './components/user/edit/edit.component';
import { PublicProfileComponent} from './components/user/public-profile/public-profile';
import { RegisterComponentCoachee } from './components/user/coachee/register/register.component';
import { LoginComponentCoachee } from './components/user/coachee/login/login.component'; 
import { ProfileComponent } from './components/user/profile/profile.component';
import { ListUsersComponent } from './components/user/list-users/list-users.component';
import { Test1Component } from './components/user/test1/test1.component';
import { FollowingComponent } from './components/user/following/following.component';
import { FollowedComponent} from './components/user/followed/followed.component';
import { AddInstitutionComponent } from './components/user/add-institution/add-institution.component';
import { AllowAccessComponent } from './components/allow-access/allow-access.component';
import { Test3Component } from './components/user/test3/test3.component';
import { Test2Component } from './components/user/test2/test2.component';
import { Resultado1Component } from './components/user/resultado1/resultado1.component';
import { MyResultsComponent } from './components/user/my-results/my-results.component';
import { Resultado2Component } from './components/user/resultado2/resultado2.component';
import { TaskListComponent} from './components/user/task-list/task-list.component';

//Servicios
import { UserService } from './services/user.service';
import { InstitutionService } from './services/institution.service';

//restriccion de acceso 
import { UserGuard } from './services/user.guard';
import { InstitutionGuard} from './services/institutionGuard';
import { Resultado3Component } from './components/user/resultado3/resultado3.component';
import { InstitutionreportsComponent } from './components/user/institutionreports/institutionreports.component';
import { ResultadoinstComponent } from './components/user/resultadoinst/resultadoinst.component';
import { BugsreportComponent } from './components/user/bugsreport/bugsreport.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'inicio', component: HomeComponent },
    { path: 'registro', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'contacto', component: ContactComponent },
    { path: 'contacto/:page', component: ContactComponent },
    { path: 'perfil-publico/:id', component: PublicProfileComponent },
    { path: 'perfil/:id', component: ProfileComponent, canActivate:[UserGuard] },
    { path: 'configuracion', component: EditComponent, canActivate:[UserGuard] },
    { path: 'register-coachee', component: RegisterComponentCoachee, canActivate: [InstitutionGuard] },
    { path: 'login-coachee', component:  LoginComponentCoachee},
    { path: 'buscar-usuarios/:page', component: ListUsersComponent, canActivate:[UserGuard] },
    { path: 'buscar-usuarios', component: ListUsersComponent, canActivate:[UserGuard] },
    { path: 'mis-test1', component:Test1Component, canActivate:[UserGuard] },
    { path: 'mis-test2', component:Test2Component, canActivate:[UserGuard] },
    { path: 'mis-test3', component:Test3Component, canActivate:[UserGuard] },
    { path: 'mis-resultados', component:MyResultsComponent, canActivate:[UserGuard] },
    { path: 'mis-resultadosi/:page', component:InstitutionreportsComponent, canActivate:[UserGuard] },
    { path: 'mis-resultadosi', component:InstitutionreportsComponent, canActivate:[UserGuard] },
    { path: 'mis-resultados/:page', component:MyResultsComponent, canActivate:[UserGuard] },
    { path: 'result-institution/:id', component:ResultadoinstComponent, canActivate:[UserGuard] },
    { path: 'siguiendo/:id/:page', component: FollowingComponent, canActivate:[UserGuard] },
    { path: 'seguidores/:id/:page', component: FollowedComponent, canActivate:[UserGuard] },
    { path: 'resultado1/:id', component: Resultado1Component, canActivate:[UserGuard] },
    { path: 'resultado2/:id', component: Resultado2Component, canActivate:[UserGuard] },
    { path: 'resultado3/:id', component: Resultado3Component, canActivate:[UserGuard] },
    { path: 'crear-institucion', component: AddInstitutionComponent, canActivate:[UserGuard] },
    { path: 'dar-acceso', component: AllowAccessComponent},
    { path: 'reportar-bugs', component: BugsreportComponent, canActivate:[UserGuard] },
    { path: 'tareas', component: TaskListComponent, canActivate: [UserGuard] },
    { path: '**', component: ErrorComponent }

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
