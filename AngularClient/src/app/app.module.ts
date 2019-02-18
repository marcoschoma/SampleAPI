import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { JwtModule } from "@auth0/angular-jwt";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './login/login.component';
// import { JwtHelperService } from "@auth0/angular-jwt";

export function tokenGetter() {
  return localStorage.getItem("access_token");
}
@NgModule({
  declarations: [AppComponent, HomeComponent, ProfileComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost"]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
