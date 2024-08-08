import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    private auth: AngularFireAuth,
    private servicioFirestore: AngularFirestore
  ){}

  async obtenerUid() {

    const user = await this.auth.currentUser


    if (user == null) {
      return null
    } else {
      return user.uid
    }
  }

  obtenerUsuario(email: string) {
    return this.servicioFirestore.collection('usuarios', ref => ref.where('email', '==', email)).get().toPromise()
  }


  registrar(email: string, password: string) {

    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  iniciarSesion(email: string, password: string) {

    return this.auth.signInWithEmailAndPassword(email, password);
  }


  cerraSesion() {

    return this.auth.signOut();
  }
}

