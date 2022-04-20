<template>
  <div class="cuerpo">
    <h1>Directivas Basicas</h1>
    <p>Las directivas basicas que posee Vue son las siguientes.</p>

    <table class="table table-dark table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">Directivas vue</th>
          <th scope="col">Valor por defecto</th>
          <th scope="col">Descripcion</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="enfasis" scope="row">v-text</td>
          <td>Si</td>
          <td>procesa la variable en forma de texto es como usar <em class="enfasis">.textContent</em></td>
        </tr>
        <tr>
          <td class="enfasis" scope="row">v-html</td>
          <td>Si</td>
          <td>procesa la variable y si tiene etiquetas html las integra a la pagina es como usar <em class="enfasis">.innerHTML</em></td>
        </tr>
        <tr>
          <td class="enfasis" scope="row">v-pre</td>
          <td>No</td>
          <td>indica que la variable ya esta preprocesada por ende no se renderiza.</td>
        </tr>
        <tr>
          <td class="enfasis" scope="row">v-once</td>
          <td>No</td>
          <td>solo renderiza una vez el contenido si este cambia no se actualizara el contenido</td>
        </tr>
        <tr>
          <td class="enfasis" scope="row">v-cloak</td>
          <td>No</td>
          <td>lo que permite es ocultar los elementos mientras se renderizan.</td>
        </tr>
        <tr>
          <td class="enfasis" scope="row">v-model</td>
          <td>si</td>
          <td>hace que se comunique el template con el objeto vue asi se pueda obtener un refrezco de informacion instantanea.</td>
        </tr>
      </tbody>
    </table>


    <p>los siguientes son ejemplos de como se pueden usar estas directivas.</p>


    <pre v-highlightjs><code class="html">&#60;div v-text="variable"&#62;&#60;/div&#62;</code></pre>

    <pre v-highlightjs><code class="html">&#60;div v-html="variable"&#62;&#60;/div&#62;</code></pre>

    <pre v-highlightjs><code class="html">&#60;div v-pre&#62;&#123;&#123;variable&#125;&#125;&#60;/div&#62;</code></pre>

    <pre v-highlightjs><code class="html">&#60;div v-once&#62;&#123;&#123;variable&#125;&#125;&#60;/div&#62;</code></pre>

    <pre v-highlightjs><code class="html">&#60;div v-cloak&#62;&#123;&#123;variable&#125;&#125;&#60;/div&#62;</code></pre>


    <h2>v-model</h2>

    <p>V-model es una directiva muy usada en los formularios y dependiendo del componente del formulario tiene un comportamiento o otro su forma basica es:</p>

    <pre v-highlightjs><code class="html">&#60;input type="text" v-model:value="variable"&#62;</code></pre>

    <p class="importante">
      <em>Nota:</em>
      En el caso de v-model tiene modificadores que son: 
      <em>.trim</em> que quita los espacios de inicio y final 
      <em>.lazy</em> hace que no se procese los datos inmediatamente sino hasta que se pierde el foco.
      <em>.number</em> convierte en numero el valor ingresado si el campo es numerico.</p>

    <h3>input text</h3>
    <p>permite integrar el valor del campo con el valor en la variable que se encuentra en data, en formato texto.
    </p>
    <pre v-highlightjs><code class="html">&#60;input type="text" v-model.trim="datos"&#62;</code></pre>
    <h3>input number</h3>
    <p>Son campos donde podemos usar la propiedad number para tratar los datos como numericos.</p>
    <pre v-highlightjs><code class="html">&#60;input type="number" v-model.lazy.number="variable"&#62;</code></pre>
    <h3>checkbox</h3>
    <p>usa una variable tipo array para almacenar todos los valores que se puedan seleccionar en los checkbox, apilando los datos segun se van seleccionando.</p>
    <pre v-highlightjs><code class="html">
&#60;input type="checkbox" value="js" v-model="langs" id="js"&#62;&#60;label for="js"&#62;JavaScript&#60;/label&#62;
&#60;input type="checkbox" value="php" v-model="langs" id="php"&#62;&#60;label for="php"&#62;PHP&#60;/label&#62;
&#60;input type="checkbox" value="py" v-model="langs" id="py"&#62;&#60;label for="py"&#62;Python&#60;/label&#62;
  </code></pre>

  <h3>Radio button</h3>
<p>utiliza una variable en comun para saber el valor seleccionado por el usuario, y depende del valor del radio para saber cual esta seleccionado.</p>
<pre v-highlightjs><code class="html">
&#60;input type="radio" value="m" v-model="gener" id="js"&#62;&#60;label for="js"&#62;hombre&#60;/label&#62;
&#60;input type="radio" value="f" v-model="gener" id="php"&#62;&#60;label for="php"&#62;mujer&#60;/label&#62;
</code></pre>
  </div>
</template>
