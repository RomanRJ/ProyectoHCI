<template>
    <div id="body">
        <div class="titulo">
        <h1>Test</h1>
    </div>
    <div class="contenedor">
        <div class="columna-uno">
            <div class="thumb">
                <img src="img/1.png" alt="paz">
            </div>
            <a class="boton" href="#" >Iniciar Test</a>
            <a class="boton" href="#" onclick="toggleVideo()">Distractor</a>
        </div>
        <div class="columna-dos">
            <iframe id="juego" src="https://www.cokitos.com/juegos/calculo-zombie/" frameborder="0"></iframe>
        </div>
        <div id="distractor" class="columna-tres">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/4JnYfOBUqlA?si=3hFUrtzG33A6WJ7q"></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/2oT4bnjlDNE?si=kji3E0jb98zpfPLM"></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/b9vXbuaACQE?si=w_4VKXLw7Pl47zHW"></iframe>        
        </div>
    </div>
    </div>
</template>

<script>
let actividadSegundos=0;
let distractorSegundos=0;
let antes=0;
export default{
    
    mounted(){
    const vueScripts = [
        "https://webgazer.cs.brown.edu/webgazer.js",
        "https://webgazer.cs.brown.edu/jquery.js"
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
    
        webgazer.showPredictionPoints(true);
        webgazer.showVideoPreview(true);
        webgazer.removeMouseEventListeners();
        console.log("tiempo final actividad:",actividadSegundos);//probar esto cuando se tenga lo de detener el webgazer
        console.log("tiempo final distractor:",distractorSegundos);//probar esto cuando se tenga lo de detener el webgazer
        },
    },


    beforeUnmount(){
        webgazer.end();
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