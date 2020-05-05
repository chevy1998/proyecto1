<template>

<div>

    <div>

        <p class="texto"> ¡Hola!, gracias por formar parte de esta comunidad.</p>

    </div>

    <div>
        
        <router-link to="ver_mascotas_encontradas">

        <input type="submit" value="Ver mascotas extraviadas" class="buttonIV">

        </router-link>

    </div>

    <div>
        <router-link to="busco_a_mi_familia">

        <input type="submit" value="Ver mascotas encontradas" class="buttonV">

        </router-link>

    </div>

    <div>
        <router-link to="publicar_mas_per">

        <input type="submit" value="Publicar mi mascota desaparecida" class="buttonVI">

        </router-link>

    </div>

    <div>
        <router-link to="publicar_mas_en">

        <input type="submit" value="Publicar mascota encontrada" class="buttonVII">

        </router-link>

    </div>

    <div>

        <router-link to="/">

        <input type="submit" value="CERRAR SESION" class="cerrarsesion">

        </router-link>

    </div>


  
</div>

</template>

<script>
export default {
    
};
</script>

<style scoped>

.cerrarsesion{

position: absolute;
width: 119px;
height: 19px;
left: 127px;
top: 679px;

font-family: ABeeZee;
font-style: normal;
font-weight: normal;
font-size: 22px;
line-height: 19px;
/* identical to box height */

text-align: center;

color:  #FFFFFF;

background: #f3a171;

position: absolute;
width: 311px;
height: 53px;
left: 31px;
top: 662px;
}

.buttonVII{

position: absolute;
width: 222px;
height: 19px;
left: 79px;
top: 578px;

font-family: ABeeZee;
font-style: normal;
font-weight: normal;
font-size: 22px;
line-height: 19px;
/* identical to box height */

text-align: center;

color: #FFFFFF;

position: absolute;
width: 311px;
height: 53px;
left: 34px;
top: 561px;

background: #A65746;
/* LIGHT */

box-shadow: inset 10px 10px 24px rgba(255, 255, 255, 0.25);
border-radius: 26.5px;

}

.buttonVI{

position: absolute;
width: 261px;
height: 19px;
left: 60px;
top: 468px;

font-family: ABeeZee;
font-style: normal;
font-weight: normal;
font-size: 22px;
line-height: 19px;
/* identical to box height */

text-align: center;

color: #FFFFFF;

position: absolute;
width: 311px;
height: 53px;
left: 34px;
top: 451px;

background: #A65746;
/* LIGHT */

box-shadow: inset 10px 10px 24px rgba(255, 255, 255, 0.25);
border-radius: 26.5px;


}

.buttonV{

position: absolute;
width: 191px;
height: 19px;
left: 95px;
top: 367px;

font-family: ABeeZee;
font-style: normal;
font-weight: normal;
font-size: 22px;
line-height: 19px;
/* identical to box height */

text-align: center;

color: #FFFFFF;

position: absolute;
width: 311px;
height: 53px;
left: 34px;
top: 350px;

background: #A65746;
/* LIGHT */

box-shadow: inset 10px 10px 24px rgba(255, 255, 255, 0.25);
border-radius: 26.5px;

}

.buttonIV{

position: absolute;
width: 195px;
height: 19px;
left: 93px;
top: 266px;

font-family: ABeeZee;
font-style: normal;
font-weight: normal;
font-size: 22px;
line-height: 19px;
/* identical to box height */

text-align: center;

color: #FFFFFF;

position: absolute;
width: 311px;
height: 53px;
left: 34px;
top: 249px;

background: #A65746;
/* LIGHT */

box-shadow: inset 10px 10px 24px rgba(255, 255, 255, 0.25);
border-radius: 26.5px;

}

.texto{

    /* ¡Hola!, gracias por formar parte de esta comunidad. */


position: absolute;
width: 312px;
height: 114px;
left: 26px;
top: 87px;

font-family: ABeeZee;
font-style: italic;
font-weight: normal;
font-size: 32px;
line-height: 38px;

color: #402312;;

/* txt */

text-shadow: 0px 2px 80px #FFFFFF;
}



</style>