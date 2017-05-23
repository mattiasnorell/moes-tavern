import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class AngularfireAuthService {

user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) { 
    this.user = afAuth.authState;
  }

  getUser():firebase.User{
    return this.afAuth.auth.currentUser;
  }

  isAuthenticated():boolean{
    return this.afAuth.auth.currentUser != null;
  }

  login(userName:string, password:string) {
    this.afAuth.auth.signInWithEmailAndPassword(userName, password);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
