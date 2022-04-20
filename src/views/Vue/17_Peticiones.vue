<template>
  <div class="cuerpo">
    <h1>Peticiones HTTP</h1>

    <h2>Peticiones HTTP con javaScript</h2>

    <p>Para realizar pruebas de peticiones usaremos el sitio <em>https://jsonplaceholder.typicode.com/</em></p>

    <h3>Fetch</h3>
    <p>Las peticiones fetch son peticiones realizadas usando promesas y su forma mas basica es la siguiente.</p>
    <pre v-highlightjs class="codigo"><code class="javascript">fetch('https://jsonplaceholder.typicode.com/posts/')
                .then(response => response.json())
                .then(json => console.log(json))</code></pre>
    <h3>Async y Await</h3>
    <p>Es una forma de hacer las peticiones solo que se le da la orden de esperar para que continue el codigo dentro de la peticion hasta que se resuelva la peticion</p>
    <pre v-highlightjs class="codigo"><code class="javascript">const peticion=async ()=>{
            const res=await fetch("https://jsonplaceholder.typicode.com/posts/")
            const data=await res.json()
            console.log(data);
        }

peticion()</code></pre>

    <h3>Axios</h3>
    <p>Axios es una libreria que nos facilita aun mas las peticiones normalmente tambien se puede instalar con npm pero en este caso usaremos su CDN.</p>

    <pre v-highlightjs class="codigo"><code class="html">&#60;script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.26.1/axios.min.js" &#62;&#60;/script&#62;</code></pre>

    <p>Una vez que se cargue la libreria podemos usar los metodos de axios que son los mismo que el metodo a usar para la peticion en este caso es get</p>

    <pre v-highlightjs class="codigo"><code class="javascript">axios.get("https://jsonplaceholder.typicode.com/posts/").then((res)=>console.log(res.data[0]))</code></pre>


    <h3>Axios con Async y Await</h3>
    <p>Igual que podemos hacer que se espere la solucion de las promesas usando fetch podemos hacerlas usando axios mas o menos de la siguiente forma</p>
    <pre v-highlightjs class="codigo"><code class="javascript">const peticion=async ()=>{
            const {data}=await axios.get("https://jsonplaceholder.typicode.com/posts/");

            console.log(data[0])
        }

    peticion()</code></pre>

    <h2>Peticiones HTTP con Vue</h2>

    <h3>Peticiones con fetch</h3>

    <p>Como podemos recordar tenemos un ciclo de vida del objeto Vue y se aconseja que se creen las peticiones en la parte del ciclo de vida <em class="enfasis">mounted</em></p>
    <pre v-highlightjs class="codigo"><code class="javascript">
    const app=Vue.createApp({
        data(){
            return{
                title:"Peticiones Fetch"
            }
        },
        mounted(){
            this.getPost()
        },
        methods:{
            getPost(){
                fetch("https://jsonplaceholder.typicode.com/posts/")
                .then((res)=>res.json())
                .then((res)=>console.log(res))

            },
            async otroGetPost(){
                const res= await fetch("https://jsonplaceholder.typicode.com/posts/")
                const data= await res.json()
                console.log(res)
            }
        }
    })
    </code></pre>

    <h3>Peticiones con Axios</h3>

    <pre v-highlightjs class="codigo"><code class="javascript">
    const app=Vue.createApp({
        data(){
            return{
                title:"Peticiones Fetch",
                datos:[]
            }
        },
        mounted(){
            this.getPost()
        },
        methods:{
            getPost(){
                axios.get("https://jsonplaceholder.typicode.com/posts/")
                .then((res)=>{
                    this.datos=res.data
                })
            },
            async otroGetPost(){
                const {data}= await axios.get("https://jsonplaceholder.typicode.com/posts/")
                this.datos=data
            }
        }
    })
    </code></pre>


  </div>


</template>