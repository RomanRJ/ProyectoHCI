<template>
    <div class="contenedor">
        <header>
            <div class="logo">
                <img src="img/logo.png" alt="logo delta">
            </div>
        </header>
        <div class="sidebar">
            <nav class="menuLaterla">
                <a class="boton" @click="Inicio">Inicio</a>
                <a class="boton" @click="Test">Test</a>
                <a class="boton" @click="Actividad">Actividad</a>
                <a class="boton" @click="Resultados">Resultados</a>
                <div class="relleno"></div>
            </nav>
        </div> 
    </div>
</template>

<script>
export default {
  name: 'Inicio',
  components: {
  },
  methods: {
    Inicio() {
        this.$router.push('/Inicio');
    },
    Actividad(){
        this.$router.push('/Actividad');
    },
    Test(){
        this.$router.push('/Test');
    },
    Resultados(){
        this.$router.push('/Resultados');
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
	background: #F4E5C2;
	background-attachment: fixed;
    overflow: hidden;
}

header {
    width: 100%;
    background-color: #295F4E; 
    padding: 10px; 
    box-sizing: border-box; 
    display: flex; 
    justify-content: flex-start; 
    align-items: center; 
}

.logo img {
    max-width: 50%;
    height: auto;
}

.sidebar {
    background: #6DB193;
    width: min-content;
    height: 1080px;
    display: flex;
    flex-direction: column;
    
}

.menuLateral {
    flex: 1;
    display: flex;
    flex-direction: column; 
}

.boton {
    text-decoration: none;
    color: #EBFFFA;
    font-size: 36px;
    text-align: center;
    display: block;
    margin: 40px 8px;
}

</style>