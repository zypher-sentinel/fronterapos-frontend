<template>

    <div>

        <h2>Lista de Productos</h2>

        <table border="1">

            <thead>

                <tr>

                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th>Categoría</th>
                    <th>Acciones</th>

                </tr>

            </thead>

            <tbody>

                <tr
                    v-for="producto in productos"
                    :key="producto.idProducto"
                >

                    <td>{{ producto.idProducto }}</td>
                    <td>{{ producto.nombre }}</td>
                    <td>${{ producto.precio }}</td>
                    <td>{{ producto.stock }}</td>
                    <td>{{ producto.categoria }}</td>

                    <td>

                        <button
                            class="btn-editar"
                            @click="$emit('editar-producto', producto)"
                        >
                            Editar
                        </button>

                        <button
                            class="btn-eliminar"
                            @click="eliminarProducto(producto.idProducto)"
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

import productoService from '../services/productoService'
import alertService from '../services/alertService'

export default {

    expose: ['listarProductos'],

    name: 'TablaProductos',

    data() {

        return {

            productos: []

        }

    },

    methods: {

        async listarProductos() {

            try {

                const response = await productoService.listar()

                this.productos = response.data

            } catch(error) {

                console.log(error)

                alert('Error al listar productos')

            }

        },

        async eliminarProducto(id) {

            try {

                const respuesta = await alertService.confirmar(
                    'Esta acción eliminará el producto.'
                )

                if (!respuesta.isConfirmed) {

                    return

                }

                await productoService.eliminar(id)

                alertService.exito(
                    'Producto eliminado',
                    'El producto fue eliminado correctamente.'
                )

                this.listarProductos()

            } catch(error) {

                alertService.error(
                    'Error',
                    'No fue posible eliminar el producto.'
                )

            }

        }

    },

    mounted() {

        this.listarProductos()

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