import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  cards = [
    {
      title: 'MISIÓN',
      description: `Ofrecer soluciones logísticas integrales que impulsen la eficiencia y seguridad en las diversas industrias, proporcionando equipos y servicios confiables que superen las expectativas de nuestros clientes. Nos comprometemos a operar con altos estándares de calidad, responsabilidad ambiental y mejora continua, contribuyendo al desarrollo sostenible del sector.`
    },
    {
      title: 'VISIÓN',
      description: `Ser la empresa líder en soluciones logísticas de la región, destacándonos por nuestra innovación, excelencia operativa, compromiso con la seguridad y el medio ambiente. Aspiramos a fortalecer el crecimiento de nuestros clientes mediante soluciones eficientes, equipos de alta calidad y un servicio excepcional que genere valor a nuestros clientes y a la comunidad.`
    },
    {
      title: 'VALORES',
      description: 'Integridad, responsabilidad, compromiso y servicio al cliente.'
    }
  ];
}
