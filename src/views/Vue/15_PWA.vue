<template>
  <div class="cuerpo">
    <h1>PWA- Progressive Web App</h1>
    <h2>Aplicacion web progresiva</h2>

    <p class="importante"><em>Nota:</em> Esta parte no es parte de vue sino se puede hacer directamente en una pagina web y javascript puro, sin necesitar de vue.</p>

    <p>Utiliza tecnologias web al 100% y estan destinadas a ser una aplicacion Multiplataforma, haciendo que se pueda tratar como una aplicacion de escritorio, pero se conecta a la red obligando que solo puedan funcionar con el protocolo SSL haciendo que los datos transmitidos sean seguros aunque esto no indica que solo se pueda usar cuando estemos conectados se puede usar fuera de linea.</p>

    <p>hay aspectos a tener encuenta a la hora de crear una PWA</p>
    <ul>
        <li>metadata</li>
        <li>Iconos de la aplicacion</li>
        <li>Manifest.json</li>
        <li>ServiceWorker</li>
    </ul>

    <h3>MetaData</h3>

    <p>Le indica al navegador que nuestra pagina esta optimizada para pwa</p>

    <pre v-highlightjs class="codigo"><code class="html">
    &#60;!-- modificar color barra de estado Android --&#62;
    &#60;meta name="theme-color" content="#41b883"&#62;

    &#60;!-- optimizaciones de SEO --&#62;
    &#60;meta name="MobileOptimized" content="width"&#62;
    &#60;meta name="HandheldFriendly" content="true"&#62;

    &#60;!-- modificar barra de estado IOS --&#62;
    &#60;meta name="mobile-web-app-capable" content="yes"&#62;

    &#60;meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"&#62;
    &#60;!-- posibles valores default, black, black-translucent --&#62;
    </code></pre>
    
    <h3>Iconos de aplicacion</h3>

    <p>lo primero que se hace es agragar el favicon en una etiqueta link en este caso se cambia  en type <em class="enfasis">image/x-icon</em> a <em class="enfasis">image/png</em> para hacer algo diferente. se recuerda que esta imagen debe ser de 16 x 16 hay otras etiquetas link para hacer que apple use el icono escogido.</p>
    <pre v-highlightjs class="codigo"><code class="html">
    &#60;link rel="shortcut icon" href="favicon.png" type="image/png"&#62;
    &#60;link rel="apple-touch-icon" href="favicon.png"&#62;
    &#60;link rel="apple-touch-startup-image" href="favicon.png"&#62;
    </code></pre>

    <p>Como recomendacion se deben crear diferentes tamaños de los iconos comenzando del mas grande al mas pequeño, para esto se usa la siguiente pagina <em class="enfasis">https://onlinepngtools.com/resize-png</em>. los tamaños son:</p>

    <ul>
        <li>16 x 16</li>
        <li>32 x 32</li>
        <li>64 x 64</li>
        <li>128 x 128</li>
        <li>256 x 256</li>
        <li>512 x 512</li>
        <li>1024 x 1024</li>
    </ul>

    <p>tambien se debe crear un icono de 192 por 192 para maskable.app <em>https://maskable.app/</em> y la imagen se le puede poner maskable.png</p>
    <h3>Manifest.json</h3>

    <p>Se debe crear un archivo json y crear una etiqueta link con la propiedad rel=manifest, se puede comprobar que quedo registrado llendo a herramientas de desarrollador del navegador y buscar la pestaña aplication despues se busca la pestaña manifest, dede aparecer warnings que son las configuraciones que no hemos hecho pero ya aparece el archivo manifest.json</p>

    <pre v-highlightjs class="codigo"><code class="html">
    &#60;link rel="manifest" href="manifest.json"&#62;
    </code></pre>

    <p>Se puede encontrar la documentacion de manifest en las siguientes direcciones y el siguiente codigo, es como lo necesario para que el manifest este correcto</p>
    <ul>
        <li>https://developer.mozilla.org/es/docs/Web/Manifest</li>
        <li>https://developer.mozilla.org/en-US/docs/Web/Manifest/orientation</li>
    </ul>


    <h4>manifest.json</h4>
    <pre v-highlightjs class="codigo"><code class="json">
{
    "name":"Contador APP Vue",
    "short_name":"contador Vue",
    "description":"contador APP Vue es una aplicacion que forma parte del curso de vue 3 desde cero.",
    "background_color":"#35495e",
    "theme_color":"#41b883",
    "start_url":"./?umt_source=web_app_manifest",
    "scope":"./",
    "lang":"es-CO",
    "display":"fullscreen",
    "orientation":"portrait",
    "icons":[
        {
            "src":"./img/favicon.png",
            "sizes":"16x16",
            "type":"image/png"
        },{
            "src":"./img/icon32.png",
            "sizes":"32x32",
            "type":"image/png"
        },{
            "src":"./img/icon64.png",
            "sizes":"64x64",
            "type":"image/png"
        },{
            "src":"./img/icon128.png",
            "sizes":"128x128",
            "type":"image/png"
        },{
            "src":"./img/maskable.png",
            "sizes":"192x192",
            "type":"image/png",
            "purpose":"maskable"
        },{
            "src":"./img/icon256.png",
            "sizes":"256x256",
            "type":"image/png"
        },{
            "src":"./img/icon512.png",
            "sizes":"512x512",
            "type":"image/png"
        },{
            "src":"./img/icon1024.png",
            "sizes":"1024x1024",
            "type":"image/png"
        }
    ]
}
    </code></pre>

    

    <h3>ServiceWorker</h3>
    <p>una forma que se usa para usar el serviceWorker es hacer dos archivos js el primero para ser llamado desde la pagina web y como puente para el otro archivo.</p>

    <h4>load.js</h4>
    <pre v-highlightjs class="codigo"><code class="javascript">
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js").then(
            reg=>console.log("Registro Exitoso")
        ).catch(
            err=>console.log(err)
        )
    }
    </code></pre>

    <h4>sw.js</h4>
    <pre v-highlightjs class="codigo"><code class="javascript">
const CACHE_NAME="mi_nombre"
const urlsToCache=[
    "./",
    "continuar con todas las urls y rutas que se quieran cachar se pueden imagenes y todo"
]

self.addEventListener("install",e=>{
    e.waitUntil(
        caches.open(CACHE_NAME).then(
            cache => cache.addAll(urlsToCache).then(
                ()=>self.skipWaiting()
            ).catch(
                err=>console.log(err)
            )
        )
    )
})

self.addEventListener("activate",e=>{
    const cacheWhiteList=[CACHE_NAME]
    e.waitUntil(
        caches.keys().then(
            cacheNames=>{
                return Promise.all(
                    cacheNames.map(
                        cacheName=>{
                            if(cacheWhiteList.indexOf(cacheName)===-1){
                                return caches.delete(cacheName)
                            }
                        }
                    )
                )
            }
        ).then(
            ()=>self.clients.claim()
        )
    )
})

self.addEventListener("fetch",e=>{
    e.respondWith(
        caches.match(e.request).then(
            res=>{
                if(res){
                    return res
                }else{
                    return fetch(e.request)
                }
            }
        ).catch(
            ()=>caches.match("./pages/fallback.vue")
        )
    )
})
    </code></pre>
  </div>
</template>