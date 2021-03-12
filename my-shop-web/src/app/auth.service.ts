import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase'; 
// import firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';


@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private router: ActivatedRoute) { 
    this.user$ = afAuth.authState;
  }

  login() {
    let returnUrl = this.router.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();

  }

}
