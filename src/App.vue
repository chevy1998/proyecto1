<template>


  <div id="main" class="body">

    <!--<inicio />
    <menu_buscar_mas />
    <publicar_mas_en />
    <publicar_mas_per />
    <registrar />
    <ver_mascotas_encontradas />-->


    <!--<router-link to="/"><h5 id=ini>inicio</h5></router-link>-->
    <!--<router-link to="/registrar"><h5 class="cuenta"></h5></router-link>-->
    <!--<router-link to="/menu_perdidos"><h5>menu_perdidos</h5></router-link>
    <router-link to="/perdi_1mas"><h5>perdi_1mas</h5></router-link>
    <router-link to="/menu_encontrados"><h5>menu_encontrados</h5></router-link>
    <router-link to="/encontre_1mas"><h5>encontre_1mas</h5></router-link>
    <router-link to="/info_mascotaen"><h5>info_mascotaen</h5></router-link>-->

    <router-view></router-view>
  </div>
</template>

<script>
//import arreglo from "./components/inicio";
//import inicio from "./components/inicio";
//import publicar_mas_en from "./components/publicar_mas_en";
//import publicar_mas_per from "./components/publicar_mas_per";
//import registrar from "./components/registrar";
//import ver_mascotas_encontradas from "./components/ver_mascotas_encontradas";

export default {

  //components: { arreglo, arreglo2 }

  //components:{

    //inicio,
    //menu_buscar_mas,
    //publicar_mas_en,
    //publicar_mas_per,
    //registrar,
    //ver_mascotas_encontradas
  //}

};
</script>




<style scoped>
   * { 

     height: 800px;
  }

  .body{

    width: 375px;
    height: 812px;
    background: #F0F0F0;
  }

 
</style>
