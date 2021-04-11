<template>
    <div class="spinner" v-show="loading.status">
      <div class="container-spinner">
        <p>Cargando proyectos...</p>
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </div>
    </div>
</template>

<script>
import { mapState } from "vuex"
export default {
    name: 'Spinner',
    computed:{
        ...mapState(['loading'])
    }
}
</script>

<style>

</style>