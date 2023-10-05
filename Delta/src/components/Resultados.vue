<template>
    <div id="body">
        <div class="titulo">
        <h1>Resultados</h1>
    </div>
    <div class="contenedor">
        <div class="columna">
            <div class="cuadro">
               <p>cuadro1</p>
            </div>
        </div>
        <div class="columna">
            <div class="cuadro">
                <p>cuadro2</p>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
</script>

<style scoped>
* {
	padding: 0;
	margin: 0;
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

.columna {
    border-radius: 10px;
    flex: 1;
    background-color: rgba(235, 255, 250, 0.5);
    padding: 20px;
    margin: 0px 10px;
}

.cuadro {
    color: #323232;
    font-size: 1.2rem;
    margin-bottom: 20px;
}

.cuadro h2 {
    text-align: center;
    margin-bottom: 20px;
}

.cuadro .thumb img {
    max-width: 100%; 
    height: auto; 
    display: block; 
}

</style>