<template>
    <div>{{sycData()  }}</div>
</template>
<script>
export default {
    name: 'indexPart',
    data() {
        return {
            axios: null
            ,
            options: {}
        }
    }, methods: {
        async sycData() {
            try {
                const response = await this.axios.request(this.options);
                console.log(response.data);
                return response.data
            } catch (error) {
                console.error(error);
            }
        }
    },
    mounted() {
        this.axios = require('axios');

        this.options = {
            method: 'GET',
            url: 'https://maptiles.p.rapidapi.com/en/map/v1/3/6/3.png',
            headers: {
                'X-RapidAPI-Key': 'd15f1f33b6msh077173734ae0c16p1b042cjsn21760dd4ba1d',
                'X-RapidAPI-Host': 'trueway-geocoding.p.rapidapi.com'
            }
        };
        this.sycData();

    }
}
</script>
<style></style>