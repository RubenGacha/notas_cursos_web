<template>
  <div class="cuerpo">
    <h1>Los Single File Components</h1>

    <p>hace que toda la logica, diseño y estructura de un componente este en una sola hoja y hace que cada bloque de estos esten dentro de una etiqueta.</p>

    <ul>
        <li>template: dentro de este bloque va la estructura del componente etiquetas html</li>
        <li>script: dentro de este bloque va la logica del componente codigo javascript</li>
        <li>style: dentro de este bloque va el diseño del componente css</li>
    </ul>

    <p class="importante"><em>Nota:</em> la etiqueta style se le debe poner la propiedad scope para que solo afecte al componente ya que si se deja sola afectaria a toda la aplicacion</p>

    <pre v-highlightjs class="codigo"><code class="javascript">&#60;template&#62;
&#60;h1&#62;{{title}}&#60;/h1&#62;
&#60;/template&#62;

&#60;script&#62;
export default{
    data:()=>({
        title: "Componente APP"
    })
}
&#60;/script&#62;

&#60;style scoped&#62;

&#60;/style&#62;
</code></pre>


<p>Si el componente necesita mas componentes para funcionar debemos importarlos y colocar en el export una nueva propiedad <em>components</em> para colocar los componentes que necesita en su exportacion.</p>

<pre v-highlightjs class="codigo"><code class="javascript">&#60;template&#62;
&#60;h1&#62;{{title}}&#60;/h1&#62;
&#60;/template&#62;

&#60;script&#62;
import VariableComponente from './components/Componente';

export default{
    components:{
        VariableComponente,
    },
    data:()=>({
        title: "Componente APP"
    })
}
&#60;/script&#62;

&#60;style scoped&#62;

&#60;/style&#62;
</code></pre>

  </div>
</template>