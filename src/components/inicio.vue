<template>

<div>
    <center>
    
    
    <img src="https://s3-alpha-sig.figma.com/img/1a8b/7045/2e40edb562b3c43000efbc531c70916d?Expires=1589155200&Signature=CmTdyJNp-h0OFwSQzb~Tsd2Lz9G5OKkG0rbAWJ~c~ysvl-BGmZfNrlFcj7K25oiGXneHI6waXNDpN~IVGQgzTi5kMGgsEwRZ1Ok5-nHjivSB~jLvVJw8BvUhShC3-PU2ZUu~58LI5rLC4z7eljLpYd9ZSuZQaStlaKjOalJp15yrEyxM7fkjWPEA6~pSs1z5NtYy8Dqw6pcDJP3ujLCAfprGtlqXSKPeGBbne0PDyJPOU~xy18FxiDk1Z3V0dQsVQy2J0LQ0OZbYhwpFtfrvXqXVz7GADB59Pg7CJIgUof1ky3i~QvrSKg50yvtBj--NckXmcu419SZf0Ayad2O-SQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"  class="titulo" />
    

    <form>

        <div>

            <p class="iee"> </p>

            <input type="text" placeholder="Nombre de usuario" class="input">


        </div> 

            <div>

                <p class="iee2"></p>

                <input type="text" placeholder="Contraseña" class="input2">

            </div>


            <div>

                <router-link to="menu_buscar_mas">
                <input type="submit" value="INICIAR SESION" class="buttonI">
                </router-link>

            </div>

            <div>

                <p class="parrafo">Pet Return Home es una aplicación diseñada para ayudar a las mascotas extraviadas a encontrar su hogar y que puedan volver con sus familias muy pronto.</p>

            </div>

            <div>

            
                <router-link to="/registrar">
                <a class="cuenta">No tienes cuenta? Create una</a>
                </router-link>
            
            </div>

    </form>

    </center>
    

</div>


</template>

<script>
export default { 
};     
</script>

<style scoped>

.titulo{
   
    width: 293px;
    height: 179px;
    left: 50px;
    top: 75px;

}


.body{

    
    width: 375px;
    height: 812px;
    background: #F0F0F0;
}



.input{

    width: 313.5px;
    height: 32.12px;
    left: 25px;
    top: 298px;

    background: #FFFFFF;
    border-radius: 17px;
    width: 248px;
    height: 20px;
    left: 40px;
    top: 304px;

    font-family: ABeeZee;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: #A67051;
    width: 313.5px;
    height: 32.12px;
    left: 25px;
    top: 298px;

    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.13);
}

.input2{

    width: 313.5px;
    height: 32.12px;
    left: 25px;
    top: 358px;

    background: #FFFFFF;
    border-radius: 17px;
    
    width: 149px;
    height: 17px;
    left: 40px;
    top: 366px;

    font-family: ABeeZee;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: #A67051;
    width: 313.5px;
    height: 32.12px;
    left: 25px;
    top: 298px;

    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.13);
}

.container{
    width: 327px;
    height: 54px;
    left: 24px;
    top: 379px;

}
.container2{
    width: 327px;
    height: 54px;
    left: 24px;
    top: 379px;
    
}
.iee{
    width: 109px;
    height: 14px;
    left: 24px;
    top: 379px;

    font-family: ABeeZee;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #77787B;
}
.iee2{
    width: 65px;
    height: 14px;
    left: 22px;
    top: 454px;

    font-family: ABeeZee;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #77787B;
}
.buttonI{

    /* Component 1 */

    position: absolute;
    width: 247px;
    height: 40px;
    left: 56px;
    top: 426px;

    
    
    /* INICIO DE SESION */

    

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;

    background:#A65746;

    color: #FFFFFF;
    

}

.parrafo{
    position: absolute;
    width: 313px;
    height: 133px;
    left: 30px;
    top: 553px;

    font-family: ABeeZee;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 180.5%;
/* or 23px */

    letter-spacing: 0.5px;

    color: #402312;

/* txt */

    text-shadow: 0px 2px 80px #FFFFFF;
    position: absolute;
    width: 344px;
    height: 190px;
    left: 15px;
    top: 525px;

    background: #F0F0F0;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    border-radius: 38px;
}

.cuenta{

    position: absolute;
    width: 270px;
    height: 16px;
    left: 56px;
    top: 761px;

    font-family: ABeeZee;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-align: center;

    color: #402312;

/* txt */

text-shadow: 0px 2px 80px #FFFFFF;

}

    

</style>
