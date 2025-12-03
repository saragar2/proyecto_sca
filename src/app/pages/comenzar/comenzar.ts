import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-comenzar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLinkWithHref],
  templateUrl: './comenzar.html',
  styleUrls: ['./comenzar.css']
})
export class Comenzar {

  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {

    // FORMULARIO LOGIN
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

    // FORMULARIO REGISTRO
    this.registerForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      age: ['', Validators.required],
      blodGroup: ['', Validators.required],
      kidneys: ['', Validators.required],
      religion: ['', Validators.required],
      healthStatus: ['', Validators.required]
    });
  }

  // ---------------------
  // 🚪 LOGIN
  // ---------------------
  login() {
    if (this.loginForm.invalid) return;

    const { userName, password } = this.loginForm.value;

    if (this.loginForm.valid) {
    this.http.post<{ message: string }>(
      'http://localhost:3000/api/users/login',
      { userName, password }
    ).subscribe({
      next: res => {
        alert(res.message);
        this.router.navigate(['/perfil']);
        sessionStorage.setItem('user', JSON.stringify({ userName, password }))
        alert(res.message);
      },
      error: err => {
        console.error(err);
        alert('Login fallido. Credenciales incorrectas.');
      }
    });
  }
}

  // ---------------------
  // 📝 REGISTRO
  // ---------------------
  register() {
    if (this.registerForm.invalid) return;

    const data = this.registerForm.value;

    this.http.post(
      'http://localhost:3000/api/users/register',
      data
    ).subscribe({
      next: () => alert('Registro exitoso'),
      error: err => alert('Error: ' + err.message)
    });
  }

  }
