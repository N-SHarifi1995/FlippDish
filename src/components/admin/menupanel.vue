<template>
    <div>
        <MenuPart></MenuPart>
    </div>
</template>

<script>



import MenuPart from '../material/MenuPart.vue';
export default {
    name: "MenusPanel",
    data() {
        return {
            model: 0
        };
    },
    components: { MenuPart },

    methods: {
        getsrc(addres) {
            return require(`@/assets/img/${addres}`);
        },
       
    },
   
}
</script>
<style lang="scss" scoped>

</style>
