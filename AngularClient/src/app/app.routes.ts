import { Routes } from "@angular/router";
// import { ProfileComponent } from
import { AuthGuardService } from "./auth/auth-guard.service";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { LoginComponent } from "./login/login.component";

export const ROUTES: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "login",
    component: LoginComponent
  }
];
