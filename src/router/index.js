import Vue from 'vue'
import VueRouter from 'vue-router'
import inicio from "../components/inicio.vue";
import registrar from "../components/registrar.vue";
import menu_buscar_mas from "../components/menu_buscar_mas";
import busco_a_mi_familia from "../components/busco_a_mi_familia";
import menu_encontrados from "../components/menu_encontre_mas";
import publicar_mas_en from "../components/publicar_mas_en";
import publicar_mas_per from "../components/publicar_mas_per";
import ver_mascotas_encontradas from "../components/ver_mascotas_encontradas";

Vue.use(VueRouter)

  const routes = [
  
    {
      path:"/", component:inicio
  },
  {
    path:"/registrar", component:registrar
},

{
  path:"/ver_mascotas_encontradas", component:ver_mascotas_encontradas
},

{
    path:"/menu_buscar_mas", component:menu_buscar_mas
},

{
    path:"/busco_a_mi_familia", component:busco_a_mi_familia
},

{
    path:"/menu_encontrados", component:menu_encontrados
},

{
    path:"/publicar_mas_en", component:publicar_mas_en
},

{
    path:"/publicar_mas_per", component:publicar_mas_per
},
]

const router = new VueRouter({
  routes
})

export default router
