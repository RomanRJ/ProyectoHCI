<template>
<div>
    <p>Sí funciona</p>
</div>
    </template>
    
<script>

export default{
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
        mostrarHeatmap(){
            var heatmapData = JSON.parse(sessionStorage.getItem('data'));
            var heatmapLayout = JSON.parse(sessionStorage.getItem('layout'));
            Plotly.newPlot('heatmapContainer', heatmapData, heatmapLayout);
        }
    }
}

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
    
    .cuadro-grande,
    .cuadro-pequeno-contenedor {
        flex: 1; 
        
    }
    
    .cuadro-grande {
        border-radius: 10px;
        color: #323232;
        font-size: 1.2rem;
        background-color: rgba(235, 255, 250, 0.5);
        padding: 20px;
        margin: 0px 10px 20px 20px;
        
    }
    
    .cuadro-grande .thumb img {
        max-width: 50%; 
        height: auto; 
        display: block; 
        margin: 10% auto; 
    }
    
    .cuadro-pequeno-contenedor {
        display: flex;
        flex-direction: column;
        margin: 0px 20px 20px 10px;
        
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
        margin-bottom: 20px;
    }
    
    .cuadro-pequeno .thumb img {
        border-radius: 5px;
        max-width: 100%; 
        height: auto; 
        display: block; 
    }
    </style>