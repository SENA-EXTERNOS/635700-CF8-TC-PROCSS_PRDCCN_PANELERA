<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.cst 2
      h1 Moldeo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.mb-sm-4(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/tema2/img2-1.svg", alt="Molde")
      .col-lg-10(data-aos="fade-left")
        p Uno de los procesos finales de la producción de la panela involucra la fundición, el empaque, el almacenamiento y la distribución; cada uno de los cuales tiene características y condiciones específicas.
        p.mb-0 A continuación, se presentan los elementos asociados al moldeo de la panela:

    TabsB.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-4.py-md-5(titulo="Moldeo de panela en bloque" :icono="require('@/assets/curso/temas/tema2/img2-2.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            p Esta es la última parte del proceso donde se forman las panelas. Estas se pueden moldear de forma redonda, cuadrada o granular. Después que la panela se haya enfriado, se da forma con bandejas o moldes, distribuyendo la miel de manera uniforme con una cuchara o cuchillo de madera.
          .col-md-5
            figure
              img(src="@/assets/curso/temas/tema2/img2-3.png", alt="Moldes de panela en bloque")
      .py-4.py-md-5(titulo="Desmolde de panela en bloque" :icono="require('@/assets/curso/temas/tema2/img2-4.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            p El bloque permanecerá en los moldes hasta que la masa se endurezca a temperatura ambiente; este proceso toma aproximadamente 15 minutos y una vez endurecida, la masa se procede a retirar los moldes.
          .col-md-5
            figure
              img(src="@/assets/curso/temas/tema2/img2-5.png", alt="Panelas en bloque")
      .py-4.py-md-5(titulo="Enfriamiento de panela en bloque" :icono="require('@/assets/curso/temas/tema2/img2-6.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            p Una vez fabricados los bloques de madera, estos entrarán en un túnel enfriado por aire donde permanecerán durante 120 minutos. Una vez que los bloques han salido del túnel de enfriamiento, se colocan en estantes de acero inoxidable y permanecerán hasta que la unidad de control de calidad acepte el lote; el parámetro de liberación del lote es la humedad.
          .col-md-5
            figure
              img(src="@/assets/curso/temas/tema2/img2-7.png", alt="Panelas redondas")
      .py-4.py-md-5(titulo="Envasado de panela en bloque" :icono="require('@/assets/curso/temas/tema2/img2-8.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            p Cuando el grupo alcanza la humedad específica, la panela se coloca en bolsas de plástico y se calienta para ser etiquetada y colocada en cajas de 10 kg.
          .col-md-5
            figure
              img(src="@/assets/curso/temas/tema2/img2-9.png", alt="Panelas redondas empacadas")
      .py-4.py-md-5(titulo="Producto final" :icono="require('@/assets/curso/temas/tema2/img2-10.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            p El bloque de panela, o rapadura, no pasa por ningún tipo de refinado lo que aporta un sabor muy delicioso. Sin refinación, centrifugación u otros métodos químicos, obtenemos un producto que, a diferencia del azúcar blanco, conserva todos los nutrientes del azúcar.
          .col-md-5
            figure
              img(src="@/assets/curso/temas/tema2/img2-11.png", alt="Panelas")

    .row.mt-5
      ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-feather
            h3 Condiciones de ambiente de envase

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-sm-4(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/tema2/img2-12.png", alt="Panelas")
      .col-lg-7(data-aos="fade-left")
        p El alto nivel de rechazo en la venta de la panela, se debe, entre otras cosas, al deterioro de la calidad y la inestabilidad de las condiciones de almacenamiento. La conservación a largo plazo de productos agrícolas perecederos como la panela, está asegurada por una combinación de factores relacionados con el cultivo y procesamiento de la caña de azúcar, así  como las condiciones de transporte y almacenamiento.
        p.mb-0 Cada año la industria agrícola de la panela, incurre en enormes pérdidas debido al deterioro del producto durante el transporte y el almacenamiento. Además, debido a aspectos desconocidos en la producción y comercialización de la panela, se hace difícil reducir las fluctuaciones estacionales de precios. Esta falta de conocimiento es una de las barreras para exportar.

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="flip-up")
        .cajon.color-acento-contenido.p-4(style="background-color: rgba(129, 175, 29, .15)")
          p.mb-0 Por lo tanto, es importante preservar la calidad de las tablas de madera y encontrar las condiciones de embalaje y almacenamiento que permitan mayor duración.


    .row.mt-5
      ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-feather
            h3 Contenido de humedad de equilibrio de panela (CHEp)

    
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="flip-up")
        .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5.img2-13
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-0 Uno de los mayores obstáculos en el transporte de la panela, es la falta de información sobre las condiciones ambientales durante el transporte, sea marítimo o terrestre, y el almacenamiento en los puertos; esto conduce al deterioro del producto, debido a la actividad biológica y a la combinación de sustancias, que se produce en los tiempos de recorrido, ocasionado, entre otras razones, por la reacción de la humedad del ambiente.
                
    p.mb-5 A continuación, se presentan algunos elementos que afectan el contenido de humedad de la panela:

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris1")
          .row.justify-content-center(titulo="Equilibrio de la humedad")
            .col-md-10.mb-4.mb-md-0
              p Al conocer el balance de humedad del producto, bajo diferentes condiciones ambientales, se puede detectar su deterioro y determinar los cambios de situación necesarios para lograr un almacenamiento seguro por un período de tiempo predeterminado.
          .row.justify-content-center(titulo="Exposición de la panela al medio ambiente")
            .col-md-10.mb-4.mb-md-0
              p La panela es higroscópica, es decir, expuesta al medio ambiente absorbe o pierde humedad dependiendo del clima circundante. El parámetro (CHep), hace referencia al contenido de humedad que alcanza la panela después de haber estado expuesta durante un período de tiempo en condiciones de aire de temperatura (T) y humedad relativa (HR) especificas o controladas.
          .row.justify-content-center(titulo="Equilibrio")
            .col-md-10.mb-4.mb-md-0
              p La palabra "equilibrio", se refiere al hecho que el producto no intercambia humedad con el aire circundante. Esto sucede, cuando la presión del vapor de agua en el producto y en el aire es la misma. Si la presión de vapor del producto es más alta que la del ambiente, la humedad se moverá del producto al aire; si es menor que la humedad disponible, la humedad se moverá en la otra dirección.
          .row.justify-content-center(titulo="Almacenamiento de la panela")
            .col-md-10.mb-4.mb-md-0
              p Durante el almacenamiento, la panela alcanza el CHep correspondiente a la temperatura y humedad relativa promedio de la región. La humedad que alcanza por el producto y la calidad del mismo, determinan el tiempo máximo de almacenamiento sin sufrir deterioro.
      .col-lg-4.order-sm-first.order-lg-last.mb-sm-4(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema2/img2-14.png", alt="Panela")

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
