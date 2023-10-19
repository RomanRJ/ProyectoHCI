<template>
    <div id="heatmapContainer"> </div>
    <br>
    <br>
    <p>Tiempo Actividad: {{actividadSegundos}} segundos</p>
    <p>Tiempo Distractor: {{distractorSegundos}} segundos </p>
    <a class="boton" href="#" @click="menu" >Menú</a>  
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
    .boton {
        border-radius: 5px;
        background: #6DB193;
        text-decoration: none;
        color: #323232;
        font-size: 28px;
        text-align: center;
        margin: 40px 8px;
        width:20%;
        
    }
    
    </style>