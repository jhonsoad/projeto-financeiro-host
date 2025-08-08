import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/commom/header/header.component';
import { FooterComponent } from './components/commom/footer/footer.component';
import { filter } from 'rxjs/operators';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { RegisterModalComponent } from './components/register-modal/register-modal.component';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, HeaderComponent, FooterComponent, LoginModalComponent, RegisterModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'host';
  loggedIn: boolean = false;
  userName: string = 'Joana da Silva Oliveira'
  isLoginModalOpen: boolean = false;
  isRegisterModalOpen: boolean = false;

  private rotasAutenticadas = ['projetoFinanceiro', 'transacoes'];

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const urlAtual = event.urlAfterRedirects || event.url;
        this.loggedIn = this.rotasAutenticadas.some(rota => urlAtual.includes(rota));
      });
  }

  openLoginModal() {
    this.isLoginModalOpen = true;
  }

  closeLoginModal() {
    this.isLoginModalOpen = false;
  }

  openRegisterModal() {
    this.isRegisterModalOpen = true;
  }

  closeRegisterModal() {
    this.isRegisterModalOpen = false;
  }
}
