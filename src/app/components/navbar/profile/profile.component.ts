import { Component, WritableSignal } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { User } from '../../../interfaces/user';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { closeDropdown } from '../closeDropdown';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    RouterModule,
    MatIconModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  localeUser! :WritableSignal<User |undefined>
  constructor(private authService:AuthService){
    this.localeUser =authService.localUser

    closeDropdown("profileDropdown")
  }
  //todo RESET
  onClick(){ this.authService.resetLocalUser() }
}