import { Injectable, inject } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  authState,

} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  #auth = inject(Auth);


  constructor() {}

  async signUp(email: string, password: string): Promise<void> {
    try {
      let user = await createUserWithEmailAndPassword(
        this.#auth,
        email,
        password
      );
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  }

  async signIn(email: string, password: string): Promise<void> {
    try {
      let user = await signInWithEmailAndPassword(this.#auth, email, password);
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  }

  async signout(): Promise<void> {
    await signOut(this.#auth);
  }

  // Global State 
  isUserLoggedIn(): any {
    return authState(this.#auth);
  }
}
