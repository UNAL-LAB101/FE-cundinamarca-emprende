import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../helpers/services/auth-service.service';

@Component({
  selector: 'app-layout',
  imports: [RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
    constructor(private router: Router, private authService: AuthService, ) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
