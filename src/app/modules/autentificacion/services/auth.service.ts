import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(public auth:AngularFireAuth) { }
  
async obtenerUid(){

  const user = await this.auth.currentUser
   

  if(user ==null){
    return null
  }else{
return user.uid
  }
}



  registrar(email:string, password:string){

    return this.auth.createUserWithEmailAndPassword(email,password);
  }

  iniciarSesion(email:string, password :string){
  
  return this.auth.signInWithEmailAndPassword(email,password);
  }

 
  cerraSesion(){
   
    return this.auth.signOut();
  }
}

