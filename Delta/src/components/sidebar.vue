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
			<section class="filados">
				<h1 class="titulo">¡Entrena Tu Mente!</h1>
				<div class="elipse"><div class="lalo"></div></div>

			</section>
		</header>

		<section class="filatres">
			<img class="piedras" src="./img/piedras.png" alt="piedras">
			<div class="texto">
				<p>En un mundo lleno de distracciones, la concentración se ha vuelto crucial. Aquí, 
					a través de actividades diseñadas, desarrollaremos tu enfoque, abordando aspectos
					 clave de la atención. ¡Juntos, fortaleceremos tu capacidad de concentración!</p>
				<p>Las actividades prácticas te ofrecerán una experiencia directa para fortalecer tu
					 enfoque y avanzar hacia una mejor concentración rápidamente. ¡Comencemos esta
					  emocionante travesía juntos!</p>
			</div>
		</section>

		<section class="filacuatro">
			<div class="cuadro">
				<h2>Test</h2>
				<p>Comprueba la capacidad del usuario para concentrarse la pantalla está
					seccionada en partes que ser monitoreadas.</p>
			</div>
			<div class="cuadro">
				<h2>Actividad</h2>
				<p>Es una forma de dejar probar al usuario las actividades de una manera
					más relajada a comparacion de Test.</p>
			</div>
			<div class="cuadro">
				<h2>Resultados</h2>
				<p>En Resultados podras revisar tu progreso, estadisticas y  unmapa de 
					calor que te enseñara donde concentras tu mirada.</p>
			</div>
		</section>

		<section class="filacinco">
			<div class="cuadro">
				<h2>Acerca de nosotros</h2>
				<p>En Delta, estamos comprometidos a combatir las distracciones en la era digital.
					 Nuestra misión es fortalecer tu concentración a través de actividades prácticas
					  y efectivas. Únete a nosotros en esta emocionante travesía hacia una mejor 
					  atención. ¡Juntos, mejoraremos tu enfoque!</p>
			</div>
			<div class="imagenes">
				<div class="circulo">
					<img src="./img/alex.png" alt="alex">
					<h3>Alex</h3>
				</div>
				<div class="circulo">
					<img src="./img/abraham.png" alt="abraham">
					<h3>Abraham</h3>
				</div>
				<div class="circulo">
					<img src="./img/andres.png" alt="andres">
					<h3>Andres</h3>
				</div>
				<div class="circulo">
					<img src="./img/roman.png" alt="roman">
					<h3>Roman</h3>
				</div>
				<div class="circulo">
					<img src="./img/lily2.jpg" alt="lily">
					<h3>Lily</h3>
				</div>
			</div>
		</section>

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
export default {
  name: 'Inicio',
  components: {
  },
  methods: {
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
    }
  },
};
</script>

<style>
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
	width: 90%;
	max-width: 1000px;
	display: flex;
	flex-direction:row;
	flex-wrap:wrap;
}

header {
	width: 100%;
	background: linear-gradient(260deg, rgba(64, 120, 31, 0.50) 0%, rgba(97, 130, 69, 0.50) 44.12%), url(img/verde.png);
	background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
	padding: 50px 50px 0px 50px;
}

header .filauno {
	display: flex;
	flex-direction:row;
	flex-wrap:wrap;
	justify-content:space-between;
	align-items:center;
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
    cursor: pointer;
}

header .filauno .menu a:hover:hover {text-decoration: underline;}

header .filados {
	display: flex;
	flex-direction:row;
	flex-wrap:wrap;
	justify-content:center;
}

header .filados .titulo { 
    color: rgba(255,255,255,1);
    font-family: sans-serif;
    font-size: 60px;
	margin: 50px 0px;
}

header .filados .elipse { 
	width: 350px;
    height: 350px;
    background: linear-gradient(260deg, rgba(64, 120, 31, 0.50) 0%, rgba(97, 130, 69, 0.50) 20%);
    border-radius: 50%;
	margin: 50px 0px 25px;
}

header .filados .lalo { 
	width: 360px;
    height: 360px;
    background: url("img/lalo.png");
    background-size: cover;
    overflow: hidden;
}

.filatres {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.filatres .piedras {
    width: 50%; 
    max-width: 100%; 
	background-position: center center;
    background-size: cover;
	border-radius: 0 65px 65px 0;
	padding: 50px 50px 50px 0px;
}

.filatres .texto {
	flex: 1;
    padding: 40px;
	margin: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.filatres p {
    margin: 30px 0;
	color: #323232;
	font-size: 1.2em;
}

.filacuatro {
	background: rgba(197, 214, 183, 0.25);
    display: flex;
    justify-content: center;
    padding: 20px;
}

.filacuatro .cuadro {
    flex: 1;
    background-color: #fff; 
    padding: 10px;
    margin: 10px;
}

.filacuatro .cuadro h2 {
	text-align: center;
    font-weight: bold;
	color: #323232;
	margin: 15px;
}

.filacuatro .cuadro p {
	color: #323232;
	text-align: center;
	margin: 15px;
}

.filacinco {
    display: flex;
	flex-wrap: wrap; 
    align-items: center;
    padding: 20px;
}

.filacinco .cuadro {
    flex: 0 0 calc(40% - 10px);
    background-color: #fff; 
    padding: 20px;
    text-align: center;
}

.filacinco .cuadro h2 {
    font-size: 24px;
	color: #323232;
	margin: 15px;
}

.filacinco .cuadro .p {
	color: #323232;
}

.filacinco .imagenes {
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
	flex-wrap: wrap;
   
}

.filacinco .circulo {
    text-align: center;
	margin-bottom: 10px;
}

.filacinco .circulo img {
    width: auto; 
    height: 100px;
    border-radius: 40%;
}

.filacinco .circulo h3 {
    margin-top: 10px;
	color: #323232;
}

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