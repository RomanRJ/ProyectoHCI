<template>
    <div id="body">
        <div class="titulo">
        <h1>Test</h1>
    </div>
    <div class="contenedor">
        <div class="columna-uno">
            <div class="thumb">
                <img src="./img/1.png" alt="paz">
            </div>
            <a class="boton" href="#" @click="seleccionarRutaAleatoria" >Siguiente seccion</a>
            <h2>{{ textoIndiceGrupo }}</h2>
        </div>
        <div class="columna-dos">
            <iframe  ref="juegos" v-bind:src="rutaAleatoria" frameborder="0" id="juego"></iframe>
        </div>
        <div id="distractor" class="columna-tres">

            <tik-tok-embed
            user="@redditjuan001166"
            userProfile="https://www.tiktok.com/@redditjuan001166?refer=embed"
            caption="Replying to @redditjuan001166 Has your best friend ever stabbed you in the back?"
            :tags="['redditstories', 'redditreadings', 'requestedreads', 'requestedreading', 'reddit_tiktok', 'reddit', 'askreddit']"
            sound="♬ original sound - redditjuan001166"
            soundLink="https://www.tiktok.com/music/original-sound-7253504370699127598?refer=embed"
            url="https://www.tiktok.com/@redditjuan001166/video/7253504334489586986"
            videoId="7253504334489586986"
            embedStyle="max-width: 605px; min-width: 325px;"
            scriptSrc="https://www.tiktok.com/embed.js"
            ></tik-tok-embed>

        </div>
    </div>
    </div>
    
</template>

<script>
let actividadSegundos=0;
let distractorSegundos=0;
let antes=0;
var datosHeatmap = [];
import TikTokEmbed from './TikTokEmbed.vue';
export default {
    components: {
        TikTokEmbed
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
        var distractor = document.getElementById('distractor');
        var seguimientoDeLaMirada = [];
        webgazer.setRegression('ridge').setTracker('TFFacemesh').setGazeListener(function(data, elapsedTime) {
            if (data == null) {
                return;
            }          
           datosHeatmap.push(data);
            var rectActividad = iframe.getBoundingClientRect();
            var rectDistractor = distractor.getBoundingClientRect();
           let ahora=Date.now();
           if(ahora-antes>=1000){
            antes=ahora;
            if (data.x>=rectActividad.left&&data.x<=rectActividad.right&&data.y>=rectActividad.top&&data.y<=rectActividad.bottom){
                actividadSegundos++;
                console.log("Actividad: ",actividadSegundos);
            }
            else if(data.x>=rectDistractor.left&&data.x<=rectDistractor.right&&data.y>=rectDistractor.top&&data.y<=rectDistractor.bottom){
                distractorSegundos++;
                console.log("Distractor: ",distractorSegundos);
            }
           }

    }
    ).begin();
    
        webgazer.showPredictionPoints(false);
        webgazer.showVideoPreview(false);
        webgazer.removeMouseEventListeners();
        console.log("tiempo final actividad:",actividadSegundos);//probar esto cuando se tenga lo de detener el webgazer
        console.log("tiempo final distractor:",distractorSegundos);//probar esto cuando se tenga lo de detener el webgazer
        },
    detener(){
            webgazer.pause();
            this.crearHeatmap(datosHeatmap);
            this.$router.push('/Heatmap', () => {}, { replace: true })
            localStorage.actividadSegundos=actividadSegundos;
            localStorage.distractorSegundos=distractorSegundos;
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
iframe{
    width: 100%;
    height: 100%;
}
.titulo h1{
    text-align: center; 
    margin: 10px;
}

.contenedor {
    display: flex;
    justify-content: space-between; 
    width: 100%; 
    height: 100%;
}
.columna-uno{
    flex: 1 0 20%; /* Tamaño de flexión: 20% */
    border-radius: 10px;
    color: #323232;
    font-size: 1.2rem;
    background-color: rgba(235, 255, 250, 0.5);
    padding: 20px;
    margin: 0px 10px 20px 20px;
}

.columna-dos,
.columna-tres {
    flex: 1 40%; 
    border-radius: 10px;
    color: #323232;
    font-size: 1.2rem;
    
}
.columna-dos{ 
    margin: 0px 10px 20px 10px;
    padding: 20px;
    background-color: rgba(235, 255, 250, 0.5);
}
.columna-tres{
    margin: 0px 20px 20px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(235, 255, 250, 0.5);
}
.columna-tres iframe {
    max-width: 75%;
    width: 100%;
    height: auto;
    margin: 10px 0px;
}
.columna-uno .thumb img {
    border-radius: 10px;
    padding: 10px;
    background-color: #F4E5C2;
    max-width: 100%; 
    height: auto; 
    display: block; 
    margin: 10% auto; 
}
.columna-uno h2,
.columna-tres h2 {
    text-align: center;
    margin-bottom: 20px;
}
.boton {
    margin: 20px 0px;
    text-decoration: none;
    padding: 10px;
    font-size: 15px;
    color:#000 ;
    border-radius: 5px;
    background: #6DB193;
    display: block;
    text-align: center; 
}
</style>