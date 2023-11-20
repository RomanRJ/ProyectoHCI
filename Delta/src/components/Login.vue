<template>
    <div id="body">
        <div class="columna1">
            <div class="borde"><div class="logo"></div></div>
        </div>
        <div class="columna2">
            <div class="formulario">
                <h1>Bienvenido!</h1>
                <form v-on:submit.prevent="login">
                    <label for="usuario" class="texto">Ingresa tu nombre para empezar:</label>
                    <input v-model="user" type="text" id="usuario" placeholder=" &#128100; Usuario" name="usuario" required >
                    <button type="submit" class="boton">Iniciar</button>
                </form>
                <div v-if="error">
                    <h3>{{ error_msg }}</h3>
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
  export default{
    components: {
  
    },
    data: function(){
      return {
        user:"",
        error: false,
        error_msg: "",
      }
    },
    methods:{
      login(){
        let json = {
            "user": this.user,
        };
        if(json.user == ""){
            this.error = true;
            this.error_msg = "Ingresa un nombre de usuario";
        }else{
            this.error = false;
            localStorage.user = json.user;
            this.$router.replace("/");
        }
        
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
}

.columna1,
.columna2 {
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
}

.columna1 {
    background-image: url('img/libro.png');
    background-color: lightgray;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.columna1 .borde { 
    position: absolute;
    bottom: 0;
    left: 0;
    width: 200px;
    height: 80px;
    margin: 30px;
    border: 3px solid rgba(217, 217, 217);
}
.columna1 .borde .logo{
    background: url("img/logo.png") ;
    background-size: cover;
    position: absolute;
    bottom: 2px;
    width: 200px;
    height: 80px;
    
}
.columna2 {
    width: 100%;
	background: linear-gradient(260deg, rgba(64, 120, 31, 0.50) 0%, rgba(97, 130, 69, 0.50) 44.12%), url(img/verde.png);
	background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
	padding: 50px 50px 0px 50px;
}
.columna2 .formulario {
    width: 75%;
    height: 75%;
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    border-radius: 15px;
}
.columna2 .formulario h1{
    margin: 30px;
    color: #fff;
}
.columna2 .formulario .texto{
    color: #fff;
}
.columna2 .formulario input {
    margin: 35px;
    width: 300px;
    height: 35px;
    border-radius: 5px;
    color: #fff;
    background: rgba(151, 180, 34, 0.2);
    mix-blend-mode: plus-lighter;
    
}
form{
    text-align: center;
}

.columna2 .formulario .boton {
    text-decoration: none;
    padding: 5px 20px;
    margin: auto;
    font-size: 30px;
    color:#fff ;
    border-radius: 5px;
    border:none;
    background: linear-gradient(86deg, #779261 3.57%, #447B23 96.43%);
}

.columna2 .formulario .boton:hover {background: #447B23;}
</style>