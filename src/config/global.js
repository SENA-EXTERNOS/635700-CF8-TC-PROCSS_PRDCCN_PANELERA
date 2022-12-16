export default {
  global: {
    componenteFormativo: 'Calidad del producto final',
    descripcionCurso:
      'La conservación a largo plazo de un producto agrícola perecedero como la panela, es el resultado de la interacción de factores relacionados con el cultivo y procesamiento de la caña de azúcar, con diferentes prioridades como el empaque, el mantenimiento de estándares y el alto flujo en la comercialización de la panela.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/bp-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/bp-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/bp-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Verificación del producto terminado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Buenas prácticas de manufactura en instalaciones para el procesamiento de panela Buenas prácticas de manufactura para equipos de trefilado de panelas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Requisitos fisicoquímicos de la panela',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Aditivos permitidos en la elaboración de panela',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              'Requisitos para la producción de panela a partir de mieles vírgenes en las centrales de acopio y procesamiento',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Condiciones sanitarias de los trapiches',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Moldeo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Condiciones de ambiente de envase',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Contenido de humedad de equilibrio de panela (CHEp)',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Empaque y almacenamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Principales materiales utilizados en el proceso de producción panelera',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Almacenamiento',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Factores que influyen en el deterioro de la panela',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Manifestaciones del deterioro de la panela',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo:
              'Normas para el empaque y embalaje de la panela en Colombia',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Comercialización de la panela',
            hash: 't_3_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Producto final',
      referencia:
        'Sánchez, S., Carrera, J. & Castillo, H. (2007). Variables que afectan la calidad de la panela procesada en el departamento del Cauca. <em>Biotecnología en el Sector Agropecuario y Agroindustrial: BSAA</em>, 5(1), 17-27.',
      tipo: 'Artículo',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=6117629',
    },
    {
      tema: 'Producción de panela',
      referencia:
        'Guerrero, M., & Escobar, J. (2015). Eficiencia técnica de la producción de panela. <em>Revista de Tecnología, 14</em>(1), 107-116.',
      tipo: 'Artículo',
      link: 'https://revistas.unbosque.edu.co/RevTec/article/view/1853',
    },
    {
      tema: 'Buenas prácticas',
      referencia:
        'Saldarriaga, P. (2021). <em>Elaboración de una guía de buenas prácticas de manufactura (BPM) para la producción de panela en la asociación de productores agropecuarios del Municipio de Inza y TierraDentro (Proagromit).</em>',
      tipo: 'Artículo',
      link: 'http://repositorio.uan.edu.co/handle/123456789/2641',
    },
    {
      tema: 'Elaboración de la panela',
      referencia:
        'TvAgro. (12 de marzo de 2019). <em>Cuál es el Proceso de Elaboración de la Panela</em> [Video]. Youtube. - <em>TvAgro por Juan Gonzalo Angel.</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hgUj0tKM8OA',
    },
  ],
  glosario: [
    {
      termino: 'Aglutinantes',
      significado:
        'sustancia que, por efecto del calor, reúne los sólidos coloidales y colorantes de los jugos de la caña, y que se tienen como impurezas en la elaboración de la panela.',
    },
    {
      termino: 'Almacenamiento',
      significado:
        'Conservación de la panela por períodos de tiempo prolongados donde se deben tener en cuenta tres factores: grado de higroscopicidad del producto, temperatura y humedad relativa del ambiente en el cual se deposita.',
    },
    {
      termino: 'Antiespumante',
      significado:
        'Cera que se debe adicionar cuando la concentración de las mieles esté entre 70 y 75 °Brix, para evitar la formación excesiva de espuma.',
    },
    {
      termino: 'Empaque',
      significado:
        'Envoltura que se utiliza para contener y, por tanto, proteger un producto; en el caso de la panela, comúnmente, es la hoja de caña y de plátano, costales de fique y bolsas de papel.',
    },
    {
      termino: 'Humedad',
      significado:
        'La determinación del contenido de humedad de los alimentos es una propiedad importante y ampliamente usada en el procesamiento y el control de calidad, ya que indica la cantidad de agua involucrada en su composición. La medida de la humedad en procesos de deshidratación consiste en la determinación de la pérdida de masa que sufre un alimento cuando se somete a una combinación tiempo-temperatura adecuada. El residuo que se obtiene se conoce como "sólidos totales" o "materia seca".',
    },
    {
      termino: 'Humedad relativa',
      significado:
        'Relación entre la presión parcial del vapor de agua y la presión de vapor de equilibrio del agua a una temperatura dada. La humedad relativa depende de la temperatura y la presión del sistema de interés.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'Conjunto de condiciones y medidas necesarias durante la producción, almacenamiento, distribución y preparación de alimentos para asegurar que una vez ingeridos, no representen un riesgo para la salud.',
    },
    {
      termino: 'Microorganismos',
      significado:
        'Seres vivos muy pequeños que sólo se pueden ver a través de un microscopio, empero participan en diversos procesos metabólicos, ecológicos y biotecnológicos convirtiéndose en un factor clave para el funcionamiento de los sistemas biológicos y el mantenimiento de la vida en la Tierra.',
    },
    {
      termino: 'Moldeo',
      significado:
        'La panela no debe moldearse muy caliente ya que se daría origen a la formación de huecos en el centro, además de que se forman burbujas de aire que, al tratar de salir, invierten la sacarosa y dejan en el producto orificios de color blanco, los cuales dañan la apariencia del producto. El moldeo debe realizarse de forma ágil y constante para garantizar el peso con una tolerancia de aproximadamente 5 %; al moldear la panela, las gaveras deben estar lavadas, desinfectadas y húmedas, al igual que el mesón, para así evitar que el producto adquiera un color indeseable en su superficie de contacto con la gavera.',
    },
    {
      termino: 'Panela',
      significado:
        'Alimento para consumo humano. Producto sólido que se obtiene a través de la evaporación y concentración de los jugos de la caña de azúcar.',
    },
    {
      termino: 'Temperatura',
      significado:
        'Magnitud escalar que mide la cantidad de energía térmica que tiene un cuerpo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Floriano, J., Manjarres, C., Yasno, C., Tique, F. & García, J. (2002). <em>Manejo integrado del complejo de barrenadores de la caña panelera en el Piedemonte del Caquetá.</em> AGROSAVIA.',
      link: 'https://repository.agrosavia.co/handle/20.500.12324/1212',
    },
    {
      referencia:
        'Guevara, J. (2014). <em>Modelo computacional de la combustión del bagazo de caña en una cámara de combustión tipo ward-cimpa de una hornilla panelera</em> [Tesis de grado]. Universidad de los Andes.',
      link: 'https://repositorio.uniandes.edu.co/handle/1992/12574',
    },
    {
      referencia:
        'Resolución 779 de 2006. [Ministerio de Salud]. Por la cual se establece el reglamento técnico sobre los requisitos sanitarios que se deben cumplir en la producción y comercialización de la panela para consumo humano y se dictan otras disposiciones.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Resolucion-779-de-2006.pdf',
    },
    {
      referencia:
        'Osorio, G. (2007). <em>Buenas prácticas agrícolas (BPA) y buenas prácticas de manufactura (BPM) en la producción de caña y panela.</em> CORPOICA.',
      link:
        'https://repository.agrosavia.co/bitstream/handle/20.500.12324/18313/43120_50541.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        "Quizanga, V. (2009). <em>Diseño del plan y documentación para la implementación de buenas prácticas de manufactura para la elaboración de panela granulada en la planta Ingapi</em> [<em>Bachelor's thesis</em>, QUITO/EPN/2009].",
      link: 'https://bibdigital.epn.edu.ec/bitstream/15000/1683/1/CD-2014.pdf',
    },
    {
      referencia:
        'Regino, J., Vásquez O., Barbosa, S., Torres, N., Cardona, W., Rivera, G. & Tinoco, B. (2019). <em>Buenas prácticas de manufactura y su contribución al sector panelero.</em> Corporación Universitaria Minuto de Dios.',
      link: 'https://hdl.handle.net/10656/7870',
    },
    {
      referencia:
        'Restrepo, M. (2013). <em>Empaque para comercialización de la panela redonda tipo exportación hacia los Estados Unidos</em> [Proyecto de grado]. Universidad Católica de Pereira.',
      link:
        'https://repositorio.ucp.edu.co/bitstream/10785/1696/2/CDMDI336.pdf',
    },
    {
      referencia:
        'Rodríguez, L., Alarcón, Y. & Vergara, R. (2018). Estudio de caracterización de la actividad productiva del sector de la caña panelera en la hoya del río Suárez. NOVUM, <em>Revista de Ciencias Sociales Aplicadas, 1(8), 32-48</em>.',
      link: 'https://repositorio.unal.edu.co/handle/unal/66964',
    },
    {
      referencia:
        'Suárez, I. (2019). <em>Estrategias para la producción más limpia en el sector de cacao y caña panelera en el Valle del Cauca bajo el marco del Plan Nacional de Negocios Verdes en Colombia</em> [Proyecto de grado]. Universidad Autónoma de Occidente.',
      link:
        'https://red.uao.edu.co/bitstream/handle/10614/11611/T08904.pdf;jsessionid=DDCF9AAEC3C1C7436AD325A876204B90?sequence=5',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
