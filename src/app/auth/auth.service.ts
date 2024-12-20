import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(usuario: string, password: string) {
    if(usuario == 'At72957668' && password == '72957668') {
      sessionStorage.setItem('login', 'true');
    } else {
      alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  }

  logout() {
    sessionStorage.clear();
  }

  isLogin(): boolean {
    return !!sessionStorage.getItem('login');
  }
}
