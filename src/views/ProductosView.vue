<template>

    <div class="page">

        <div class="titulo">

            <h1>

                <i class="fas fa-utensils"></i>

                Gestión de Productos

            </h1>

            <p>

                Administra los productos del restaurante.

            </p>

        </div>

        <FormularioProductos
            ref="formularioProductos"
            @producto-guardado="recargarTabla"
        />

        <TablaProductos
            ref="tablaProductos"
            @editar-producto="editarProducto"
        />

    </div>

</template>

<script>

import FormularioProductos from '@/components/FormularioProductos.vue'
import TablaProductos from '@/components/TablaProductos.vue'

export default {

    name: 'ProductosView',

    components: {

        FormularioProductos,
        TablaProductos

    },

    methods: {

        recargarTabla() {

            this.$refs.tablaProductos.listarProductos()

        },

        editarProducto(producto) {

            this.$refs.formularioProductos.cargarProducto(producto)

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