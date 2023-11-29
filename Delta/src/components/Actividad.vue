<template>
  <div class="contendedor">
		<header>
			<div class="filtro"></div>
			<section class="filauno">
				<a @click="Inicio" class="logo"></a>
				<nav class="menu">
					<a @click="Actividad">Actividad</a>
					<a @click="Test">Test</a>
					<a @click="Heatmap">Resultados</a>
				</nav>
			</section>
		</header>

        <div class="filados">
            <h1>Actividad</h1>
            <p>Práctica las actividades que se mostrarán en el apartado de "Test" 
              pero sin distractores para que el usuario pueda realizarlas de una
              manera tranquila.</p>
        </div>


        <div class="contenedor">
            <div class="cuadro-grande">
              <iframe  ref="juegos" v-bind:src="rutaAleatoria" frameborder="0" id="juego"></iframe>
            </div>
            <div class="cuadro-pequeno-contenedor">
                <div class="cuadro-pequeno">
                    <h2>Tiempo</h2>
                    <h3>{{tiempoRestante}} segundos</h3>
                    <h2>Actividad</h2>
                    <h3 ref="titulosJuegos">{{ textoIndice/*textoIndiceGrupo*/ }}</h3>
                </div>
                <a class="boton" href="#" @click="seleccionarRutaAleatoria" >Siguiente actividad</a>   
            </div>
        </div>

		<footer>
			<section class="redes-sociales">
				<div class="contenedor">
					<a href="#" class="gmail"><img src="./img/gmail.png" alt="gmail"></a>
					<a href="https://github.com/RomanRJ/ProyectoHCI" class="github"><img src="./img/github.png" alt="github"></a>
					<a href="#" class="linkedin"><img src="./img/linkedin.png" alt="linkedin"></a>
				</div>
			</section>
		</footer>
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
        'https://www.cokitos.com/juegos/libro-dibujos/'

      ],
      indiceGrupo: 0,
      tiempoRestante:60,
      rutaAleatoria: ''
    };
  },
  computed: {
    /*textoIndiceGrupo() {
      if (this.indiceGrupo === 0) {
        return 'COLOREAR';
      } else if (this.indiceGrupo === 1) {
        return 'MATEMATICAS';
      } else {
        return 'MEMORIA';
      }
    }*/
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
        Inicio() {
          this.$router.push('/');
        },
        Actividad(){
          this.$router.push('/Actividad');
        },
        Test(){
          this.$router.push('/Test');
        },
        Heatmap(){
          this.$router.push('/Heatmap');
        },
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
        iniciarTemporizador() {
      this.intervalo = setInterval(() => {
        if (this.tiempoRestante > 0) {
          this.tiempoRestante--;
        } else {
          clearInterval(this.intervalo);
          this.detenerTemporizador();
        }
      }, 1000);
    },
    detener(){
            webgazer.pause();
            this.crearHeatmap(datosHeatmap);
            this.$router.push('/Heatmap', () => {}, { replace: true })
            localStorage.actividadSegundos=actividadSegundos;
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
        detenerTemporizador() {
            console.log(this.indiceGrupo);
            //this.tiempoRestante = 60;
            this.seleccionarRutaAleatoria();
    },
        seleccionarRutaAleatoria() {
            clearInterval(this.intervalo);
    if (this.indiceGrupo === 0) {
      // Primer grupo (rutas 1 a 3)
      this.tiempoRestante = 60;
      this.textoIndice="MATEMÁTICAS";
      this.iniciarTemporizador();
      const indiceRuta = Math.floor(Math.random() * 3);
      this.$refs.juegos.src=this.rutas[indiceRuta];
      
    } else if (this.indiceGrupo === 1) {
      // Segundo grupo (rutas 4 a 6)
      this.textoIndice="MEMORIA";
      this.tiempoRestante = 60;
      this.iniciarTemporizador();
      const indiceRuta = Math.floor(Math.random() * 3) + 3;
      this.$refs.juegos.src=this.rutas[indiceRuta];
      
    } else if (this.indiceGrupo === 2) {
      // Tercer grupo (rutas 7 a 9)
      this.textoIndice="COLOREAR";
      this.tiempoRestante = 60;
      this.iniciarTemporizador();
      const indiceRuta = Math.floor(Math.random() * 3) + 6;
      this.$refs.juegos.src=this.rutas[indiceRuta];
      
    } else if (this.indiceGrupo ===3) {
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

body {
	font-family: 'Open Sans', sans-serif;
	background: #fff;
   
}

.contenedor {
	margin: auto;
	display: flex;
	flex-direction:row;
	flex-wrap:wrap;
    justify-content: space-between;
    width: 100%;
    height: 100%;
}

header {
	width: 100%;
	background: linear-gradient(260deg, rgba(64, 120, 31, 0.50) 0%, rgba(97, 130, 69, 0.50) 44.12%), url(img/verde.png);
	background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
	padding: 5px 50px 5px 50px;
}

header .filauno {
	display: flex;
	flex-direction:row;
	justify-content:space-between;
    align-items: center;
}

header .filauno .logo {
	width: 150px;
    height: 69px;
    background: url("img/logo.png");
    background-size: cover;
    overflow: hidden;
}


header .filauno .menu a{
	color: #fff;
	text-decoration: none;
	margin-right:40px;
	font-size: 18px;
}
header .filauno .menu a:hover {text-decoration: underline;}
.filados {
    background: rgba(197, 214, 183, 0.25);
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    margin: 40px;
}

.filados h1 {
    font-size: 24px;
    color: #323232;
    margin: 20px;
}

.filados p {
    font-size: 16px;
    color: #323232;
}

.cuadro-grande {
    border-radius: 10px;
    color: #323232;
    font-size: 1.2rem;
    border-radius: 15px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(260deg, rgba(197, 214, 183, 0.90) 39.58%, rgba(134, 160, 112, 0.90) 67.71%);
    padding: 20px;
    margin: 0px 20px 40px 40px;
    flex: 3; 
    width: 80%; 
}
iframe{
  width: 100%;
  height: 100%;
}


.cuadro-pequeno-contenedor {
    display: flex;
    flex-direction: column;
    margin: 0px 40px 40px 10px;
    flex: 1; 
    width: 40%; 
}

.cuadro-pequeno {
    border-radius: 10px;
    color: #323232;
    font-size: 1.2rem;
    border-radius: 15px;
    background: rgba(197, 214, 183, 0.25);
    padding: 20px;
    margin: 0px 0px;
}

.cuadro-pequeno h2 {
    color: #323232;
    text-align: center;
    margin:  40px;
}
.cuadro-pequeno h3 {
     color: #323232;
    text-align: center;
    margin: 60px;
}



.boton {
    background: #6DB193;
    text-decoration: none;
    color: #fff;
    border-radius: 5px;
    background: linear-gradient(86deg, #779261 3.57%, #447B23 96.43%);
    font-size: 28px;
    text-align: center;
    display: block;
    margin: 40px 8px;
}
.boton:hover {background: #447B23;}

footer .redes-sociales {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(260deg, rgba(197, 214, 183, 0.90) 39.58%, rgba(134, 160, 112, 0.90) 67.71%);
    padding:  60px 0;
}

footer .redes-sociales .contenedor {
    display: flex;
    justify-content:center;
}

footer .redes-sociales a {
    color: #fff;
    text-align: center;
    width: 100px;
    display: block;
    padding: 15px 0;
    border-radius: 3px;
    font-size: 30px;
    margin: 0 20px;
    border-radius: 3px;
}

footer .redes-sociales .gmail:hover:hover {background: #FBBC05;}
footer .redes-sociales .github:hover {background: #333;}
footer .redes-sociales .linkedin:hover {background: #0a66c2;}
</style>