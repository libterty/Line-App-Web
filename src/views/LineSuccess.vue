<template>
    <section>
        <b-container class="py-5" id="line-login-success">
            <h1>Success Login</h1>
            <h3>Welcome back {{user}}</h3>
            <a href="/shops"> Go to Shop Page </a>
        </b-container>
    </section>
</template>

<script>
import Request from '../api/index';
import { Toast } from '../utils/helpers';
const request = new Request();

export default {
    data() {
        return {
            user: ''
        }
    },
    async created() {
        try {
            const res = await request.userInfo();
            if (res.status === 'success') {
                localStorage.setItem('credit', JSON.stringify(res.user));
                const user = JSON.parse(localStorage.getItem('credit')).user;
                this.user = user.name;
                return Toast.fire({
                    icon: 'success',
                    title: 'SignIn Success',
                    text: 'Click the link to go to Shop Page'
                });
            }
        } catch (error) {
            Toast.fire({
                icon: 'error',
                title: error.message
            });
        }
    }
}
</script>