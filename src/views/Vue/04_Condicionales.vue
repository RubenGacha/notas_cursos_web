<template>
  <div class="cuerpo">
    <h1>Directivas Condicionales</h1>
    <p>En directivas condicionales podemos usar la estructura <em class="enfasis">v-if</em> que funciona igual que cualquier if en programacion permitiendo crear la estructura html que corresponda a la condicion que se cumple y la directiva <em class="enfasis">v-show</em> que usa los valores booleanos para mostrar o no mostrar un elemento este se carga y solo es visual si es mostrado o no.</p>

    <h2>Show</h2>

    <pre v-highlightjs><code class="html">&#60;span v-show="valor_booleano"&#62;&#60;/span&#62;</code></pre>

    <h2>If - Else</h2>

    <pre v-highlightjs>
        <code class="html">
            &#60;span v-if="condicion"&#62;&#60;/span&#62;
            &#60;span v-else-if="condicion"&#62;&#60;/span&#62;
            &#60;span v-else&#62;&#60;/span&#62;
        </code>
    </pre>

  </div>
</template>