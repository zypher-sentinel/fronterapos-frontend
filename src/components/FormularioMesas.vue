<template>

    <div class="formulario">

        <h2>

            {{ idMesa == null ? 'Agregar Mesa' : 'Editar Mesa' }}

        </h2>

        <input
            type="number"
            v-model="numeroMesa"
            placeholder="Número de mesa"
        >

        <input
            type="number"
            v-model="capacidad"
            placeholder="Capacidad"
        >

        <select v-model="estado">

            <option disabled value="">
                Seleccione un estado
            </option>

            <option value="Disponible">
                Disponible
            </option>

            <option value="Ocupada">
                Ocupada
            </option>

            <option value="Reservada">
                Reservada
            </option>

        </select>

        <button
            class="btn"
            @click="guardarMesa"
        >

            {{ idMesa == null ? 'Guardar Mesa' : 'Actualizar Mesa' }}

        </button>

    </div>

</template>

<script>

import mesaService from '../services/mesaService'
import alertService from '../services/alertService'

export default {

    expose: ['cargarMesa'],

    name:'FormularioMesas',

    data(){

        return{

            idMesa:null,
            numeroMesa:'',
            capacidad:'',
            estado:''

        }

    },

    methods: {

    async guardarMesa() {

        try {

            const mesa = {

                numeroMesa: this.numeroMesa,
                capacidad: this.capacidad,
                estado: this.estado

            }

            if (this.idMesa == null) {

                await mesaService.guardar(mesa)

                alertService.exito('Mesa registrada', 
                'La mesa fue registrada correctamente.')

            } else {

                await mesaService.actualizar(
                    this.idMesa,
                    mesa
                )

                alertService.exito('Mesa actualizada', 
                'Los datos de la mesa fueron actualizados.')

            }

            this.numeroMesa = ''
            this.capacidad = ''
            this.estado = ''
            this.idMesa = null

            this.$emit('mesa-guardada')

        } catch(error) {

            console.log(error)

            alertService.error('Error', 
            'No fue posible guardar la mesa.')

        }

    },

    cargarMesa(mesa) {

        this.idMesa = mesa.idMesa
        this.numeroMesa = mesa.numeroMesa
        this.capacidad = mesa.capacidad
        this.estado = mesa.estado

    }

}    

}

</script>

<style scoped>

.formulario{

    background:white;
    width:400px;
    margin:auto;
    margin-bottom:40px;
    padding:30px;
    border-radius:15px;
    display:flex;
    flex-direction:column;
    gap:15px;
    box-shadow:0px 8px 20px rgba(0,0,0,.12);

}

h2{

    color:#0B6E4F;
    margin-bottom:20px;
    text-align:center;

}

input,
select{

    padding:12px;
    border-radius:8px;
    border:1px solid #CCC;
    font-size:16px;

}

.btn{

    width:100%;

}

</style>