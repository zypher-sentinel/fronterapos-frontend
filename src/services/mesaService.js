import api from './api'

export default {

    listar() {

        return api.get('/mesas')

    },

    guardar(mesa) {

        return api.post('/mesas', mesa)

    },

    actualizar(id, mesa) {

        return api.put(`/mesas/${id}`, mesa)

    },

    eliminar(id) {

        return api.delete(`/mesas/${id}`)

    }

}