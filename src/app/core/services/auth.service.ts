import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private af: AngularFireAuth,
    private http: HttpClient,
    private tokenService: TokenService,
  ) { }

  createUser(email: string, password: string) {
    return this.af.createUserWithEmailAndPassword(email, password);
  }

  loginUser(email: string, password: string){
    return this.af.signInWithEmailAndPassword(email, password);
  }

  logout(){
    return this.af.signOut();
  }

  hasUser() {
    return this.af.authState;
  }

  loginRestApi(email: string, password: string) {
    return this.http.post(`${environment.url_api}/auth`, {
      email,
      password
    })
    .pipe(
      tap((data: {token: string}) => {
        const token = data.token;
        this.tokenService.saveToken(token);
      })
    )
  }

}
