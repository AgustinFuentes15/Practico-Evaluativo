import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuarios';
//servicio de autentificacion 
import { AuthService } from '../services/auth.service';

import { Router } from '@angular/router';
//servicio de Firestore
import { FirestoreService } from '../../shared/service/firestore.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  hide = true;

  

  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    rol: '',
  }

 
  coleccionUsuarios: Usuario[] = []

  //referenciamos a nuestros servicios 
  constructor(
    public servicioAuth: AuthService,
    public servicioRutas: Router,
    public servicioFirestore:FirestoreService 
  ) { }


  //funcion de registro
  async registro() {
   


    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password
    }
    
    const respuesta = await this.servicioAuth.registrar(credenciales.email, credenciales.password)
   
      .then(respuesta => {
        alert(" ha agregado un usuario con éxito")

      
        this.servicioRutas.navigate(['/inicioLog'])
      })
          
          .catch(error => {
            alert("hubo un problema al registrar un nuevo usuario")
          })
      
       
          const uid =await this.servicioAuth.obtenerUid();
         
          this.usuarios.uid=uid
          this.guardarUser()
  }


  
async guardarUser(){
  this.servicioFirestore.agregarUser(this.usuarios, this.usuarios.uid)
  .then(res=> {
    console.log(this.usuarios)
  })
  .catch(err => {
    console.log('error=>', err)
  })
}

  

  //funcion para vaciar form
  limpiarImputs() {
    const imputs = {
      uid: this.usuarios.uid = "",
      nombre: this.usuarios.nombre = "",
      apellido: this.usuarios.apellido = "",
      email: this.usuarios.email = "",
      password: this.usuarios.password = "",
      rol: this.usuarios.rol = ""
    }
  }

}


