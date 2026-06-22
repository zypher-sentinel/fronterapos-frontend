import Swal from 'sweetalert2'

export default {

    exito(titulo, texto) {

    Swal.fire({

        toast: true,

        position: 'top-end',

        icon: 'success',

        title: texto,

        showConfirmButton: false,

        timer: 2500,

        timerProgressBar: true

        })

    },

    error(titulo, texto) {

        Swal.fire({

            icon: 'error',

            title: titulo,

            text: texto,

            confirmButtonColor: '#C62828'

        })

    },

    async confirmar(texto) {

        return await Swal.fire({

            title: '¿Estás seguro?',

            text: texto,

            icon: 'warning',

            showCancelButton: true,

            confirmButtonColor: '#0B6E4F',

            cancelButtonColor: '#C62828',

            confirmButtonText: 'Sí',

            cancelButtonText: 'Cancelar'

        })

    }

}