<template>
    <div id="body">
        <div class="titulo">
        <h1>Actividad</h1>
    </div>
    <div class="contenedor">
        <div class="cuadro-grande">
            <iframe src="https://www.cokitos.com/juegos/math-magic/" frameborder="0"></iframe>
        </div>
        <div class="cuadro-pequeno-contenedor">
            <div class="cuadro-pequeno">
                <h2>Tiempo</h2>
                <h3>el tiempo</h3>
                <h2>Actividad</h2>
                <h3>la actividad</h3>
            </div>
            <div class="cuadro-pequeno">
                <a class="boton" href="#" >Terminar actividad</a>  
        </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('beforeunload', this.detenerWebGazer);
    // Crea un array con las URLs de los scripts que quieres agregar
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
  beforeDestroy(){
    window.removeEventListener('beforeunload', this.detenerWebGazer);
    this.detenerWebGazer();
  },
  methods: {
    initializeWebGazer() {
        var seguimientoDeLaMirada = [];
        webgazer.setRegression('linear').setTracker('clmtrackr').setGazeListener(function(data, elapsedTime) {
            if (data == null) {
                return;
            }
            seguimientoDeLaMirada.push(data);
            //if(data.x)
            console.log(data.x);
    }).begin();
        webgazer.showPredictionPoints(true);
        //webgazer.showVideoPreview(false);
        //webgazer.end();
    },
    detenerWebGazer(){
        webgazer.end();
    }
    
    
  } 
  
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