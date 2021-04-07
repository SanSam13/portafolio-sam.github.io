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
                            <h2>Hola, ¿Qué tal?</h2>
                            <p>Yo soy Sandra, egresada de la carrera de Ingeniería en Sistemas Computacionales.
                                Orgullosa front-end developer desempeñando siempre profesionalismo, trabajo en equipo, organización y constantemente aprendiendo nuevas cosas. 
                            </p>
                            <p>Mis hobbies son ver series y películas, escuchar podcast, además me encanta salir ya sea para tomar un cafecito o para conocer y fotografiar pueblos y lugares mágicos.</p>
                            <a href="https://cv-sandra.netlify.app" class="btn btn-1" target="_blank">
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