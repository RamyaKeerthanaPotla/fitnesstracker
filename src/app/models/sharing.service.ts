import { Injectable } from "@angular/core";
import { Profile } from "./Profile";
import { Http } from "@angular/http";
import { Router } from "@angular/router";

declare var window: any;
declare var FB: any;
declare var google: any;

@Injectable()
export class SharingService {
  apiRoot: string;
  me: Profile;

  constructor(private http: Http, private router: Router) {
    this.apiRoot = `localhost:4200`;
  }

  loginFB() {
    FB.login(
      (response: any) => {
        console.log(this.id);
        if (response.authResponse) {
          //console.log(response);
          FB.api("/me?fields=name,email,picture", (response: any) => {
            //console.log(response);
            this.login(
              response.name,
              "password",
              response.id,
              response.picture.data.url
            );
          });
        } else {
          console.log("User cancelled login or did not fully authorize.");
        }
      },
      { scopes: "email,user_photos,user_posts" }
    );
  }

  login(name: string, password: string) {
    if(password == '123'){
      this.me { Name: name};
      this.router.navigate(['http://localhost:4200/user']);
    }

    // ME = new Profile(name, fbid, picture, this.http);
    // this.me = ME;
    // this.http
    //   .post(this.apiRoot + "/players", {
    //     ME
    //   })
    //   .subscribe(
    //     data => {
    //       this.me = data.json();
    //       console.log(data);
    //     },
    //     err => {
    //       console.log(err);
    //     },
    //     () => {}
    //   );
  }

  oAuthLogin(name: string, token:string, pic: string){
    this.Me = { Name: name, MyQuotes: [] };
    this.pic = pic;
    this.token = token;
    this.router.navigate(['http://localhost:4200/user']);
}


}
//export var ME: Profile;
