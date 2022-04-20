<template>
  <div class="cuerpo">
    <h1>Forma basica de Componentes</h1>

    <p>los componentes son trozos de codigo que nos permite reutilizarlo, en el flujo de nuestra pagina. a su vez tratar cada componente de forma aislada y unica. se debe tener presente que solo actuara dentro de las etiquetas que contienen el identificador del objeto Vue.js (#app) </p>

    <p>La forma en que se crean los componentes es usando el objeto Vuepero se deben seguir algunas reglas</p>
    <ul>
        <li>se puede usar comilla simple <kbd>alt</kbd>+<kbd>39</kbd> para los template de una sola linea pero se debe usar comilla invertida si se desea mas de una linea <kbd>alt</kbd>+<kbd>96</kbd></li>
        <li>Se debe crear una etiqueta contenedora normalmente un div </li>
    </ul>

    <h2>Vue 2</h2>
    <pre v-highlightjs><code class="javascript">Vue.component('Nombre_componente',{
    template:'&#60;h1&#62;saludo&#60;/h1&#62;' 
})</code></pre>

    <h2>Vue 3</h2>
    <pre v-highlightjs><code class="javascript">const app=Vue.createApp({})
app.componet('Nombre_componente',{
    template:'&#60;h1&#62;saludo&#60;/h1&#62;' 
})</code></pre>



<p class="importante"><em>Nota: </em> como normalizacion se recomienda iniciar con mayuscula el nombre del componente.</p>

    <p>Para poder usar este componente solo se debe crear una etiqueta con el nombre del componente en este caso. </p>
    <pre v-highlightjs><code class="html">&#60;nombre_componente&#62;&#60;/nombre_componente&#62;</code></pre>

    <p>los componentes tienen varias propiedades similares que el objeto Vue.js pero se tratan de diferente forma ejemplo la propiedad data.</p>

    <pre v-highlightjs><code class="javascript">Vue.component('nombre_componente',{
    template: `&#60;div&#62;
    &#60;h1&#62;&#123;&#123;saludo&#125;&#125;&#60;/h1&#62;
    &#60;div&#62;`,
    data(){
        return {
            saludo:"hola mundo"
        }
    }
})</code></pre>
  </div>
</template>