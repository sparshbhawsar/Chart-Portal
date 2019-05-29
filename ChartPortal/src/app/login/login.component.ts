import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule, EmailValidator } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [DataService]
})

export class LoginComponent implements OnInit {

  login_user(user: any, password: any): void {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let data={
      "username":user,
      "password":password
    }
    this.http.post("http://localhost/chartform/src/app/userslogin.php",data,{
      headers:headers
    })
    .subscribe(res=>this.redirect_login(res));
  }
  redirect_login(res:any):void{
    if(res.logged_in==true){
      localStorage.setItem("userID",res.userID);
      window.location.href="./createchart";
    }
    else{
      console.log("User doesn't exist!");
    }
  }
  constructor(private dataservice: DataService, private http: HttpClient) {
  }
  ngOnInit() {


  }

}
