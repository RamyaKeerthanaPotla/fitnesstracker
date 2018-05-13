import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { Http } from "@angular/http";
import { Profile } from "../models/Profile";
import { LoginService, ME } from "../models/login.service";
import { SharingService} from "../models/sharing.service";

declare var googleyolo: any;
declare var FB: any;
declare var window: any;


@Component({
  selector: "app-loginr",
  templateUrl: "./loginr.component.html",
  styleUrls: ["./loginr.component.scss"],


})
export class LoginrComponent implements OnInit {
  name: string;
  password: string;
  me = ME;
  apiRoot: string;


  constructor(private http: Http,
    private router: Router,
     private shareService: LoginService) {
       window.fbAsyncInit = () => {
       FB.init({
                   appId      : '2060883297484199',
                   cookie     : true,
                   xfbml      : true,
                   version    : 'v2.12'
               });
               FB.AppEvents.logPageView();
           };
           (function(d, s, id){
               var js, fjs = d.getElementsByTagName(s)[0];
               if (d.getElementById(id)) {return;}
               js = <HTMLScriptElement>d.createElement(s); js.id = id;
               js.src = "https://connect.facebook.net/en_US/sdk.js";
               fjs.parentNode.insertBefore(js, fjs);
             }(document, 'script', 'facebook-jssdk'));

           }
  ngOnInit() { }

  loginFB() {
    FB.login((credentials:any)=>{
            FB.api("/fbid?fields=email,name,picture", (response: any)=> {
                console.log(response);
                this.shareService.login(credentials.displayName, credentials.idToken, credentials.profilePicture);
            })
              }, { scope: "email,user_photos" })
  }

  login(name: string, password: string) {
    this.shareService.login(name, password);

  }

  logingoogle(){
        googleyolo.hint({
            supportedAuthMethods: [
            "https://accounts.google.com"
            ],
            supportedIdTokenProviders: [
                {
                    uri: "https://accounts.google.com",
                    clientId: "127811445743-8uo1b7vbretscar7t4kmuqiu8mhq04a5.apps.googleusercontent.com"
                }
            ]
        }).then((credentials: any) =>{
            this.shareService.oAuthLogin(credentials.displayName, credentials.idToken);
            console.log(credentials);
        })
    }


}
