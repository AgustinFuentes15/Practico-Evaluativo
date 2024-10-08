import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
 
private usuariosCollection:AngularFirestoreCollection<Usuario>

  constructor(private database : AngularFirestore) { 
    this.usuariosCollection=this.database.collection<Usuario>('usuarios');
  }

  agregarUser(usuario:Usuario, id:string){
    

    return new Promise(async(resolve,reject)=>{
      
      try {
        
        usuario.uid = id 
        const resultado =await this.usuariosCollection.doc(id).set(usuario)
        resolve(resultado)
        

      }
   
      catch(error){
        reject(error)
      }
    })
  }
}
