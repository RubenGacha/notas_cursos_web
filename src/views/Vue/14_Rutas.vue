<template>
  <div class="cuerpo">
    <h1>Rutas</h1>

    <p>Las rutas son usadas para modificar el contenido que se muestra en una pagina para esto se usa <em class="enfasis">router-view</em>, que remplaza el contenido con el contenido que indique la vista donde apunta la ruta.</p>

    <p>En el archivo de rutas las rutas es un array de objetos y sus valores son path, name y component.</p>

    <pre v-highlightjs><code class="javascript">
        export default new Router({
            mode:'history',
            base: process.env.BASE_URL,
            routes:[{
                path:'/',
                name:'home',
                component:()=>import('./views/Home.vue')
            }
            ]
        })
    })</code></pre>

    <p>para indicarle a vue que use una ruta creada en algun modulo se usa la etiqueta <em class="enfasis">router-link</em></p>

    <pre v-highlightjs><code class="javascript">&#60;router-link to="/"&#62;palabra del link &#60;/router-link&#62;</code></pre>

    <p>La ruta que esta activa tiene la clase <em class="enfasis">a.router-link-exact-active</em> esta nos permitira darle clases CSS al enlace que esta activo.</p>

    <h2>Rutas con parametros</h2>

    <p>para usar variables o parametros en la url se deben colocar los dos puntos <em class="enfasis">:</em> antes de la variable en la propiedad path.</p>

    <p>Para poder obtener las variables enviadas por la url en las vistas o componentes se debe usar <em class="enfasis">&#123;&#123;$route.params.Nombre_VARIABLE&#125;&#125;</em></p>

    <pre v-highlightjs><code class="javascript">
        export default new Router({
            mode:'history',
            base: process.env.BASE_URL,
            routes:[{
                path:'/datos/:id',
                name:'home',
                component:()=>import('./views/datos.vue')
            }
            ]
        })
    })</code></pre>

    <p>Cuando se quiere hacer una ruta mas dinamica en la etiqueta <em class="sintesis">router-link</em> se debe usar su propiedad <em class="enfasis">to</em> que acepta un objeto con los valores name y params y usar v-bind o los dos puntos, esto para que interprete como codigo lo que se pasa en el parametro to.</p>

    <pre v-highlightjs><code class="html">
    &#60;router-link :to="{name: 'nameVista', params: {namevariable: valorVariable} }"&#62;
    </code></pre>

    <p>Nota: cuando usamos router-link sin la barra raiz <em class="enfasis">/</em> tomara como inicio de la ruta la ruta donde se llame el router-link</p>

    <h3>Propiedades y metodos del objeto $router</h3>

    <p>En algunos casos deseamos usar rutas pero no en los lugares mencionados anteriormente por ejemplo en la propiedad methods de vue. para movernos entre rutas usamos la siguiente linea de codigo</p>

    <pre v-highlightjs><code class="javascript">this.$router.push('/')</code></pre>

    <p>El objeto $router tambien guarda el historico de navegacion en otras palabras las rutas visitadas por el usuario, con numeros negativos va hacia atras mientras positivos hacia adelanta</p>

    <pre v-highlightjs><code class="javascript">this.$router.go(1)</code></pre>

  </div>
</template>