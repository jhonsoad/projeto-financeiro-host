import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';
import { ModalComponent } from '../commom/modal/modal.component';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, ModalComponent],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.css' 
})
export class LoginModalComponent {
  email = '';
  password = '';
  errorMessage: string | null = null;

  @Input() isLoginModalOpen: boolean = false;

  @Output() onClose = new EventEmitter<void>();
  @Output() onLoginSucces = new EventEmitter<{ email: string }>();

  private authService = inject(AuthService);
  private router = inject(Router);

  onLogin(): void {
    this.errorMessage = null;
    this.authService.login({ email: this.email, password: this.password }).subscribe({
      next: () => {
        this.closeModal()
        this.router.navigate(['/projetoFinanceiro']);
      },
      error: (err) => {
        this.errorMessage = 'Credenciais inválidas. Tente novamente.';
        console.error(err);
      }
    });
  }

  closeModal() {
    this.onClose.emit();
  }
}