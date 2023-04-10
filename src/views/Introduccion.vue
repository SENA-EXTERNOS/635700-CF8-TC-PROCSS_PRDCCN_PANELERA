<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info.cst
      h1 Introducción
    
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="flip-up")
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/intro/intro.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Estimado aprendiz, bienvenido a este componente formativo que se enfoca en la calidad de la panela como producto final. Al desarrollar este ciclo de capacitación estará en la capacidad de comprender la validación, el moldeo, el empaque y el almacenamiento del producto terminado de tal manera que se garantice la calidad y su fácil comercialización. A continuación, podrá observar en el video una descripción general del conocimiento que desarrollará en este componente formativo. 
              b Le deseamos que esta experiencia de aprendizaje sea útil para su proceso de formación.

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/MIDYLumpL-U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
