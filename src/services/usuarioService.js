import api from './api'

export default {

    login(usuario) {

        return api.post('/usuarios/login', usuario)

    }

}