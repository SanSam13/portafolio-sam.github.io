<template>
  <section class="home">
      <Banner/>
      <div class="about" id="about"> 
          <div class="container">
              <div class="row">
                  <div class="col-xs-6 col-md-6 col-lg-6">
                        <div class="image">
                            <img src="../assets/sam3.jpg" alt="Mi foto">
                        </div>
                        <div class="icon">
                            <b-icon icon="bullseye"></b-icon>
                            <b-icon icon="music-note-beamed"></b-icon>
                        </div>
                  </div>
                  <div class="col-xs-6 col-md-6 col-lg-6">
                      <div class="description">
                            <div class="icon">
                                <b-icon icon="filter-right"></b-icon>
                            </div>
                            <h2>Hola</h2>
                            <p>Mi nombre es Sandra, egresada de la carrera de Ingeniería en Sistemas Computacionales, he trabajado como desarrollador front end en agencias dígitales. Soy una persona proactiva, organizada y responsable con mi trabajo y mi equipo. En mis tiempos libres me gusta ver series, salir por el cafecito y conocer pueblos mágicos.</p>
                            <a href="#" class="btn btn-1" target="_blank">
                                <svg>
                                    <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                                </svg>
                                Ver CV
                            </a>
                      </div>
                  </div>
                  
              </div>
          </div>
      </div>
      <Projects/>
  </section>
</template>

<script>
import Banner from '../components/Banner'
import Projects from '../components/Projects'
export default {
    components : {
        Projects, Banner
    }

}
</script>

<style>

</style>