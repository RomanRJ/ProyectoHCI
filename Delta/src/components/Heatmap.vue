<template>
    <div id="heatmapContainer"> </div>

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
            webgazer.pause();
            var heatmapData = JSON.parse(sessionStorage.getItem('data'));
            var heatmapLayout = JSON.parse(sessionStorage.getItem('layout'));
            Plotly.newPlot('heatmapContainer', heatmapData, heatmapLayout);
        }
    }
}

</script>
    
    <style scoped>
    
    
    
    #heatmapContainer {
        width: 100%;
        height: 100%;
    }
    
    
    </style>