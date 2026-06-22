<template>

    <div class="formulario">

        <h2>Registrar Categoría</h2>

        <input
            type="text"
            v-model="nombre"
            placeholder="Nombre de la categoría"
        >

        <input
            type="text"
            v-model="descripcion"
            placeholder="Descripción"
        >

        <button @click="guardarCategoria">
            Guardar
        </button>

    </div>

</template>

<script>

import categoriaService from '../services/categoriaService'
import alertService from '../services/alertService'

export default {

    name: 'FormularioCategorias',

    data() {

        return {

            idCategoria: null,
            nombre: '',
            descripcion: ''

        }

    },

    methods: {

        async guardarCategoria() {

            try {

                const categoria = {

                    nombre: this.nombre,
                    descripcion: this.descripcion

                }
                if (this.idCategoria == null) {

                    await categoriaService.guardar(categoria)

                    alertService.exito('Categoría registrada', 'La categoría fue registrada correctamente.')

                } else {

                    await categoriaService.actualizar(this.idCategoria, categoria)

                    alertService.exito('Categoría actualizada', 'La categoría fue actualizada correctamente.')

                }

                this.$emit('categoria-guardada')

                this.idCategoria = null
                this.nombre = ''
                this.descripcion = ''

            } catch(error) {

                console.log(error)

                alertService.error('Error', 
                'No fue posible guardar la categoría.')

            }

        },

        cargarCategoria(categoria) {

            this.idCategoria = categoria.idCategoria
            this.nombre = categoria.nombre
            this.descripcion = categoria.descripcion

        }

    }

}

</script>

<style scoped>

.formulario {

    background-color: white;
    padding: 30px;
    border-radius: 15px;
    width: 400px;
    margin: auto;
    margin-bottom: 40px;

    display: flex;
    flex-direction: column;
    gap: 15px;

    box-shadow: 0px 0px 15px rgba(0,0,0,0.2);

}

h2 {

    text-align: center;
    color: #006400;

}

input {

    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 16px;

}

input:focus {

    outline: none;
    border: 2px solid green;

}

button {

    padding: 12px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;

}

button:hover {

    background-color: darkred;

}

</style>