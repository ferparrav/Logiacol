import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';


declare var bootstrap: any;

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    collapseNavbar() {
        const navbar = document.getElementById('navbarNav');
        if (navbar?.classList.contains('show')) {
            new bootstrap.Collapse(navbar).hide();
        }
    }
}
