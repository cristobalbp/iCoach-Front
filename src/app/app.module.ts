import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';
import { ChartsModule } from 'ng2-charts';
import { Ng2Rut } from 'ng2-rut';
import { EditorModule } from '@tinymce/tinymce-angular';



//Modulo Custom
import { MessagesModule } from './messages/messages.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/user/coach/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/user/coach/login/login.component';
import { EditComponent } from './components/user/edit/edit.component';
import { ContactComponent } from './components/contact/contact.component';
import { FreshPipe } from './fresh.pipe';
import { PublicProfileComponent } from './components/user/public-profile/public-profile';
import { RegisterComponentCoachee } from './components/user/coachee/register/register.component';
import { LoginComponentCoachee } from './components/user/coachee/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { ListUsersComponent } from './components/user/list-users/list-users.component';
import { TopbarComponent } from './components/user/topbar/topbar.component';
import { TimelineComponent } from './components/user/timeline/timeline.component';
import { PublicationsComponent } from './components/user/publications/publications.component';
import { FollowingComponent } from './components/user/following/following.component';
import { FollowedComponent } from './components/user/followed/followed.component';
import { AddInstitutionComponent } from './components/user/add-institution/add-institution.component';
import { AllowAccessComponent } from './components/allow-access/allow-access.component';
import { UserService } from './services/user.service';
import { UserGuard } from './services/user.guard';
import { InstitutionService } from './services/institution.service';
import { InstitutionGuard } from './services/institutionGuard';
import { Test1Component } from './components/user/test1/test1.component';
import { Test2Component } from './components/user/test2/test2.component';
import { Test3Component } from './components/user/test3/test3.component';
import { Resultado1Component } from './components/user/resultado1/resultado1.component';
import { Resultado2Component } from './components/user/resultado2/resultado2.component';
import { MyResultsComponent } from './components/user/my-results/my-results.component';
import { Resultado3Component } from './components/user/resultado3/resultado3.component';
import { InstitutionreportsComponent } from './components/user/institutionreports/institutionreports.component';
import { ResultadoinstComponent } from './components/user/resultadoinst/resultadoinst.component';
import { BugsreportComponent } from './components/user/bugsreport/bugsreport.component';
import { TaskComponent } from './components/user/task/task.component';
import { TaskListComponent } from './components/user/task-list/task-list.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    ErrorComponent,
    LoginComponent,
    EditComponent,
    ContactComponent,
    FreshPipe,
    PublicProfileComponent,
    RegisterComponentCoachee,
    LoginComponentCoachee,
    ProfileComponent,
    ListUsersComponent,
    TopbarComponent,
    TimelineComponent,
    PublicationsComponent,
    FollowingComponent,
    FollowedComponent,
    AddInstitutionComponent,
    AllowAccessComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    Resultado1Component,
    Resultado2Component,
    MyResultsComponent,
    Resultado3Component,
    InstitutionreportsComponent,
    ResultadoinstComponent,
    BugsreportComponent,
    TaskComponent,
    TaskListComponent    
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    MomentModule,
    MessagesModule,
    ChartsModule,
    Ng2Rut,
    EditorModule
  ],
  providers: [
    appRoutingProviders,
    UserService,
    UserGuard,
    InstitutionService,
    InstitutionGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
