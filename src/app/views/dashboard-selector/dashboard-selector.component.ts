import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-selector',
  templateUrl: './dashboard-selector.component.html',
  styleUrls: ['./dashboard-selector.component.scss']
})
export class DashboardSelectorComponent {

  constructor(private router: Router) {}

  logout() {
    // Lógica para cerrar sesión
    console.log('Sesión cerrada');
    this.router.navigate(['']);
  }

  navigateToForm() {
    this.router.navigate(['/form']);
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  navigateToRedmine() {
    // Abrir en una nueva pestaña
    window.open('http://ec2-34-200-104-165.compute-1.amazonaws.com:53430/', '_blank');
  }
}