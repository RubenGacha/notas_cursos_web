<template>
  <div class="cuerpo">
    
    <h1>Eventos y Metodos</h1>

    <h2>Eventos</h2>

        <p>los eventos son las actividades que son ocacionados ya sea por el documento o por un usuario el mas conocido es el evento click. Vue.js tiene la directiva <em class="enfasis">v-on</em> que su abreviacion es <em class="enfasis">@</em>. con esta directiva ejecutamos un metodo cuando sucede el evento.</p>

        <pre v-highlightjs><code class="html">&#60;button v-on:click="method"&#62;click&#60;/button&#62;</code></pre>

        <pre v-highlightjs><code class="html">&#60;button @click="method"&#62;click&#60;/button&#62;</code></pre>

        <p>tenemos una amplia cantidad de eventos uno de los cuales son:</p>

        <ul>
            <li>click</li>
        </ul>

        <h3>Modificadores de v-on</h3>

        <p>v-on tiene modificadores para alterar como reacciona en un evento en concreto</p>

        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">Modificador</th>
                    <th scope="col">Descripcion</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">.stop</td>
                    <td>Para la propagacion del evento</td>
                </tr>
                <tr>
                    <td scope="row">.prevent</td>
                    <td>Evita el comportamiento por defecto</td>
                </tr>
                <tr>
                    <td scope="row">.capture</td>
                    <td>usa el modo capture de addEventListener()</td>
                </tr>
                <tr>
                    <td scope="row">.self</td>
                    <td>se ejecuta si el evento es generado desde el propio elemento</td>
                </tr>
                <tr>
                    <td scope="row">.once</td>
                    <td>hace que solo se escuche la primera vez que se ejecuta el evento</td>
                </tr>
                <tr>
                    <td scope="row">.passive</td>
                    <td>realiza una escucha pasiva.</td>
                </tr>
            </tbody>
        </table>
        <h3>modificadores de teclado</h3>
        <p>Existen modificadores de teclado para lograr hacer combinaciones ejemplo que solo se ejecute una accion si se presiona control mas click, se puede usar el evento click seguido de su modificador. o se puede usar el evento <em class="enfasis">keyup</em> con el modificador de teclado para validar si se presiono una tecla especifica.</p>

<pre v-highlightjs><code class="html">&#60;button @click.ctrl="method"&#62;click&#60;/button&#62;</code></pre>

<pre v-highlightjs><code class="html">&#60;input type="text" v-on:click.keyup.ctrl="mensaje"&#62;</code></pre>


        <ul>
            <li>teclas especiales</li>
            <ul>
                <li>.esc</li>
                <li>.tab</li>
                <li>.enter</li>
                <li>.space</li>
                <li>.up</li>
                <li>.left</li>
                <li>.right</li>
                <li>.down</li>
                <li>.delete</li>
                <li>.caps-lock</li>
            </ul>
            <li>sistema</li>
            <ul>
                <li>.ctrl</li>
                <li>.alt</li>
                <li>.shift</li>
                <li>.meta</li>
            </ul>
            <li>mouse</li>
            <ul>
                <li>.left</li>
                <li>.right</li>
                <li>.middle</li>
            </ul>

            
            
        </ul>

        

    <h2>Metodos</h2>

    <p>Los metodos son funciones que en vue van a ir en la creacion del objeto en este ejemplo se usa Vue2 pero la forma de crear metodos es la misma en ambas versiones de Vue. se puede usar la palabra reservada <em class="enfasis">function</em> o hacer la funcion directamente.</p>

        <pre v-highlightjs><code class="javascript">const app = new Vue({
            el:"#app",
            data:{
                
            },
            methods:{
                disteclick(){},
                disteclick: function(){},
            }
        })</code></pre>

    <h3>Metodos con parametros</h3>
    <p>Si se quiere usar funciones con parametros se debe recordar que al recibir parametros se tiene que colocar parentisis en su llamado ya que puede provocar errores. El resto funciona como cualquier funcion con parametros, en este caso se pasa un parametro opcional en vue 3</p>

    <pre v-highlightjs><code class="html">&#60;button v-on:click="modCount('dis')"&#62;-1&#60;/button>
        &#60;button @click="modCount()"&#62;+1&#60;/button&#62;</code></pre>

    <pre v-highlightjs><code class="javascript">const app=Vue.createApp({
    data(){
        return{
            title:"Contador App - vue",
            count:0
        }
    },
    methods:{
        modCount(ins='add'){
            console.log(ins)
            if(ins==="add"){
                this.count+=1
            }else{
                this.count-=1
            }
        }
    }
})

const mountApp=app.mount("#app")</code></pre>

<h2>Ejemplo con Submit</h2>
<p>Es un elemento especial de tipo formulario y se sugiere usar la metodologia handle por lo cual la funcion en methods sera el nombre <em class="enfasis">handleSubmit</em></p>

<pre v-highlightjs><code class="html">
    &#60;form @submit.prevent="handleSubmit()"&#62;
        &#60;input type="submit"&#62;
    &#60;/form&#62;
</code></pre>
  </div>
</template>