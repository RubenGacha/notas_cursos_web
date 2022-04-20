<template>
  <div class="cuerpo">
    <h1>Libreria Vuex</h1>
    <p>Para hacer mas facil la comunicacion entre componentes se crea la libreria Vuex que se debe colocar despues de importar la libreria vue, la principal caracteristica de vuex es que crea variables globales que compartiran los componentes.</p>

    <p>para poder crear las variables gobales debemos crear un store (tienda) que contendra los datos que tendran en comun los componentes despues se debe llamar ese store en el objeto Vue.js</p>

    <pre v-highlightjs>
        <code class="javascript">
            const store = new Vuex.Store({})
            new Vue({
                el:'#app',
                store:store
            })
        </code>
    </pre>

    <p>los datos que se manejan en el store de vez de usar data se usa <em class="enfasis">state</em> y para poderlo usar en los template se usa la sintasis <em class="enfasis">$store.state.Variable</em></p>

    <pre v-highlightjs>
        <code class="javascript">

            Vue.component('titulo',{
                template:`
                    &#60;h1&#62;&#123;&#123;$store.state.numero&#125;&#125;&#60;/h1&#62;
                `
            })


            const store = new Vuex.Store({
                state:{
                    numero:10
                }
            })
            new Vue({
                el:'#app',
                store:store
            })
        </code>
    </pre>

    <p>Cuando queremos hacer funciones que manejen los datos debes de usar methods se usa la palabra reservada <em class="enfasis">mutations</em> el cual puede recibir el componente <em class="enfasis">state</em> o no cuando no tiene mas parametros pero si tiene mas parametros se debe usar el state y en la llama se envia los otros parametros sin tener encuenta el state, pero se debe indicar para poder operar los datos que se tienen en state.</p>

    <p>Para poder usar las mutations se debe indicar que se usara una funcion de state con la propiedad <em class="enfasis">commit</em> </p>

    <pre v-highlightjs>
        <code class="javascript">

            Vue.component('titulo',{
                template:`
                    &#60;h1&#62;&#123;&#123;$store.state.numero&#125;&#125;&#60;/h1&#62;
                    &#60;button @click="$store.commit('aumentar')"&#62;+&#60;/button&#62;
                    &#60;button @click="$store.commit('disminuirCantidad(2)')"&#62;-2&#60;/button&#62;
                `
            })


            const store = new Vuex.Store({
                state:{
                    numero:10
                },
                mutations:{
                    aumentar(){
                        this.state.numero ++
                    }
                    disminuir(state){
                        state.numero++
                    }
                    disminuirCantidad(state,n){
                        state.numero-=n
                    }
                }
            })
            new Vue({
                el:'#app',
                store:store
            })
        </code>
    </pre>

    <p>las <em class="enfasis">Action</em> son funciones que son usadas cuando se tiene que consultar algo fuera de la aplicacion por ejemplo al backends y se deben ejecutar con algun evento</p>

    <pre v-highlightjs>
        <code class="javascript">

            Vue.component('titulo',{
                template:`
                    &#60;h1&#62;&#123;&#123;$store.state.numero&#125;&#125;&#60;/h1&#62;
                    &#60;button @click="$store.commit('aumentar')"&#62;+&#60;/button&#62;
                    &#60;button @click="$store.commit('disminuirCantidad',2)"&#62;-2&#60;/button&#62;
                `
            })


            const store = new Vuex.Store({
                state:{
                    cursos:[]
                },
                mutations:{
                    llenardatos(state, cursosAccion){
                        state.cursos =cursosAccion
                    }
                },
                actions:{
                    obtenerCursos: async function({commit}){
                        const data =await fetch('datos.json');
                        const cursos=await data.json();
                        commit('llenardatos',cursos)
                    }
                }
            })
            new Vue({
                el:'#app',
                store:store
            })
        </code>
    </pre>

    <p>para facilitar la sintasis de la escritura cuando se quiere usar el store existe los <em class="enfasis">mapState</em>, <em class="enfasis">mapMutation</em> y los <em class="enfasis">mapAction</em>.</p>

    <p class="importante"><em>NOTA:</em> Al usar un map ya no se necesita usar el store ni sus propiedades los usaremos como si fueran datos o funciones normales</p>

    <table class="table table-dark table-striped table-hover">
        <thead>
            <tr>
                <th scope="col">propiedad</th>
                <th scope="col">¿donde se usa?</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td scope="row">mapState</td>
                <td>computed</td>
            </tr>
            <tr>
                <td scope="row">mapMutations</td>
                <td>methods</td>
            </tr>
            <tr>
                <td scope="row">mapActions</td>
                <td>methods</td>
            </tr>
        </tbody>
    </table>
    <p >para poder usar los componentes en vuex se deben importar o usar el objeto con su propiedad.</p>

    <pre v-highlightjs>
        <code class="javascript">

            Vue.component('titulo',{
                template:`
                    &#60;h1&#62;&#123;&#123;numero&#125;&#125;&#60;/h1&#62;
                    &#60;button @click="aumentar"&#62;+&#60;/button&#62;
                `,
                computed:{
                    ...Vuex.mapState(['numero'])
                },
                methods:{
                    ...Vuex.mapMutations(['aumentar','disminuir'])
                }
            })


            const store = new Vuex.Store({
                state:{
                    numero:10
                },
                mutations:{
                    aumentar(){
                        this.state.numero ++
                    }
                    disminuir(state){
                        state.numero++
                    }
                }
            })
            new Vue({
                el:'#app',
                store:store
            })
        </code>
    </pre>
  </div>
</template>