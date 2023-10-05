<template>
    <div id="body">
        <div class="columna1">
        </div>
        <div class="columna2">
            <div class="formulario">
                <h2>Bienvenido</h2>
                <form v-on:submit.prevent="login">
                    <label for="usuario">Ingresa tu nombre para empezar:</label>
                    <input v-model="user" type="text" id="usuario" name="usuario" >
                    <button type="submit" class="boton_login">Iniciar</button>
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

<style>
* {
	padding: 0;
	margin: 0;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}

#body {
    font-family: 'Open Sans', sans-serif;
	background: rgb(244, 229, 194);
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
    background-image: url('https://www.travelandleisure.com/thmb/mBNEFTaByoabvOqWb3rULukVLb4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tulum-quitana-roo-LOCALMEXICOGO1021-dfe18481190b4d74b97430714f59ffce.jpg');
    background-color: lightgray;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.columna2 {
    background-color: rgb(244, 229, 194);
}
.formulario {
    width: 75%;
    height: 75%;
    background-color:white;
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
    background: rgba(235, 255, 250, 0.50);
    border-radius: 10px;
}
form{
    text-align: center;
}
h2{
    margin: 50px;
    
}
input {
    margin: 30px;
    width: 300px;
    height: 30px;
}

.boton_login {
    text-decoration: none;
    padding: 5px;
    margin: 40px;
    font-size: 40px;
    color:white ;
    border-radius: 5px;
    background: rgb(109, 177, 147);
}
</style>