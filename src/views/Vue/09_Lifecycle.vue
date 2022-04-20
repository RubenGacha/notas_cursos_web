<template>
  <div class="cuerpo">
    <h1>Ciclo de vida del objeto Vue.js</h1>

    <table class="table table-dark table-striped table-hover">
        <thead>
            <tr>
                <th scope="col">Propiedad</th>
                <th scope="col">Descripcion</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td scope="row">New</td>
                <td>Inicia la creacion del objeto</td>
            </tr>
            <tr>
                <td scope="row">beforeCreate</td>
                <td>se ejecuta despues de crear los eventos y el iniciar el ciclo de vida del objeto</td>
            </tr>
            <tr>
                <td scope="row">created</td>
                <td>se ejecuta despues de la creacion de los metodos, observadores pero sin acceder al DOM</td>
            </tr>
            <tr>
                <td scope="row">beforeMount</td>
                <td>se ejecuta antes de insertar el DOM</td>
            </tr>
            <tr>
                <td scope="row">mounted</td>
                <td>se ejecuta al insertar el DOM</td>
            </tr>
            <tr>
                <td scope="row">beforeUpdate</td>
                <td>se ejecuta al detectar un cambio</td>
            </tr>
            <tr>
                <td scope="row">updated</td>
                <td>se ejecuta despues de realizar el cambio</td>
            </tr>
            <tr>
                <td scope="row">beforeDestroy</td>
                <td>se ejecuta antes de destruir la instancia del objeto</td>
            </tr>
            <tr>
                <td scope="row">destroyed</td>
                <td>Se ejecuta despues de destruir la instancia del objeto</td>
            </tr>
        </tbody>
    </table>

    <p class="importante"><em>Nota:</em> se debe recordar que naturalmente el objeto Vue no se destrulle para hacerlo se debe crear un metodo donde se ejecute el siguiente codigo</p>

    <pre v-highlightjs><code class="javascript">const app = new Vue({
            el:"#app",
            data:{
                
            },
            methods:{
                destruir(){
                    this.$destroy();
                }
            },
        })</code></pre>
  </div>
</template>