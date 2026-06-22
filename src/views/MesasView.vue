<template>

    <div class="page">

        <div class="titulo">

            <h1>
                <i class="fas fa-chair"></i>
                Gestión de Mesas
            </h1>

            <p>
                Administra las mesas del restaurante.
            </p>

        </div>

        <FormularioMesas 

            ref="formularioMesa"
            @mesa-guardada="listarMesas"

        />

        <div class="contenedor-mesas">

            <CardMesa
                v-for="mesa in mesas"
                :key="mesa.idMesa"
                :mesa="mesa"
                @editar="editarMesa"
                @eliminar="eliminarMesa"
            />

        </div>

    </div>

</template>

<script>

import FormularioMesas from '../components/FormularioMesas.vue'
import CardMesa from '../components/CardMesa.vue'
import mesaService from '../services/mesaService'
import alertService from '../services/alertService'

export default {

    name: 'MesasView',

    components: {

        FormularioMesas,
        CardMesa

    },

    data() {

        return {

            mesas: []

        }

    },

    methods: {

        async listarMesas() {

            try {

                const response = await mesaService.listar()

                this.mesas = response.data

            } catch(error) {

                console.log(error)

            }

        },

        editarMesa(mesa) {

            this.$refs.formularioMesa.cargarMesa(mesa)

        },

        async eliminarMesa(id) {

            try {

            const respuesta = await alertService.confirmar(
                'Esta acción eliminará la mesa.'
            )

            if (!respuesta.isConfirmed) {

                return

            }

            await mesaService.eliminar(id)

            alertService.exito(
                'Mesa eliminada',
                'La mesa fue eliminada correctamente.'
        )

            this.listarMesas()

            } catch(error) {

            console.log(error)

            alertService.error(
                'Error',
                'No fue posible eliminar la mesa.'
            )

            }

        }

    },

    mounted() {

        this.listarMesas()

    }

}

</script>

<style scoped>

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

.contenedor-mesas{

    margin-top:40px;

    display:grid;

    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));

    gap:25px;

}

</style>