<template>
  <div class="cuerpo">
    <h1>Directivas For</h1>
    <p>la directiva <em class="enfasis">v-for</em> nos permite recorrer un objeto iterable y repetir la estructura html tantas veces como items tenga el objeto iterable.</p>

    <pre v-highlightjs>
        <code class="html">
            &#60;span v-for="<em class="modificar">item</em> in <em class="modificar">objeto_Iterable</em>"&#62;&#60;/span&#62;
        </code>
    </pre>

    <p>En algunas ocasiones es necesario dar a conocer el identificador de cada item para esto se usa un segundo parametro en la iteracion que tendra la posicion del item en el objeto.</p>

    <pre v-highlightjs>
        <code class="html">
            &#60;span v-for="(<em class="modificar">item</em>,<em class="modificar">index</em>) in <em class="modificar">objeto_Iterable</em>" v-bind:key="index"&#62;&#60;/span&#62;
        </code>
    </pre>

  </div>
</template>