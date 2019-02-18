import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(public httpClient: HttpClient) {}

  ngOnInit() {}

  login() {
    let headers = new HttpHeaders();
    headers.append("Access-Control-Allow-Headers", "*");

    this.httpClient
      .post(
        "http://localhost:5000/connect/authorize",
        {
          audience: "http://localhost:5000/connect/token",
          clientID: "client",
          clientSecret: "secret",
          secret: "secret",
          scope: "api1"
        },
        {
          headers
        }
      )
      .subscribe(token => {
        console.log(token);
      });
  }
}
