import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {AuthenticationService} from "./AuthenticationService";
import {User} from "../model/user";
import {Observable} from "rxjs";
/**
 * Created by ashokgudise on 1/29/17.
 */


@Injectable()
export class UserService{

  constructor(private http:Http,
                private authenticationService: AuthenticationService){

  }

  getUsers(): Observable<User[]>{

    let headers =
          new Headers({'Authorization':+ this.authenticationService.token});

    let options = new RequestOptions({headers: headers});

    return this.http.get('/api/users', options)
      .map((response: Response) => response.json() );
  }
}
