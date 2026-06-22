<template>

    <div class="page">

        <div class="dashboard-header">

            <img
                :src="logo"
                class="logo-dashboard"
                alt="FronteraPOS"
            >

            <h1>Bienvenido a FronteraPOS</h1>

            <p>
                Sistema de Gestión para Restaurantes
            </p>

        </div>

        <div class="dashboard-grid">

            <div class="card modulo">

                <div class="icono">

                    <i class="fas fa-folder"></i>

                </div>

                <h2>Categorías</h2>

                <h3 class="contador">

                    {{ totalCategorias }}

                </h3>

                <p>

                    Categorías registradas

                </p>

                <button
                    class="btn"
                    @click="$router.push('/categorias')"
                >
                    Administrar
                </button>

            </div>

            <div class="card modulo">

                <div class="icono">
                    
                    <i class="fas fa-utensils"></i>

                </div>

                <h2>Productos</h2>

                <h3 class="contador">

                    {{ totalProductos }}

                </h3>

                <p>

                    Productos registrados

                </p>

                <button
                    class="btn"
                    @click="$router.push('/productos')"
                >
                    Administrar
                </button>

            </div>

            <div class="card modulo">

                <div class="icono">
                    
                    <i class="fas fa-chair"></i>
                    
                </div>

                <h2>Mesas</h2>

                <h3 class="contador">

                    {{ totalMesas }}

                </h3>

                <p>

                    Mesas registradas

                </p>

                <button
                    class="btn"
                    @click="$router.push('/mesas')"
                >
                    Administrar
                </button>

            </div>

            <div class="card modulo">

                <div class="icono">

                    <i class="fas fa-user"></i>

                </div>

                <h2>Usuarios</h2>

                <h3 class="contador">

                    {{ totalUsuarios }}

                </h3>

                <p>

                    Usuarios registrados

                </p>

                <button
                    class="btn"
                    disabled
                >
                    Próximamente
                </button>

            </div>

        </div>

    </div>

</template>

<script>

import logo from '../assets/images/logo-vertical.png'
import dashboardService from '../services/dashboardService'

export default {

    name: 'DashboardView',

    data() {

        return {

            logo,

            totalCategorias: 0,

            totalProductos: 0,

            totalMesas: 0,

            totalUsuarios: 0

        }

    },

    methods: {

        async cargarDashboard() {

            try {

                const response = await dashboardService.obtenerResumen()

                this.totalCategorias = response.data.totalCategorias

                this.totalProductos = response.data.totalProductos

                this.totalMesas = response.data.totalMesas

                this.totalUsuarios = response.data.totalUsuarios

            } catch(error) {

                console.log(error)

            }

        }

    },

    mounted() {

        this.cargarDashboard()

    }

}

</script>

<style scoped>

.dashboard-header{

    text-align:center;
    padding:30px 20px 10px;

}

.logo-dashboard{

    width:220px;
    margin-bottom:15px;

}

.dashboard-header h1{

    color:#0B6E4F;
    margin-bottom:10px;

}

.dashboard-header p{

    color:#666;

}

.dashboard-grid{

    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
    gap:30px;
    margin-top:45px;

}

.card{

    background:white;
    border-radius:18px;
    padding:30px;
    text-align:center;
    box-shadow:0 10px 25px rgba(0,0,0,.08);
    transition:.25s;

}

.card:hover{

    transform:translateY(-6px);

}

.card h2{

    margin-bottom:15px;

}

.card p{

    margin-bottom:25px;
    color:#666;

}

.btn{

    margin-top:auto;

}

.modulo{

    display:flex;
    flex-direction:column;
    justify-content:space-between;
    min-height:260px;

}

.icono{

    font-size:60px;
    color:#0B6E4F;
    margin-bottom:20px;

}

button:disabled{

    background:#BDBDBD;
    cursor:not-allowed;

}

button:disabled:hover{

    background:#BDBDBD;
    transform:none;

}

.contador{

    font-size:52px;
    font-weight:bold;
    color:#0B6E4F;
    margin:15px 0;

}

@media(max-width:768px){

    .dashboard-grid{

        grid-template-columns:1fr;

    }

}

</style>