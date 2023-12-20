<script>
import Login from "@/components/Login.vue"
import Logout from "@/components/Logout.vue";


export default {
    data() {
        return {
            user: this.$auth0.user,
            isAuthenticated: this.$auth0.isAuthenticated,
            isLoading: this.$auth0.isLoading,
        };
    },
    components: {
        Login,
        Logout,

    },
};
</script>

<template>
    <nav>
        <router-link class="router_link" to="/">Home</router-link>
        <router-link class="router_link" to="/About">About</router-link>
        <router-link class="router_link" to="/Showcase">Showcase</router-link>
        <router-link class="router_link" to="/Profile">Profile</router-link>
        <div>
            <Login v-if="!isAuthenticated" />
            <Logout v-else="isAuthenticated" />
        </div>
    </nav>
</template>

<style scoped>
nav {
    background-color: #101010;
    height: 3em;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: -1px 2px 5px #101010;
}

.router_link {
    color: white;
    text-decoration: none;
    font-size: 2em;
    padding: 0 10px;
    border-radius: 10px;
}

.router-link-active {
    background-color: grey;
    transition: ease-in-out 200ms;

}

@media (min-width: 1024px) {}
</style>