<template>
<div id="body">
    <div class="titulo">
        <h1>Inicio</h1>
    </div>
    <div class="contenedor">
        <div class="cuadro-grande">
            
            <p>En un mundo lleno de distracciones, la concentración se ha vuelto crucial.
                 Aquí, a través de actividades diseñadas, desarrollaremos tu enfoque, 
                 abordando aspectos clave de la atención. ¡Juntos, fortaleceremos tu capacidad de concentración!</p>
                 <div class="thumb">
                    <img src="./img/1.png" alt="paz">
                </div>
            <p>Las actividades prácticas te ofrecerán una experiencia directa para fortalecer tu
                 enfoque y avanzar hacia una mejor concentración rápidamente. Comencemos esta 
                 emocionante travesía juntos!</p>
        </div>
        <div class="cuadro-pequeno-contenedor">
            <div class="cuadro-pequeno">
                <h2>Acerca de nosotros</h2>
                <p>En Delta, estamos comprometidos a combatir 
                    las distracciones en la era digital. Nuestra misión es fortalecer
                    tu concentración a través de actividades prácticas y efectivas.
                    Únete a nosotros en esta emocionante travesía hacia una mejor atención. 
                    ¡Juntos, mejoraremos tu enfoque!
                    <br>
                    <br>
                     </p>
            </div>
            <div class="cuadro-pequeno">
                <div class="thumb">
                <img src="./img/2.jpg" alt="ciudad">
                </div>
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