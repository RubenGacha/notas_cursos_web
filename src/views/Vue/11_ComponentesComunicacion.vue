<template>
  <div class="cuerpo">
    <h1>Comunicacion entre componentes</h1>

    <p>En este ejemplo se quiere comunicar componentes con una relacion de padre a hijo creamos los componentes de la siguiente forma.</p>

    <pre v-highlightjs><code class="javascript">Vue.component('padre',{
       template: `&#60;div&#62;
        &#60;h2&#62;Componente Padre&#60;/h2&#62;
        &#60;hijo&#62;&#60;/hijo&#62;
       &#60;div&#62;`,
    })</code></pre>

    <pre v-highlightjs><code class="javascript">Vue.component('hijo',{
       template: `&#60;div&#62;
        &#60;h4&#62;Componente Hijo&#60;/h4&#62;
       &#60;div&#62;`,
    })</code></pre>

    <p>Para poder pasar valores debemos usar la propiedad <em class="enfasis">props</em> que es un array de nombres de atributos recibidos cuando se invoca la etiqueta del componente esto solo funciona para comunicar del padre al hijo.</p>


    <pre v-highlightjs><code class="javascript">Vue.component('padre',{
       template: `&#60;div&#62;
        &#60;h2&#62;Componente Padre&#60;/h2&#62;
        &#60;hijo :numero='numeroPadre'&#62;&#60;/hijo&#62;
       &#60;div&#62;`,
       data(){
           return{
               numeroPadre:0
           }
       }
    })</code></pre>

    <pre v-highlightjs><code class="javascript">Vue.component('hijo',{
       template: `&#60;div&#62;
        &#60;h4&#62;Componente Hijo&#60;/h4&#62;
        &#60;h5&#62;&#123;&#123;numero&#125;&#125;&#60;/h5&#62;
       &#60;div&#62;`,
       props:['numero']
    })</code></pre>

  <p>para poder comunicar los datos del hijo al padre se debe crear eventos y recibirlos en el padre para que este reaccione al evento.</p>

  <pre v-highlightjs><code class="javascript">Vue.component('padre',{
       template: `&#60;div&#62;
        &#60;h2&#62;Componente Padre&#60;/h2&#62;
        &#60;hijo :numero='numeroPadre' @nombreCreadoEvento='nombrePadre=$event'&#62;&#60;/hijo&#62;
       &#60;div&#62;`,
       data(){
           return{
               numeroPadre:0
               nombrePadre:''
           }
       }
    })</code></pre>

    <pre v-highlightjs><code class="javascript">Vue.component('hijo',{
       template: `&#60;div&#62;
        &#60;h4&#62;Componente Hijo&#60;/h4&#62;
        &#60;h5&#62;&#123;&#123;numero&#125;&#125;&#60;/h5&#62;
       &#60;div&#62;`,
       props:['numero'],
       data(){
           return{
               nombre:'ruben'
           }
       },
       mounted(){
           this.$emit('nombreCreadoEvento',this.nombre)
       }
    })</code></pre>

    <p>para facilitar la comunicacion entre componentes se crea la libreria <em class="enfasis">vuex</em> que facilita la comunicacion entre componentes y soluciona el error que sucede cuando se modifica un valor de los props desde el hijo ya que el padre no lo detecta.</p>
  </div>
</template>