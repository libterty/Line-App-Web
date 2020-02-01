<template>
    <section>
        <b-container class="py-5" id="line-login">
            <b-card title="Happy to see you again">
                <b-card-text>Login with your Line Account</b-card-text>
                <b-button
                    variant="info"
                    size="lg"
                    href="https://lineappserver.herokuapp.com/api/v1/auth/line"
                > Login </b-button>
            </b-card>
        </b-container>
    </section>
</template>

<script>
import Request from '../api/index';
import { Toast } from '../utils/helpers';
const request = new Request();

export default {
    async created() {
        try {
            const res = await request.userInfo();
            if (res.status === 'success') {
                localStorage.setItem('credit', JSON.stringify(res.user));
                Toast.fire({
                    icon: 'success',
                    title: 'SignIn Success',
                    text: 'You will be redirect to shop page'
                });
                return this.$router.go({ name: 'Shops' });
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