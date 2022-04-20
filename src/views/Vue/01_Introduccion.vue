<template>
  <div class="cuerpo">
    <h1>Introduccion a Vue.js</h1>

    <p>Es un framework de javascript progresivo, reactivo y es conciderado como el framework intermedio para aprender comparado a angular o react.</p>

    <p>Vue utiliza virtual DOM, esto hace que primero procese el html que tiene que procesar y luego lo envia al DOM esto con el fin de aumentar la velocidad de procesamiento.</p>
      
    <p>En vue 3, nace la posibilidad de poder desarrollar con dos APIs. la <em class="enfasis">Options API</em> y la <em class="enfasis">Composition API</em>.</p>

    <ul>
      <li>la <em class="enfasis">Composition API</em> esta diseñada para mejorar el crecimiento de un proyecto y facilita la reutilizacion de componentes por el momento solo esta en vue 3.</li>
      <li>la <em class="enfasis">Options API</em> esta diseñada para permitir trabajar mediante opciones en el objeto Vue</li>
    </ul>

    <p class="importante">
      <em>Nota:</em>
      <em>progresivo:</em>
      hace referencia a que no es necesario construir la aplicacion desde el framework sino se puede utilizar en la parte en que se necesite, tecnicamente vue administraria partes pequeñas de la aplicacion.
      <em>reactivo:</em>
      hace que devulva o actualice la informacion en el momento o en un instante sin actualizar toda la pagina y sirven para hacer aplicaciones single page aplication (SPA).
    </p>
    <hr>
    <p>Existen dos metodos para poder usar Vue.js el primero es por <em class="enfasis">CDN</em> (content Delivery network) o (red de distribucion de contenido) y el segundo es por <em class="enfasis">CLI</em> (command-line interface) o (interfaz de linea de comandos).</p>

    <h2>CDN</h2>

    <p>En el primer caso se puede usar una etiqueta <em class="enfasis">script</em> para llamar el framework remotamente o desde el archivo js de Vue.js, se debe tener encuenta que hay dos tipos de archivos uno de desarrollo y el otro de produccion, por ultimo esta etiqueta script debe ir al inicio para que nos cargue primero la libreria vue antes que el resto del proyecto.</p>

    <h3>Buscar la version mas actual Vue 3</h3>

    <pre v-highlightjs><code class="html">&#60;script src="https://unpkg.com/vue@next"&#62;&#60;/script&#62;</code></pre>

    <h3>Desarrollo vue 3</h3>

    <pre v-highlightjs><code class="html">&#60;script src="https://unpkg.com/vue@3.2.31/dist/vue.global.js"&#62;&#60;/script&#62;</code></pre>

    <h3>Produccion Vue 3</h3>

    <pre v-highlightjs><code class="html">&#60;script src="https://unpkg.com/vue@3.2.31/dist/vue.global.prod.js"&#62;&#60;/script&#62;</code></pre>

    <h3>Desarrollo vue 2</h3>

    <pre v-highlightjs><code class="html">&#60;script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"&#62;&#60;/script&#62;</code></pre>

    <h3>Produccion Vue 2</h3>

    <pre v-highlightjs><code class="html">&#60;script src="https://cdn.jsdelivr.net/npm/vue@2"&#62;&#60;/script&#62;</code></pre>


    <h2>CLI Vue</h2>

    <p>En el segundo caso se usa un gestor de paquetes el mas usado es <em class="enfasis">npm</em> que viene en la instalacion de <em class="enfasis">Node.js</em> y para comprobar si ya esta instalado node.js se usa el siguiente comando en alguna terminal. </p>

    <pre v-highlightjs><code class="plaintext">node -v</code></pre>

    <p>Ya sabiendo que tenemos instalado Node.js debemos comprobar si tenemos instalado globalmente el CLI de vue, para esto usamos el comando en una consola</p>

    <pre v-highlightjs><code class="plaintext">vue --version</code></pre>
    
    <p>Si no se tiene instalado el CLI de vue se debe ejecutar el siguiente comando para instalar el CLI de Vue y luego volvemos a comprobar que ya tengamos una version del CLI instalada.</p>

    <pre v-highlightjs><code class="plaintext">npm install -g @vue/cli</code></pre>


    <p>ya que se tiene presente que todo esta bien se puede iniciar la creacion del proyecto vue. existen dos formas de crear el proyecto el primero por consola y el segundo por interfaz grafica.</p>

    <h3>Crear por consola</h3>
    <pre v-highlightjs><code class="plaintext">vue create <em class="modificar">nombreProyecto</em></code></pre>

    <h3>Crear por interfaz grafica</h3>
    <pre v-highlightjs><code class="plaintext">vue UI</code></pre>

    <p>la configuracion que podemos usar para usar en este curso es la siguiente:</p>
    <ul>
      <li>se selecciona "Manually select features"</li>
      <li>paquetes a usar "Choose Vue version","Babel","Router","Vuex",</li>
      <li>version de vue "3.x"</li>
      <li>Use history mode for router? "Y"</li>
      <li>Where do you prefer placing config for Babel "In dedicated config files"</li>
      <li>Save this as a present for future projects? "N" </li>
    </ul>
  </div>
</template>
