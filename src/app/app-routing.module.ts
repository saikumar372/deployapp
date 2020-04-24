import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { MembersDetailViewComponent } from './members-detail-view/members-detail-view.component';
import { UserListingComponent } from './user-listing/user-listing.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'members', component: MembersDetailViewComponent },
  { path: 'user_listing', component: UserListingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
