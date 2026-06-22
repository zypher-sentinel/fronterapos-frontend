<template>

    <div>

        <nav class="navbar">

            <div class="logo">

                <img
                    :src="logo"
                    class="logo-navbar"
                    alt="FronteraPOS"
                >

            </div>

            <div class="links">

            <router-link
                v-if="!logueado"
                to="/login"
            >
                Login
            </router-link>

            <router-link
                v-if="logueado"
                to="/dashboard"
            >
                Inicio
            </router-link>

            <router-link
                v-if="logueado"
                to="/categorias"
            >
                Categorías
            </router-link>

            <router-link
                v-if="logueado"
                to="/productos"
            >
                Productos
            </router-link>

            <router-link
                v-if="logueado"
                to="/mesas"
            >
                Mesas
            </router-link>

            <a
                v-if="logueado"
                href="#"
                @click="cerrarSesion"
            >
                Cerrar sesión
            </a>

            </div>

        </nav>

        <router-view />

        <footer class="footer">

            <p>

                FronteraPOS v1.0 | © 2026 | Desarrollado por Jhordy Naranjo

            </p>

        </footer>

    </div>

</template>

<script>

import logo from './assets/images/logo-horizontal.png'

export default {

    name: 'App',

    data() {

        return {
            logo,

            logueado: false

        }

    },

    mounted() {

        this.verificarSesion()

    },

    methods: {

        verificarSesion() {

            this.logueado =
                localStorage.getItem('logueado') === 'true'

        },

        cerrarSesion() {

            localStorage.removeItem('logueado')

            this.logueado = false

            this.$router.push('/login')

        }

    },

    watch: {

        $route() {

            this.verificarSesion()

        }

    }

}

</script>

<style>

body {

    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(
    to bottom,
    #f5f5f5,
    #e0e0e0
);

}

.navbar{

    width:100%;

    box-sizing:border-box;

    background:linear-gradient(
        90deg,
        #0B6E4F 0%,
        #FFFFFF 50%,
        #C62828 100%
    );

    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:15px 40px;
    box-shadow:0 3px 15px rgba(0,0,0,.12);

}

.logo {

    font-size: 30px;
    font-weight: bold;
    color: black;

}

.links{

    display:flex;
    align-items:center;
    gap:28px;

}

.links a{

    color:#2C3E50;
    text-decoration:none;
    font-weight:600;
    transition:.25s;

}

.links a.router-link-active{

    color:#0B6E4F;
    border-bottom:3px solid #0B6E4F;
    padding-bottom:6px;

}

.links a:hover {

    color:#0B6E4F;

}

.logo-navbar{

    height:52px;
    display:block;

}

.footer{

    margin-top:50px;
    padding:20px;
    text-align:center;
    background:#2C3E50;
    color:white;
    font-size:14px;

}

.footer p{

    margin:0;

}

@media(max-width:900px){

    .navbar{

        flex-direction:column;
        gap:20px;
        padding:20px;

    }

    .links{

        flex-wrap:wrap;
        justify-content:center;
        gap:15px;

    }

}

</style>