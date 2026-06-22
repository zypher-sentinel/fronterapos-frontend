<template>

    <div class="formulario">

        <h2>Registrar Producto</h2>

        <input
            type="text"
            v-model="nombre"
            placeholder="Nombre del producto"
        >

        <input
            type="number"
            v-model="precio"
            placeholder="Precio"
        >

        <input
            type="number"
            v-model="stock"
            placeholder="Stock"
        >

        <select v-model="categoria">

        <option
            disabled
            value=""
        >
            Seleccione una categoría
        </option>

        <option
            v-for="cat in categorias"
            :key="cat.idCategoria"
            :value="cat.nombre"
        >
            {{ cat.nombre }}
        </option>

</select>

        <button @click="guardarProducto">

            {{ idProducto == null ? 'Guardar' : 'Actualizar' }}

        </button>

    </div>

</template>

<script>

import productoService from '../services/productoService'
import categoriaService from '../services/categoriaService'
import alertService from '../services/alertService'

export default {

    expose: ['cargarProducto'],

    name: 'FormularioProductos',

    data() {

        return {

            idProducto: null,
            nombre: '',
            precio: '',
            stock: '',
            categoria: '',
            categorias: []

        }

    },

    methods: {

        async cargarCategorias() {

            try {

                const response = await categoriaService.listar()

                this.categorias = response.data

            } catch(error) {

                console.log(error)

            }

        },

        async guardarProducto() {

            try {

                const producto = {

                    nombre: this.nombre,
                    precio: this.precio,
                    stock: this.stock,
                    categoria: this.categoria

                }

                if (this.idProducto == null) {

                    await productoService.guardar(producto)

                    alertService.exito('Producto registrado', 
                    'El producto fue registrado correctamente.')

                } else {

                    await productoService.actualizar(this.idProducto, producto)

                    alertService.exito('Producto actualizado', 
                    'El producto fue actualizado correctamente.')

                }

                this.$emit('producto-guardado')

                this.idProducto = null
                this.nombre = ''
                this.precio = ''
                this.stock = ''
                this.categoria = ''

            } catch(error) {

                console.log(error)

                alertService.error('Error', 
                'No fue posible guardar el producto.')

            }

        },

        cargarProducto(producto) {

            this.idProducto = producto.idProducto
            this.nombre = producto.nombre
            this.precio = producto.precio
            this.stock = producto.stock
            this.categoria = producto.categoria

        }

    },

    mounted() {

        this.cargarCategorias()

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

select {

    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 16px;

}

input:focus {

    outline: none;
    border: 2px solid green;

}

select:focus {

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