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
            <h1>Resultados</h1>
            <p>Muestra los reslutados de la última prueba, por un lado tenemos el mapa de calor
                (Heatmap) donde muestra las zonas de mayor actividad durante la prueba y también
                se dan los tiempos de las diferentes zonas en la pantalla.</p>
        </div>


        <div class="contenedor">
            <div class="cuadro-grande">
                <div id="heatmapContainer"> </div>
            </div>
            <div class="cuadro-pequeno-contenedor">
                <div class="cuadro-pequeno">
                    <h2>Tiempo en la actividad</h2>
                    <h3>{{actividadSegundos}} segundos</h3>
                    <h2>Tiempo en el distractor</h2>
                    <h3>{{distractorSegundos}} segundos</h3>
                </div>
                  
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
export default{
    data(){
        return{
            actividadSegundos:localStorage.actividadSegundos,
            distractorSegundos:localStorage.distractorSegundos,

        }
    },
    mounted(){
        const vueScripts = [
            "https://cdn.plot.ly/plotly-latest.min.js"
        ];
        vueScripts.forEach(scriptUrl => {
            let script = document.createElement("script");
            script.setAttribute("src", scriptUrl);
            script.onload = this.mostrarHeatmap;
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
        mostrarHeatmap(){
            webgazer.pause();
            var heatmapData = JSON.parse(sessionStorage.getItem('data'));
            var heatmapLayout = JSON.parse(sessionStorage.getItem('layout'));
            Plotly.newPlot('heatmapContainer', heatmapData, heatmapLayout);
        },
        menu(){
            this.$router.push('/', () => {}, { replace: true })
        }
    }
}

</script>
    
<style scoped>
    #heatmapContainer {
        width: 100%;
        height: 100%;
    }
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

header .filauno .menu a:hover:hover {text-decoration: underline;}

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