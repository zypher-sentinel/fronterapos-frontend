<template>

    <div class="login-container">

        <div class="login-card">

            <img
                :src="logo"
                class="logo-login"
                alt="FronteraPOS"
            >

            <h2>Iniciar Sesión</h2>

            <input
                type="text"
                v-model="username"
                placeholder="Usuario"
            >

            <input
                type="password"
                v-model="password"
                placeholder="Contraseña"
            >

            <button @click="login">
                Ingresar
            </button>

            <p
                v-if="mensaje"
                class="mensaje"
            >
                {{ mensaje }}
            </p>

        </div>

    </div>

</template>

<script>

import axios from 'axios'
import logo from '../assets/images/logo-vertical.png'

export default {

    name: 'LoginView',

    data() {

        return {

            logo,

            username: '',
            password: '',
            mensaje: ''

        }

    },

    methods: {

        async login() {

            try {

                const usuario = {

                    username: this.username,
                    password: this.password

                }

                const response = await axios.post(
                    'http://localhost:8080/api/usuarios/login',
                    usuario
                )

                this.mensaje = response.data

                if (response.data === 'Inicio exitoso') {

                    localStorage.setItem('logueado', 'true')

                    this.$router.push('/dashboard')

                }

            } catch(error) {

                console.log(error)

                this.mensaje = 'Error en el servidor'

            }

        }

    }

}

</script>

<style scoped>

.login-container{

    min-height:100vh;

    display:flex;

    justify-content:center;

    align-items:center;

    background:linear-gradient(
        135deg,
        #F5F7FA,
        #E8ECEF
    );

}

.login-card{

    width:420px;

    background:white;

    border-radius:20px;

    padding:45px;

    box-shadow:0px 10px 35px rgba(0,0,0,.15);

}

.logo-login{

    width:240px;

    display:block;

    margin:auto;

    margin-bottom:30px;

}

h2{

    text-align:center;

    color:#2C3E50;

    margin-bottom:30px;

}

input{

    margin-bottom:18px;

}

button{

    width:100%;

    padding:14px;

    background:#0B6E4F;

    color:white;

    border:none;

    border-radius:10px;

    font-size:16px;

    font-weight:bold;

    cursor:pointer;

    transition:.25s;

}

button:hover{

    background:#084C3A;

    transform:translateY(-2px);

}

.mensaje{

    margin-top:20px;

    text-align:center;

    font-weight:bold;

    color:#C62828;

}

</style>