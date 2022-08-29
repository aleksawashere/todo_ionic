import { Injectable } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:Auth) { }

  async register({email, password}){
    try {
      
      await createUserWithEmailAndPassword(this.auth, email, password);
      
      return user;
    } catch (e) {
      return null;
    }
    
  }

  async login({email, password}){
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      return user;
    } catch (e) {
      return null;
    }
  }

  logout() {
    return signOut(this.auth);
  }
}
