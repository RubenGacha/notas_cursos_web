<template>
  <div class="cuerpo">
    <h1>Propiedades Computadas (computed)</h1>

    <p>Son funciones que son cacheadas, y que son reevaluadas cuando alguna de sus dependencias son cambiadas y nos permite tener datos con algun tipo de logica. ejemplo llevar el total de productos comprados o el valor total de una compra, tambien como operar una palabra he invertirla. </p>

    <p>estas funciones son llamados como si fueran datos en el data por lo tanto no se colocan los parentesis a demas tiene que retornar un valor ya que este es el que sera impreso cuando se llame la funcion, por ultimo no puede llevar parametros.</p>

    <pre v-highlightjs><code class="javascript">const app = new Vue({
            el:"#app",
            data:{
                
            },
            methods:{
                
            },
            computed:{
                funcion:()=>{
                    this.total=0;
                    for(fruta of this.frutas){
                        this.total=this.total+fruta.cantidad
                    }
                    return this.total;
                }
            }
        })</code></pre>
  </div>
</template>