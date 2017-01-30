/**
 * Created by ashokgudise on 1/29/17.
 */
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class AuthenticationService{

  public token: string;

  constructor(private http:Http){
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }


  login(username: string, password: string): Observable<boolean>{

    console.log('Login for username: '+username+' , //n password: '+password);

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('/auth',JSON.stringify({
      username: username, password: password
    }),options).map((response: Response) => {

      let token  = response.json && response.json().token;

      if(token){
        this.token = token;

        localStorage.setItem('currentUser', JSON.stringify({
          userName: username, token: token
        }));
        return true;

      }else{
        return false;
      }
    });
  }

  logout(): void{
    this.token = null;

    localStorage.removeItem('currentUser');
  }
}
