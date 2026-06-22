<template>

    <div class="page">

        <div class="titulo">

            <h1>

                <i class="fas fa-folder"></i>

                Gestión de Categorías

            </h1>

            <p>

                Administra las categorías utilizadas por el restaurante.

            </p>

        </div>

        <FormularioCategorias
            ref="formularioCategorias"
            @categoria-guardada="recargarTabla"
        />

        <TablaCategorias
            ref="tablaCategorias"
            @editar-categoria="editarCategoria"
        />

    </div>

</template>

<script>

import FormularioCategorias from '@/components/FormularioCategorias.vue'
import TablaCategorias from '@/components/TablaCategorias.vue'

export default {

    name: 'CategoriasView',

    components: {

        FormularioCategorias,
        TablaCategorias

    },

    methods: {

        recargarTabla() {

            this.$refs.tablaCategorias.listarCategorias()

        },

        editarCategoria(categoria) {

            this.$refs.formularioCategorias.cargarCategoria(categoria)

        }


    }


}

</script>

<style scoped>

.page{

    width:90%;
    max-width:1200px;
    margin:40px auto;

}

.titulo{

    text-align:center;
    margin-bottom:35px;

}

.titulo h1{

    color:#0B6E4F;
    margin-bottom:10px;

}

.titulo p{

    color:#666;

}
</style>