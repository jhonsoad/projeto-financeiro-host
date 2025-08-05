import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../commom/modal/modal.component';
import { AuthService } from '../../services/auth/auth.service'; // Usando o AuthService para simular

@Component({
  selector: 'app-register-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, ModalComponent],
  templateUrl: './register-modal.component.html',
  styleUrl: './register-modal.component.css'
})
export class RegisterModalComponent {
  name = '';
  email = '';
  password = '';
  errorMessage: string | null = null;

  @Input() isRegisterModalOpen: boolean = false;
  @Output() onClose = new EventEmitter<void>();

  private authService = inject(AuthService);
  private router = inject(Router);

  onRegister(): void {
    this.errorMessage = null;
    this.authService.register({ username: this.name, email: this.email, password: this.password }).subscribe({
      next: () => {
        console.log('onRegister next')
        this.router.navigate(['/statement']);
        this.onClose.emit();
      },
      error: (err) => {
        this.errorMessage = 'O registro falhou. Tente novamente.';
        console.error(err);
      }
    });
  }

  closeModal() {
    this.onClose.emit();
  }
}