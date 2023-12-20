
<script>
import axios from 'axios';

export default {

    mounted() {
        this.fetchData(); // Fetch data when the component is mounted
    },
    methods: {
        async fetchData() {
            // Check if data is in cache and is still fresh (e.g., less than 5 minutes old)
            if (this.$store.state.data && this.$store.state.lastFetchTime && (Date.now() - this.$store.state.lastFetchTime < 5 * 60 * 1000)) {
                console.log('Using cached data:', this.$store.state.data);
                return;
            }

            try {
                const response = await axios.get('https://api.slingacademy.com/v1/sample-data/products?offset=5&limit=20');

                // Dispatch the mutation to update the Vuex store
                this.$store.commit('cacheData', response.data);

                // Log the fetched data to the console
                console.log('Fetched data:', response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
    },
};
</script>

<template>
    <main>
        <h1></h1>


    </main>
</template>

<style scoped>
@media (min-width: 1024px) {}
</style>
