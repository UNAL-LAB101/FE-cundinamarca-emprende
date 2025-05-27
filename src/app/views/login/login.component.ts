import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../helpers/services/auth-service.service';

@Component({
    selector: 'app-login',
    imports: [FormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
  this.authService.login(this.username, this.password).subscribe(success => {
    if (true) {
      //const apiKey = this.authService.getApiKey();
      //console.log('API Key:', apiKey);
      this.router.navigate(['/dashboardSelector']);
    } else {
      alert('Credenciales inválidas');
    }
  });
}
}
