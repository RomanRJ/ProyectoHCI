<template>
    <div id="body">
        <div class="titulo">
        <h1>Actividad</h1>
    </div>
    <div class="contenedor">
        <div class="cuadro-grande">
            <iframe  ref="juegos" v-bind:src="rutaAleatoria" frameborder="0" id="juego"></iframe>
        </div>
        <div class="cuadro-pequeno-contenedor">
            <div class="cuadro-pequeno">
                <h2>Tiempo</h2>
                <h3>el tiempo</h3>
                <h2>Actividad</h2>
                <h3>la actividad</h3>
                <h2 ref="titulosJuegos">{{ textoIndiceGrupo }}</h2>
            </div>
            <div class="cuadro-pequeno">
                <a class="boton" href="#" @click="seleccionarRutaAleatoria" >Siguiente actividad</a>  
                
        </div>
        </div>
    </div>
    </div>
</template>

<script>
let actividadSegundos=0;
let antes=0;
var datosHeatmap = [];

export default {
    components: {
  },
    data() {
    return {
      rutas: [
        'https://www.cokitos.com/juegos/chicomates/juego/',
        'https://www.cokitos.com/juegos/math-magic/',
        'https://www.cokitos.com/juegos/calculos-verdadero-falso/',
        'https://www.cokitos.com/juegos/sequence/',
        'https://www.cokitos.com/juegos/laberinto-nocturno/',
        'https://www.cokitos.com/juegos/wp-content/uploads/2020/memoria-among-us/',
        'https://www.cokitos.com/juegos/pintar-laberinto/',
        'https://www.cokitos.com/juegos/pixel-art-adultos/',
        'https://html5.gamedistribution.com/5d296c421b544c8a83c5fbfe865a8a87/'

      ],
      indiceGrupo: 0,
      rutaAleatoria: ''
    };
  },
  computed: {
    textoIndiceGrupo() {
      if (this.indiceGrupo === 0) {
        return 'COLOREAR';
      } else if (this.indiceGrupo === 1) {
        return 'MATEMATICAS';
      } else {
        return 'MEMORIA';
      }
    }
  },
    mounted(){
        this.seleccionarRutaAleatoria();
    const vueScripts = [
        "https://webgazer.cs.brown.edu/webgazer.js",
        "https://webgazer.cs.brown.edu/jquery.js",
        "https://cdn.plot.ly/plotly-latest.min.js"
    ];

    // Itera sobre el array y crea elementos script para cada URL
    vueScripts.forEach(scriptUrl => {
      let script = document.createElement("script");
      script.setAttribute("src", scriptUrl);
      script.onload = this.initializeWebGazer; 
      document.head.appendChild(script);
    });
    
    },
    methods:{
        initializeWebGazer() {
        var iframe = document.getElementById('juego');
        webgazer.setRegression('ridge').setTracker('TFFacemesh').setGazeListener(function(data, elapsedTime) {
            if (data == null) {
                return;
            }          
           datosHeatmap.push(data);
            var rectActividad = iframe.getBoundingClientRect();
           let ahora=Date.now();
           if(ahora-antes>=1000){
            antes=ahora;
            if (data.x>=rectActividad.left&&data.x<=rectActividad.right&&data.y>=rectActividad.top&&data.y<=rectActividad.bottom){
                actividadSegundos++;
                console.log("Actividad: ",actividadSegundos);
            }

           }

    }
    ).begin();
    
        webgazer.showPredictionPoints(false);
        webgazer.showVideoPreview(false);
        webgazer.removeMouseEventListeners();
        console.log("tiempo final actividad:",actividadSegundos);//probar esto cuando se tenga lo de detener el webgazer
        },
        beforeUnmount(){
        webgazer.end();
    },
    detener(){
            webgazer.pause();
            this.crearHeatmap(datosHeatmap);
            this.$router.push('/Heatmap', () => {}, { replace: true })
        },
        crearHeatmap(data){
            var xData = data.map(function(point) {
                return point.x;
            });
            var yData = data.map(function(point) {
                return point.y;
            });

            // Crear un heatmap con Plotly.js
            var heatmapData = [{
                z: xData,
                x: xData,
                y: yData,
                type: 'heatmap',
                colorscale: 'Viridis'
            }];
            var datos=[{
                x:xData,
                y:yData
                }
            ]
            var datosWebGazer=JSON.stringify(datos);


            var heatmapLayout = {
                title: 'Heatmap de Seguimiento de la Mirada',
                xaxis: { title: 'Coordenada X' },
                yaxis: { title: 'Coordenada Y' }
            };
            
            sessionStorage.setItem('data', JSON.stringify(heatmapData));
            sessionStorage.setItem('layout', JSON.stringify(heatmapLayout));
           
        },
        seleccionarRutaAleatoria() {

    if (this.indiceGrupo === 0) {
      // Primer grupo (rutas 1 a 3)
      const indiceRuta = Math.floor(Math.random() * 3);
      this.$refs.juegos.src=this.rutas[indiceRuta];

    } else if (this.indiceGrupo === 1) {
      // Segundo grupo (rutas 4 a 6)
      const indiceRuta = Math.floor(Math.random() * 3) + 3;
      this.$refs.juegos.src=this.rutas[indiceRuta];

    } else if (this.indiceGrupo === 2) {
      // Tercer grupo (rutas 7 a 9)
      const indiceRuta = Math.floor(Math.random() * 3) + 6;
      this.$refs.juegos.src=this.rutas[indiceRuta];

    } else if (this.indiceGrupo === 3) {
      this.detener();
    }
    
    // Actualiza el contador para el próximo clic, asegurándote de que no supere 2
    this.indiceGrupo = (this.indiceGrupo + 1) % 4;
  }
   
    },


    

};

</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

#body {
    font-family: 'Open Sans', sans-serif;
    background: #F4E5C2;
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
}

.titulo h1 {
    text-align: center;
    margin: 10px;
}

.contenedor {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
}

.cuadro-grande {
    border-radius: 10px;
    color: #323232;
    font-size: 1.2rem;
    background-color: rgba(235, 255, 250, 0.5);
    padding: 20px;
    margin: 0px 10px 20px 20px;
    flex: 3; /* Cambiamos a 3 para que ocupe el 75% del ancho */
    width: 75%; /* Nuevo */
}

.cuadro-grande .thumb img {
    max-width: 35%;
    height: auto;
    display: block;
    margin: 10% auto;
}
iframe{
    width: 100%;
    height: 100%;
}

.cuadro-pequeno-contenedor {
    display: flex;
    flex-direction: column;
    margin: 0px 20px 20px 10px;
    flex: 1; /* Cambiamos a 1 para que ocupe el 25% del ancho */
    width: 25%; /* Nuevo */
}

.cuadro-pequeno {
    border-radius: 10px;
    color: #323232;
    font-size: 1.2rem;
    background-color: rgba(235, 255, 250, 0.5);
    padding: 20px;
    margin-bottom: 20px;
}

.cuadro-pequeno h2 {
    text-align: center;
    margin:  20px;
}
.cuadro-pequeno h3 {
    text-align: center;
    margin: 40px;
}

.cuadro-pequeno .thumb img {
    max-width: 100%;
    height: auto;
    display: block;
}


.boton {
    border-radius: 5px;
    background: #6DB193;
    text-decoration: none;
    color: #323232;
    font-size: 28px;
    text-align: center;
    display: block;
    margin: 40px 8px;
}
</style>