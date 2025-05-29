import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormDataService } from '../../helpers/services/form-data-service.service';
import { AuthService } from '../../helpers/services/auth-service.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { buildRedmineCustomFields } from '../../helpers/utils/redmine-utils';
import { HttpClient } from '@angular/common/http';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-form-container',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  serverResponse: { success: boolean, message: string } | null = null;

  // Opciones para los campos de selección
  businessTypeOptions = [
    'Asociación', 'Pre cooperativa', 'Cooperativa', 'Corporación',
    'Fundación', 'En Comandita', 'S.A', 'EAT', 'S.A.S', 'LTDA',
    'Idea de negocio', 'Otra'
  ];

  economicSectorOptions = [
    'Agrícola', 'Pecuario', 'Agroindustrial', 'Artesanal',
    'Minería', 'Comercial', 'Industrial', 'Transporte',
    'Turismo', 'Otra'
  ];

  economicActivityOptions = [
    'Acopio', 'Comercialización', 'Transformación', 'Agroindustria',
    'Producción', 'Exportación', 'Importación', 'Otra'
  ];

  differentialFocusOptions = [
    'Indígena', 'Afro', 'Raizal', 'Víctima del conflicto',
    'LGBTIQ+', 'Joven', 'Personas con discapacidad', 'Otra'
  ];

  infrastructureTypeOptions = [
    'Propia', 'Arrendada', 'Familiar', 'Comodato'
  ];

  sections = [
    { id: 'basic-info', icon: 'bi-person-vcard', title: 'Información Básica' },
    { id: 'contact-info', icon: 'bi-telephone', title: 'Contacto' },
    { id: 'business-info', icon: 'bi-building', title: 'Negocio' },
    { id: 'financial-info', icon: 'bi-cash-coin', title: 'Financiero' }
  ];

  activeSection: string = 'basic-info';

  constructor(
    private formDataService: FormDataService,
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller
  ) {
    this.form = this.fb.group({
      // Información Básica
      companyName: ['', [Validators.maxLength(100)]],
      naturalPerson: ['', [Validators.required, Validators.maxLength(100)]],
      municipality: ['', [Validators.required, Validators.maxLength(50)]],
      meetingDate: ['', [Validators.required]],

      // Información de Contacto
      email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{7,15}$/)]],
      address: ['', [Validators.required, Validators.maxLength(200)]],
      responsible: ['', [Validators.required, Validators.maxLength(100)]],
      gender: ['', [Validators.required]],

      // Tipo de Emprendimiento
      businessType: ['', [Validators.required]],
      otherBusinessType: [''],

      // Actividad Económica
      economicSector: ['', [Validators.required]],
      otherEconomicSector: [''],
      economicActivity: ['', [Validators.required]],
      otherEconomicActivity: [''],

      // Información de Socios/Afiliados
      membersCount: ['', [Validators.required, Validators.min(0)]],
      differentialMembers: ['', [Validators.min(0)]],
      differentialFocus: [''],
      otherDifferentialFocus: [''],

      // Infraestructura e Instalaciones
      infrastructureType: ['', [Validators.required]],
      area: ['', [Validators.min(0)]],

      // Aliados Comerciales
      commercialPartners: [''],
      publicPartnersDetails: [''],
      privatePartnersDetails: [''],
      mixedPartnersDetails: [''],

      // Información Financiera
      workingCapital: ['', [Validators.min(0)]],
      entityDebt: ['', [Validators.min(0)]],
      hasCredits: [''],

      // Contexto
      motivation: ['', [Validators.maxLength(500)]],
      vision: ['', [Validators.maxLength(500)]],
      fearsStrengths: ['', [Validators.maxLength(500)]],
      differentialGroup: ['', [Validators.maxLength(100)]],
      weeklyTime: ['', [Validators.maxLength(50)]]
    });
  }

  ngOnInit(): void {
    this.formDataService.formData$.subscribe(data => {
      if (data) {
        this.form.patchValue(data);
      }
    });

    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          this.scrollTo(fragment);
        }, 100);
      }
    });
  }

  scrollTo(section: string) {
    this.activeSection = section;
    try {
      const element = document.getElementById(section);
      if (element) {
        const yOffset = -70;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
        history.replaceState(null, '', `${location.pathname}#${section}`);
      }
    } catch (e) {
      console.error('Error al hacer scroll:', e);
    }
  }

  async submitForm(): Promise<void> {
    this.submitted = true;
    this.markAllAsTouched();

    if (this.form.valid) {
      this.serverResponse = null;
      this.form.disable();

      try {
        const customFields = buildRedmineCustomFields(this.form);
        
        const payload = {
          issue: {
            project_id: 'solicitudes-pruebas',
            tracker_id: 10,
            subject: this.form.get('companyName')?.value || 'Solicitud sin nombre de empresa',
            description: 'Esta es una solicitud enviada desde el formulario del frontend.',
            custom_fields: customFields
          }
        };

        const response: any = await this.http.post('/api/issues.json', payload).toPromise();
        
        this.serverResponse = {
          success: true,
          message: 'Formulario enviado correctamente.'
        };
        
        // Guardar datos en el servicio
        this.formDataService.updateFormData(this.form.value);
        this.form.reset();
      } catch (error) {
        console.error('Error al enviar a Redmine:', error);
        this.serverResponse = {
          success: false,
          message: 'Error al enviar el formulario. Por favor intenta nuevamente.'
        };
      } finally {
        this.form.enable();
      }
    } else {
      this.scrollToFirstInvalidControl();
    }
  }

  resetForm(): void {
    if (confirm('¿Estás seguro que deseas limpiar todo el formulario?')) {
      this.form.reset();
      this.formDataService.resetFormData();
      this.submitted = false;
      this.serverResponse = null;
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['']);
  }

  private markAllAsTouched(): void {
    Object.values(this.form.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  private scrollToFirstInvalidControl(): void {
    const firstInvalidControl = document.querySelector('.ng-invalid');
    if (firstInvalidControl) {
      firstInvalidControl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      firstInvalidControl.classList.add('highlight-error');
      setTimeout(() => {
        firstInvalidControl.classList.remove('highlight-error');
      }, 3000);
    }
  }

  getFieldError(field: string): string | null {
    const control = this.form.get(field);
    if (control?.errors && (control.touched || this.submitted)) {
      if (control.errors['required']) {
        return 'Este campo es requerido';
      } else if (control.errors['email']) {
        return 'Ingrese un correo electrónico válido';
      } else if (control.errors['pattern']) {
        return 'Formato inválido';
      } else if (control.errors['min']) {
        return `El valor mínimo es ${control.errors['min'].min}`;
      } else if (control.errors['maxlength']) {
        return `Máximo ${control.errors['maxlength'].requiredLength} caracteres`;
      }
    }
    return null;
  }

  // Método de conveniencia para acceder a los controles del formulario
  get f() { 
    return this.form.controls; 
  }
}