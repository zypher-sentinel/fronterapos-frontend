import api from './api'

export default {

    obtenerResumen() {

        return api.get('/dashboard')

    }

}