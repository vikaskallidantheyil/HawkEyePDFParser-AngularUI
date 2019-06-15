import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalComponent } from './personalDetails/personalDetails.component';



const appRoutes: Routes = [
    { path: 'personalDetails', component: PersonalComponent },
  //  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
    { path: '', redirectTo: '/personalDetails', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
