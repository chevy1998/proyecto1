<template>

<div>

    <center>
    <h1 class="per"> ¿Perdiste tu mascota? Publicala para poder ayudarte  </h1>
    <img src="https://s3-alpha-sig.figma.com/img/7302/7636/47f8c81657d9d18046bc63e605e2af1e?Expires=1589155200&Signature=Dq-chdwyjOtqnnszcjowghu4OADG19n8vUXCK3nCmqpVissmisvRAy7L2ItSb5ARFw~a9vT0M9v7j122bWxsWw7n-6wZL78PCUzE6r-a0ImB1n-z-HkrhXySr4rnmrIDCdkiYLCAh4n7af9xRTmY6mYUVLF9J0yr84AmY3YirXLtW9TlXPu9CC7NSJ~0mgD~7DP5PBxabTsIbJoX8xZKmcwFXlHacmB45k3Yt9S6CxuKBPnhFD3IhWGYidg5k3SvljHqrZ7wP2B9QtTv7EAmButUF7KNilDFWdlK9jxR0tWw1-vAERLrJBgVkWxBszT2kN0AlkZFXJlysq8km2Ws3w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" class="foto" />
    
    </center>


    <form>

      <div>

            <p class="vbv"> </p>

            <input type="text" placeholder="Nombre" class="zzz">

      </div>

      <div>

            <p class="ra"> </p>

            <input type="text" placeholder="Raza" class="dfg">

      </div>

      <div>

            <p class="re">  </p>

            <input type="text" placeholder="Recompensa" class="jkl">

      </div>

      <div>

            <p class="con">  </p>

            <input type="text" placeholder="Contacto" class="qaz">

      </div>

      <div>

            <router-link to="ver_mascotas_encontradas">
            <input type="submit" value="Publicar" class="publimas">
            </router-link>

      </div>


    
    </form>

    

</div>


</template>

<script>
export default { 
};     
</script>
<style scoped>

.publimas{

position: absolute;
width: 143px;
height: 28px;
left: 139px;
top: 654px;

font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 28px;
text-align: center;

color: #FFFFFF;

position: absolute;
width: 311px;
height: 53px;
left: 32px;
top: 654px;

background: #A65746;
/* LIGHT */

box-shadow: inset 10px 10px 24px rgba(255, 255, 255, 0.25);
border-radius: 26.5px;
}

.qaz{
width: 327px;
height: 35.61px;
left: 18px;
top: 585.33px;

background: #FFFFFF;
border-radius: 4px;
}

.con{

width: 66px;
height: 19px;
left: 18px;
top: 566px;

font-family: ABeeZee;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 14px;

color: #77787B;
}

.jkl{

width: 327px;
height: 35.61px;
left: 18px;
top: 507.39px;

background: #FFFFFF;
border-radius: 4px;


}

.re{
width: 85px;
height: 19px;
left: 18px;
top: 488px;

font-family: ABeeZee;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 14px;

color: #77787B;
}

.dfg{

width: 327px;
height: 35.61px;
left: 21px;
top: 429.06px;

background: #FFFFFF;
border-radius: 4px;
}

.ra{

  width: 34px;
height: 19px;
left: 21px;
top: 410px;

font-family: ABeeZee;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 14px;

color: #77787B;
}

.zzz{

width: 327px;
height: 35.61px;
left: 20px;
top: 353.33px;

background: #FFFFFF;
border-radius: 4px;


font-family: ABeeZee;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;

color: #A67051;
}

.vbv{

width: 52px;
height: 15px;
left: 20px;
top: 334px;

font-family: ABeeZee;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 14px;
/* identical to box height */


color: #77787B;
}

.foto{

  /* Dog */



      width: 131.8px;
      height: 134.08px;
      left: 133px;
      top: 165px;

/* LIGHT */

  box-shadow: inset 10px 10px 24px rgba(255, 255, 255, 0.25);

  border: 4px solid #A65746;
  box-sizing: border-box;
}

.per{

width: 350px;
height: 42px;
left: 59px;
top: 98px;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 25px;
line-height: 29px;

color: #402312;

/* txt */

text-shadow: 0px 2px 80px #FFFFFF;
}
 
</style>