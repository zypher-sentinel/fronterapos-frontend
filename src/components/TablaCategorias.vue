<template>

    <div>

        <h2>Lista de Categorías</h2>

        <table border="1">

            <thead>

                <tr>

                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Acciones</th>

                </tr>

            </thead>

            <tbody>

                <tr
                    v-for="categoria in categorias"
                    :key="categoria.idCategoria"
                >

                    <td>{{ categoria.idCategoria }}</td>
                    <td>{{ categoria.nombre }}</td>
                    <td>{{ categoria.descripcion }}</td>
                    <td>
                        
                        <button
                            class="btn-editar"
                            @click="$emit('editar-categoria', categoria)"
                        >
                            Editar
                        </button>

                        <button
                            class="btn-eliminar"
                            @click="eliminarCategoria(categoria.idCategoria)"
                        >
                            Eliminar
                        </button>

                    </td>

                </tr>

            </tbody>

        </table>

    </div>

</template>

<script>

import categoriaService from '../services/categoriaService'
import alertService from '../services/alertService'

export default {

    expose: ['listarCategorias'],

    name: 'TablaCategorias',

    data() {

        return {

            categorias: []

        }

    },

    methods: {

        async listarCategorias() {

            try {

                const response = await categoriaService.listar()

                this.categorias = response.data

            } catch(error) {

                console.log(error)

                alert('Error al listar categorías')

            }

        },

        async eliminarCategoria(id) {

            try {

                const respuesta = await alertService.confirmar(
                'Esta acción eliminará la categoría.'
                )

                if (!respuesta.isConfirmed) {

                    return

                }

                await categoriaService.eliminar(id)

                alertService.exito(
                    'Categoría eliminada',
                    'La categoría fue eliminada correctamente.'
                )

                this.listarCategorias()

            } catch(error) {

                console.log(error)

                alertService.error(
                'Error',
                'No fue posible eliminar la categoría.'
            )

            }

}

    },

    mounted() {

        this.listarCategorias()

    }

}

</script>

<style scoped>

table {

    width: 100%;
    border-collapse: collapse;
    background-color: white;
    box-shadow: 0px 0px 15px rgba(0,0,0,0.2);

}

th {

    background-color: green;
    color: white;
    padding: 15px;

}

td {

    padding: 12px;
    text-align: center;
    border-bottom: 1px solid #ddd;

}

tr:hover {

    background-color: #f5f5f5;

}

.btn-editar {

    background-color: green;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
    margin-right: 5px;
    font-weight: bold;

}

.btn-editar:hover {

    background-color: darkgreen;

}

.btn-eliminar {

    background-color: red;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;

}

.btn-eliminar:hover {

    background-color: darkred;

}

</style>