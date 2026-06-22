<template>

    <div
        class="card-mesa"
        :class="claseEstado"
    >

        <div class="icono">

            <i class="fas fa-chair"></i>

        </div>

        <h2>

            Mesa {{ mesa.numeroMesa }}

        </h2>

        <p>

            <strong>Capacidad:</strong>

            {{ mesa.capacidad }} personas

        </p>

        <p>

            <strong>Estado:</strong>

            {{ mesa.estado }}

        </p>

        <div class="botones">

            <button
                class="btn"
                @click="$emit('editar', mesa)"
            >
                Editar
            </button>

            <button
                class="btn btn-danger"
                @click="$emit('eliminar', mesa.idMesa)"
            >
                Eliminar
            </button>

        </div>

    </div>

</template>

<script>

export default {

    name: 'CardMesa',

    props: {

        mesa: Object

    },

    computed: {

        claseEstado() {

            if (this.mesa.estado === 'Disponible') {

                return 'disponible'

            }

            if (this.mesa.estado === 'Ocupada') {

                return 'ocupada'

            }

            return 'reservada'

        }

    }

}

</script>

<style scoped>

.card-mesa{

    background:white;

    border-radius:15px;

    padding:25px;

    box-shadow:0px 8px 20px rgba(0,0,0,.12);

    border-left:8px solid #0B6E4F;

    transition:.3s;

}

.card-mesa:hover{

    transform:translateY(-5px);

}

.icono{

    font-size:45px;

    color:#0B6E4F;

    text-align:center;

    margin-bottom:15px;

}

h2{

    text-align:center;

    color:#2C3E50;

    margin-bottom:20px;

}

p{

    margin-bottom:10px;

}

.botones{

    margin-top:20px;

    display:flex;

    gap:10px;

}

.botones button{

    flex:1;

}

.disponible{

    border-left-color:#2E7D32;

}

.ocupada{

    border-left-color:#C62828;

}

.reservada{

    border-left-color:#F9A825;

}

</style>