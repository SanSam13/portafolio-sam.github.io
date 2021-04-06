<template>
  <div class="menu">
    <b-navbar toggleable="lg" type="dark" variant="">
        <b-navbar-brand href="https://portafolio-sam.netlify.app"><b-icon icon="code-slash"></b-icon>Portafolio</b-navbar-brand>

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-collapse is-nav id="nav_collapse">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item"><router-link class="link-menu" :to="{hash: '#home'}" @click.native="anchorHashCheck">Inicio</router-link></li>
                <li class="nav-item"><router-link class="link-menu" :to="{hash: '#about'}" @click.native="anchorHashCheck">Acerca de mí</router-link></li>
                <li class="nav-item"><router-link class="link-menu" :to="{hash: '#projects'}" @click.native="anchorHashCheck">Proyectos</router-link></li>
                <li class="nav-item"><router-link class="link-menu" :to="{hash: '#contact'}" @click.native="anchorHashCheck">Contacto</router-link></li>
            </ul>
        </b-collapse>
    </b-navbar>
</div>
</template>

<script>
export default {
    methods: {
    anchorHashCheck() {
        if (window.location.hash === this.$route.hash) {
            const el = document.getElementById(this.$route.hash.slice(1))
            if (el) {
                scroll({
                    top: el.offsetTop,
                    behavior: "smooth"
                });
            }
        }
        },
    },
    // mounted() {
    //     this.anchorHashCheck()
    // }
}
</script>

<style>

</style>