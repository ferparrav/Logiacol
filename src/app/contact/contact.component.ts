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

  onSubmit() {
    const form = document.querySelector('form') as HTMLFormElement;
    const formData = new FormData(form);

    fetch('https://formsubmit.co/ferparrav@outlook.com', {
      method: 'POST',
      body: formData
    }).then(response => {
      if (response.ok) {
        alert('✅ Mensaje enviado. Pronto nos pondremos en conctacto.');
        form.reset();
      } else {
        alert('❌ Error al enviar el mensaje.');
      }
    }).catch(error => {
      alert('⚠️ Error de red. Intenta más tarde.');
    });
  }
}
