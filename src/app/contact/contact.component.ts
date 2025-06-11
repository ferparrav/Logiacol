import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contacto = {
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: ''
  };

  enviarFormulario() {
    console.log('Formulario enviado:', this.contacto);
    alert('Gracias por tu mensaje. Nos pondremos en contacto pronto.');
  }
}
