import { Component } from '@angular/core';
import {
  faSun,
  faMoon,
  faBars,
  faTimes,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faGithub,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Nature-Z';

  // Icons
  switchIcon = faSun;
  barsIcon = faBars;
  timesIcon = faTimes;
  heartIcon = faHeart;
  facebookIcon = faFacebook;
  instagramIcon = faInstagram;
  twitterIcon = faTwitter;
  githubIcon = faGithub;
  linkedinIcon = faLinkedin;
  googleIcon = faGoogle;

  // Change Background Color
  ChangeBackground() {
    document.querySelector('.main')?.classList.toggle('dark-main');
    this.switchIcon = this.switchIcon == faSun ? faMoon : faSun;
  }

  // Show Navigation
  ShowNavigation() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        document.querySelector('.nav-bar')?.classList.add('nav-bar-on-scroll');
      } else {
        document
          .querySelector('.nav-bar')
          ?.classList.remove('nav-bar-on-scroll');
      }
    });
  }

  // Show Navigation Links
  ShowNavLinks() {
    const navLinks: HTMLElement = document.querySelector('.nav-links')!;
    navLinks.style.right = '0';
  }

  // Hide Navigation Links
  HideNavLinks() {
    const navLinks: HTMLElement = document.querySelector('.nav-links')!;
    navLinks.style.right = '-150px';
  }
}
