<template>
    <div>
        <b-navbar type="dark" variant="info">
            <b-navbar-brand href="/">Shops</b-navbar-brand>
            <b-navbar-nav class="ml-auto">
                <b-nav-item>
                    <b-button
                        v-if="isLogin === true"
                        size="sm"
                        class="my-2 my-sm-0"
                        type="button"
                        @click="logOut"
                    >Logout</b-button>
                    <b-button
                        v-if="isLogin === false"
                        size="sm"
                        class="my-2 my-sm-0"
                        type="button"
                        @click="logIn"
                    >LogIn</b-button>
                </b-nav-item>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
import Request from '../api/index';
import { Toast } from '../utils/helpers';
const credit = JSON.parse(localStorage.getItem('credit'));
const request = new Request();

export default {
    data() {
        return {
            isLogin: credit ? true : false
        }
    },
    methods: {
        async logOut() {
            try {
                const res = await request.getLogout();
                if (res.status === 'success') {
                    localStorage.removeItem('credit')
                    Toast.fire({
                        icon: 'success',
                        title: 'Signout Success'
                    });
                    return this.$router.go({ name: 'Line' });
                }
                return Toast.fire({
                    icon: 'error',
                    title: res.message
                });
            } catch (error) {
                return Toast.fire({
                    icon: 'error',
                    title: error.message
                });
            }
        },
        logIn() {
            return this.$router.go({ name: 'Line' });
        }
    },
    watch: {
        $route: function (to, from) {
            if (from.name === null && to.name !== 'Line') {
                this.isLogin = true;
            }
        }
    }
}
</script>