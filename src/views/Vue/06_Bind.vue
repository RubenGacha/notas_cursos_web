<template>
  <div class="cuerpo">
    <h1>Directivas v-bind o :</h1>
    <p>Permite que Vue.js enlace una variable que se encuentra en data con los atributos de una etiqueta.</p>

    <h2>Basico</h2>

    <pre v-highlightjs><code class="html">&#60;img v-bind:src="variable_link" v-bind:alt="variable_text" &#62;</code></pre>

    <h2>atributo y valor individual</h2>

    <pre v-highlightjs><code class="javascript">
    const app = new Vue({
            el:"#app",
            data:{
                key:"alt",
                variable_text:"hola mundo"
            }
        })  
    </code></pre>

    <pre v-highlightjs><code class="html">&#60;img v-bind:src="variable_link" v-bind:[key]="variable_text" &#62;</code></pre>

    <h2>atributo y valores completos</h2>

    <p>cuando se quiera usar un objeto para automatizar los atributos de una etiqueta se debe usar como key los attributos de la clase.</p>

    <pre v-highlightjs><code class="javascript">
    const app = new Vue({
            el:"#app",
            data:{
              image:{
                src:"link",
                alt:"texto alternativo"
              }
            }
        })  
    </code></pre>

    <pre v-highlightjs><code class="html">&#60;img :="image" &#62;</code></pre>

    <h2>bind en clases</h2>

    <p>bind permite crear un array de todas las clases que se insertaran en el elemento html.</p>

    <pre v-highlightjs><code class="html">
    &#60;div :class="['class1','class2','class3']"&#62;
    </code></pre>

    <p>Otra forma de usar bind es usar condicionando la clase usando variables de tipo boolean</p>

    <pre v-highlightjs><code class="html">
    &#60;div :class="{'class1':true,'class2':!true}"&#62;
    </code></pre>
  </div>
</template>