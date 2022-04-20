<template>
<div class="cuerpo">
    <h1>Primeros Pasos</h1>

    <p>Para iniciar a aprender Vue se usa la conexion por <em class="enfasis">CDN</em> ya que nos permite conocer mejor el objeto Vue y sus propiedades. una vez que se realiza la conexion al framework de Vue.js debemos instanciar el objeto para esto podemos usar <em class="enfasis">Vue.createApp()</em> o <em class="enfasis">new Vue()</em> dependiendo la version de vue que estemos usando.</p>

    <h3>Vue 2</h3>
    <pre v-highlightjs><code class="javascript">const app=new Vue({})</code></pre>

    <h3>Vue 3</h3>
    <pre v-highlightjs><code class="javascript">const app=Vue.createApp({})</code></pre>

    <hr>

    <p>una vez creado el objeto tenemos que indicarle en donde va a actuar o renderizar el contenido para esto tenemos que crear un contenedor tambien llamado <em class="enfasis">Template</em> ya que puede almacenar una plantilla que sera actualizada por Vue para esto se debe colocar un identificador a este.</p>
    
    <h2>Ejemplo en el html</h2>

    <pre v-highlightjs><code class="html">&#60;div id="app"&#62; &#60;/div&#62;</code></pre>

    <hr>
    <h2>Formas de identificar al template</h2>

<h3>Vue 2</h3>
<pre v-highlightjs>
<code class="javascript"><!--
-->const app=new Vue({
    el:"#app"
})</code>
</pre>

<h3>Vue 3</h3>    
<pre v-highlightjs>
<code class="javascript"><!--
-->const mountApp=app.mount("#app")</code>
</pre>

<hr>
<h2>Relacionar Datos Entre Vue y Template</h2>

<p>Al realizar la union entre el contenedor y el objeto Vue podemos crear los datos que seran comprartidos tanto por el objeto Vue como por el contenedor para esto se usa la palabra clave del objeto Vue <em class="enfasis">data</em> este recibe un objeto que contiene un diccionario con llave valor, donde la llave sera el nombre de la variable y el valor el valor de este.</p>

<h3>Vue 2</h3>
<pre v-highlightjs>
<code class="javascript"><!--
-->const app = new Vue({
            el:"#app",
            data:{
                v_string:"Hola mundo",
                v_numero:31,
                v_array:["esto","es","un","array"],
                v_objeto:{
                    nombre:"manzana",
                    cantidad:5,
                    precio:1500.65
                },
                v_array_objeto:[
                    {nombre:"batman", enemigo:"guason"},
                    {nombre:"superman", enemigo:"lex lutor"},
                    {nombre:"spiderman", enemigo:"duende verde"}
                ]
            }
        })
    </code>
</pre>

<h3>Vue 3</h3>
<pre v-highlightjs>
<code class="javascript"><!--
-->const app = {
            data(){
                return {
                    v_string:"Hola mundo",
                    v_numero:31,
                    v_array:["esto","es","un","array"],
                    v_objeto:{
                        nombre:"manzana",
                        cantidad:5,
                        precio:1500.65
                    },
                    v_array_objeto:[
                        {nombre:"batman", enemigo:"guason"},
                        {nombre:"superman", enemigo:"lex lutor"},
                        {nombre:"spiderman", enemigo:"duende verde"}
                    ]
                }
            }
        }

        Vue.createApp(app).mount("#app")
    </code>
</pre>


<pre v-highlightjs>
<code class="javascript">
const app = {
    data:()=>({
            v_string:"Hola mundo",
            v_numero:31,
            v_array:["esto","es","un","array"],
            v_objeto:{
                nombre:"manzana",
                cantidad:5,
                precio:1500.65
            },
            v_array_objeto:[
                {nombre:"batman", enemigo:"guason"},
                {nombre:"superman", enemigo:"lex lutor"},
                {nombre:"spiderman", enemigo:"duende verde"}
            ]
    })
}

Vue.createApp(app).mount("#app")
    </code>
</pre>

<hr>
<p>Para usar las variable en el contenedor se usa la interpolacion que se reconoce por <em class="enfasis">&#123;&#123;</em> y <em class="enfasis">&#125;&#125;</em> las cuales se abren con doble llave y se cierran con doble llaves dentro de estas va el nombre de la variable o una operacion sencilla de javascript, aqui Vue remplaza por su valor cuando renderiza el template.</p>

</div>
</template>