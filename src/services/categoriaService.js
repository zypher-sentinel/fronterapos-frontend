import api from './api'

export default {

    listar() {

        return api.get('/categorias')

    },

    guardar(categoria) {

        return api.post('/categorias', categoria)

    },

    actualizar(id, categoria) {

        return api.put(`/categorias/${id}`, categoria)

    },

    eliminar(id) {

        return api.delete(`/categorias/${id}`)

    }

}