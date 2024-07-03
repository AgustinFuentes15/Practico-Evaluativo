import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuarios';

import { AuthService } from '../services/auth.service';
import { FirestoreService } from '../../shared/service/firestore.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  hide = true;

  public registrados: Usuario[] = []

  
  coleccionUsers:Usuario={
    uid: "",
    nombre: "",
     apellido: "",
     email: "",
     password: "",
     rol: ""
  }

constructor(
  public servicioAuth:AuthService,
  public sevicioFirestore:FirestoreService,
  public servicioRuta:Router 
  ){}

async iniciarSesion(){
  const credenciales={
    email: this.coleccionUsers.email,
    password: this.coleccionUsers.password
  }
  const respuesta= await this.servicioAuth.iniciarSesion(credenciales.email, credenciales.password)
  .then(respuesta =>{
alert("se ha logueado con exito")
this.servicioRuta.navigate(['/inicio'])



  })
  .catch(err => {
    alert("hubo un problema al iniciar sesión" + err)
    this.limpiarImputs()
  })
}
   limpiarImputs(){
   const imputs= {
    email: this.coleccionUsers.email="",
     password: this.coleccionUsers.password="",
 
    }

  }
}
