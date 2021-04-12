<template>
  <header id="header">
      <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12">
                <navbar/>
            </div>
          </div>
      </div>
  </header>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
  components: {
    Navbar
  },
  created(){
    this.scrollHeader()
  },
  methods: {
    scrollHeader(){
      window.onscroll = function() {
          let header = document.getElementById('header')
          let scrollVertical = window.scrollY

          if (scrollVertical >= 400) {
            header.classList.add('active')
          }else{
            header.classList.remove('active')
          }
      };
    }
  }
}
</script>

<style>

</style>