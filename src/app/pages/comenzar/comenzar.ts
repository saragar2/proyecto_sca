import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comenzar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './comenzar.html',
  styleUrl: './comenzar.css',
})
export class Comenzar {
  usuario: String = '';
  contraseña: String = '';
  nombre: String = '';
  edad: String = '';
  grupoSang: String = '';
  rinones: String = '';
  estadoSalud: String = '';
  religion: String = '';

  private backendUrl = 'http://localhost:3000/api/users';

  // Comenzar(usuario: String, contraseña: String, nombre: String, edad: String, grupoSang: String, rinones: String, estadoSalud: String, religion: String)
  // {
  //   this.usuario = usuario;
  //   this.contraseña = contraseña;
  //   this.nombre = nombre;
  //   this.edad = edad;
  //   this.grupoSang = grupoSang;
  //   this.rinones = rinones;
  //   this.estadoSalud = estadoSalud;
  //   this.religion = religion;
  // }

  constructor(private http: HttpClient) {}

  // crearUsuario(usuario: String, contraseña: String, nombre: String, edad: String, grupoSang: String, rinones: String, estadoSalud: String, religion: String): void
  // {
  //   const nuevoUsuario = this.Comenzar(this.usuario, contraseña, nombre, edad, grupoSang, rinones, estadoSalud, religion);
  //   this.saveUser();
  // }

  guardarUsuario(): void
  {
    const nuevoUsuario: Comenzar =
    {
      usuario: this.usuario,
      contraseña: this.contraseña,
      nombre: this.nombre,
      edad: this.edad,
      grupoSang: this.grupoSang,
      rinones: this.rinones,
      estadoSalud: this.estadoSalud,
      religion: this.religion
    }

    this.http.post(this.backendUrl, nuevoUsuario).subscribe({
      next: (response) => {
        console.log('Usuario creado exitosamente:', response);
      },
      error: (error) => {
        console.error('Error al crear el usuario:', error);
      }
    })
  }

  saveUser(): void
  {
    localStorage.setItem('user', JSON.stringify(this));
  }
}
