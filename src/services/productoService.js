import api from './api'

export default {

    listar() {

        return api.get('/productos')

    },

    guardar(producto) {

        return api.post('/productos', producto)

    },

    actualizar(id, producto) {

        return api.put(`/productos/${id}`, producto)

    },

    eliminar(id) {

        return api.delete(`/productos/${id}`)

    }

}