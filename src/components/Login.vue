<template>
    <div>
        <button @click="login">Log in</button>
    </div>
</template>
<script>
// Options API
export default {
    methods: {
        login() {
            this.$auth0.loginWithRedirect();
        }
    }
};
</script>