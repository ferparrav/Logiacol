import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      name: 'Cargador',
      description: 'Equipo diseñado para labores de carga y movimiento de materiales pesados a granel. Su estructura robusta y capacidad d e carga lo hacen ideal para trabajos e n terrenos exigentes como obras civiles, minería o plataformas petroleras.',
      imageUrl: 'assets/img/cargador.png'
    },
    {
      name: 'Excavadora',
      description: 'Equilibra productividad con características tecnológicas fáciles d e usar, u n a nueva y cómoda cabina, un consumo de combustible hasta un 20% menor e intervalos de servicio más largos, lo que reduce los costos hasta u n 20%, p a r a ofrecerle u n a excavadora durable y de bajo costo por hora para aplicaciones de trabajo ligero a medio.',
      imageUrl: 'assets/img/excavadora.png'
    },
    {
      name: 'Manlift',
      description: 'Plataforma d e elevación articulada o telescópica, ideal para trabajos e n altura que requieren acceso seguro y estable, como mantenimiento, instalación de estructuras o luminarias.',
      imageUrl: 'assets/img/manlift.png'
    },
    {
      name: 'Grúa Terex',
      description: 'Grúa hidráulica sobre camión para izaje de cargas pesadas en obras de infraestructura, montaje de equipos industriales y operaciones petroleras. Versatilidad y estabilidad en terrenos irregulares.',
      imageUrl: 'assets/img/grua_terex.png'
    },
    {
      name: 'Grúa Sany',
      description: 'Grúa móvil eficiente y potente, utilizada en montaje de estructuras metálicas, tuberías o equipos pesados. Reconocida por s u rendimiento y maniobrabilidad.',
      imageUrl: 'assets/img/grua_sany.png'
    },
    {
      name: 'Excavadora Cargador',
      description: 'Equipo multifuncional para excavación, carga y nivelación en terrenos de difícil acceso. Ideal para trabajos de zanjeo, compactación ligera y movimiento d e material.',
      imageUrl: 'assets/img/excavador-cargador.png'
    },
    {
      name: 'Catch Tank',
      description: 'Tanque móvil d e gran capacidad usado para almacenamiento temporal de fluidos en procesos como fracturamiento hidráulico, pruebas de pozo o gestión de aguas residuales.',
      imageUrl: 'assets/img/grua_sany.png'
    },
    {
      name: 'Frac Tank',
      description: 'Grúa móvil eficiente y potente, utilizada en montaje de estructuras metálicas, tuberías o equipos\n' +
        'pesados. Reconocida por s u rendimiento y maniobrabilidad.',
      imageUrl: 'assets/img/grua_sany.png'
    },
    {
      name: 'Planta Estadio',
      description: 'Unidad diseñada para suministrar energía eléctrica en locaciones remotas o durante emergencias Compuesta por generadores eléctricos sincronizados, tableros d e distribución, banco d e carga y sistemas d e respaldo. Ideal para operaciones industriales, petroleras y eventos d e gran escala.',
      imageUrl: 'assets/img/grua_sany.png'
    },
    {
      name: 'Planta Tratamiento de Agua Potable',
      description: 'Planta d e tratamiento de agua potable convencional c o n carbón activado, filtración c o n arena y gravilla dando cumplimiento con todos los requerimientos d e la resolución 2115 del 2007, con capacidad de acuerdo a la necesidad. la infraestructura incluye etapas de captación, desarenado, coagulación, floculación, sedimentación, filtración y desinfección, así como u n sistema de almacenamiento y distribución del agua tratada.',
      imageUrl: 'assets/img/grua_sany.png'
    },
    {
      name: 'Planta Tratamiento de Agua Residual',
      description: 'Planta de Tratamiento de Aguas Residuales domesticas, con tratamiento primario, secundario y sistema de desinfección final, cumpliendo con los parámetros establecidos e n l a Resolución 0631 d e 2015 y el Decreto 3930 de 2010. El sistema incluye procesos de pretratamiento (rejas, desarenadores y trampas de grasa), tratamiento primario (sedimentadores), y tratamiento secundario mediante procesos biológicos\n' +
        'como lodos activados o reactores anaerobios tipo UASB, que permiten l a degradación d e materia\n' +
        'orgánica. sistema de desinfección con cloro o rayos UV para asegurar que el efluente tratado cumpla con\n' +
        'los limites máximos permisibles antes de su vertimiento al cuerpo de agua receptor o su posible reúso.\n' +
        'Ademas, cuenta con infraestructura para el manejo y disposición adecuada de los lodos generados\n' +
        'durante el proceso. capacidad d e 10 litros por segundo, por ejemplo, puede atender a una comunidad de\n' +
        'entre 8.000 y 10.000 habitantes, dependiendo de la carga orgánica generada por habitante y e l nivel de\n' +
        'tratamiento requerido según el cuerpo receptor o el uso final del agua tratada.',
      imageUrl: 'assets/img/grua_sany.png'
    },
  ];
}
