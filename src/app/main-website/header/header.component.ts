import { Component,HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isSidebarOpen = false;
  dropdownOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    if (!this.isSidebarOpen) {
      this.dropdownOpen = false;
    }
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.getElementById('mainNavbar');
    const stickyHeader = document.getElementById('mainNavbar');
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
      navbar?.classList.add('nav2');
    } else {
      navbar?.classList.remove('scrolled');
      navbar?.classList.remove('nav2');
    }
  }

  ngOnInit() {}
}
