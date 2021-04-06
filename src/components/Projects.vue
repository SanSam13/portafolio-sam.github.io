<template>
   <div class="projects" id="projects">
       <div class="icons">
            <div><b-icon icon="grip-vertical"></b-icon></div>
            <div><b-icon icon="grip-vertical"></b-icon></div>
            <div><b-icon icon="grip-vertical"></b-icon></div>
       </div>
       <div class="container">
           <div class="row">
               <div class="col-xs-12 col-md-12 col-lg-12 text-center">
                    <h2>Proyectos </h2>
                    <div class="container-projects">
                        <div class="box-project bounce-enter-active" v-for="(projectIndex, index) in projectsToShow" :key="index">
                            <a :href="projects[projectIndex - 1].link" target="_blank" :title="projects[projectIndex - 1].title">
                                <img :src="projects[projectIndex - 1].image" alt="projects[projectIndex - 1].title">
                                <div class="info">
                                    <span>{{projects[projectIndex - 1].title}} <b-icon icon="arrow-right-square"></b-icon></span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <p>{{projectsToShow.length}}</p>
                    <!-- <div v-if="projectsToShow.length > 9"> -->
                    <div class="container text-center">
                        <button class="btn btn-1" @click="projectsToShow += 3">
                            <svg>
                                <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                            </svg>
                            Ver más
                        </button>
                    </div>
                    <!-- </div> -->
                    
                     <!-- <div class="container-projects">
                        <div class="box-project">
                            <a href="https://hotelesmx.com/" target="_blank" title="Hoteles MX">
                                <img src="../assets/sites/hotelesmx.jpg" alt="Hoteles MX">
                                <div class="info">
                                    <span>Hoteles MX <b-icon icon="arrow-right-square"></b-icon></span>
                                </div>
                            </a>
                        </div>
                        <div class="box-project">
                            <a href="https://kannski.live/" target="_blank" title="Kannski live">
                                <img src="../assets/sites/kannski_live.jpg" alt="Kannski live">
                                <div class="info">
                                    <span>Kannski live <b-icon icon="arrow-right-square"></b-icon></span>
                                </div>
                            </a>
                        </div>
                        <div class="box-project">
                            <a href="https://sevenjeans.mx/" target="_blank" title="Seven Jeans">
                                <img src="../assets/sites/sevenjeans.jpg" alt="">
                                <div class="info">
                                    <span>Seven Jeans <b-icon icon="arrow-right-square"></b-icon></span>
                                </div>
                            </a>
                        </div>
                        <div class="box-project">
                            <a href="https://hotelesmx.com/" target="_blank" title="Hoteles MX">
                                <img src="../assets/sites/hotelesmx.jpg" alt="Hoteles MX">
                                <div class="info">
                                    <span>Hoteles MX <b-icon icon="arrow-right-square"></b-icon></span>
                                </div>
                            </a>
                        </div>
                        <div class="box-project">
                            <a href="https://kannski.live/" target="_blank" title="Kannski live">
                                <img src="../assets/sites/kannski_live.jpg" alt="Kannski live">
                                <div class="info">
                                    <span>Kannski live <b-icon icon="arrow-right-square"></b-icon></span>
                                </div>
                            </a>
                        </div>
                        <div class="box-project">
                            <a href="https://sevenjeans.mx/" target="_blank" title="Seven Jeans">
                                <img src="../assets/sites/sevenjeans.jpg" alt="">
                                <div class="info">
                                    <span>Seven Jeans <b-icon icon="arrow-right-square"></b-icon></span>
                                </div>
                            </a>
                        </div>
                        <div class="box-project">
                            <a href="https://hotelesmx.com/" target="_blank" title="Hoteles MX">
                                <img src="../assets/sites/hotelesmx.jpg" alt="Hoteles MX">
                                <div class="info">
                                    <span>Hoteles MX <b-icon icon="arrow-right-square"></b-icon></span>
                                </div>
                            </a>
                        </div>
                        <div class="box-project">
                            <a href="https://kannski.live/" target="_blank" title="Kannski live">
                                <img src="../assets/sites/kannski_live.jpg" alt="Kannski live">
                                <div class="info">
                                    <span>Kannski live <b-icon icon="arrow-right-square"></b-icon></span>
                                </div>
                            </a>
                        </div>
                        <div class="box-project">
                            <a href="https://sevenjeans.mx/" target="_blank" title="Seven Jeans">
                                <img src="../assets/sites/sevenjeans.jpg" alt="">
                                <div class="info">
                                    <span>Seven Jeans <b-icon icon="arrow-right-square"></b-icon></span>
                                </div>
                            </a>
                        </div>
                     </div> -->
               </div>
           </div>
           <div class="row">
                <!-- <div class="col-md-4">
                    <div class="container-projects">
                        <div class="box-project">
                            <a href="https://hotelesmx.com/" target="_blank" title="Hoteles MX">
                                <img src="../assets/sites/hoteles_mx.jpg" alt="Hoteles MX">
                                <div class="info">
                                    <span>Hoteles MX <b-icon icon="arrow-right-square"></b-icon></span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="container-projects">
                        <div class="box-project">
                            <a href="https://hotelesmx.com/" target="_blank" title="Hoteles MX">
                                <img src="../assets/sites/kannski_live.jpg" alt="Hoteles MX">
                                <div class="info">
                                    <span>Hoteles MX <b-icon icon="arrow-right-square"></b-icon></span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="container-projects">
                        <div class="box-project">
                            <a href="https://hotelesmx.com/" target="_blank" title="Hoteles MX">
                                <img src="../assets/sites/seven_jeans.jpg" alt="Hoteles MX">
                                <div class="info">
                                    <span>Hoteles MX <b-icon icon="arrow-right-square"></b-icon></span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="container-projects">
                        <div class="box-project">
                            <a href="https://hotelesmx.com/" target="_blank" title="Hoteles MX">
                                <img src="../assets/sites/marzam.jpg" alt="Hoteles MX">
                                <div class="info">
                                    <span>Hoteles MX <b-icon icon="arrow-right-square"></b-icon></span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="container-projects">
                        <div class="box-project">
                            <a href="https://hotelesmx.com/" target="_blank" title="Hoteles MX">
                                <img src="../assets/sites/peques.jpg" alt="Hoteles MX">
                                <div class="info">
                                    <span>Hoteles MX <b-icon icon="arrow-right-square"></b-icon></span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="container-projects">
                        <div class="box-project">
                            <a href="https://hotelesmx.com/" target="_blank" title="Hoteles MX">
                                <img src="../assets/sites/hoteles_mision.jpg" alt="Hoteles MX">
                                <div class="info">
                                    <span>Hoteles MX <b-icon icon="arrow-right-square"></b-icon></span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="container-projects">
                        <div class="box-project">
                            <a href="https://hotelesmx.com/" target="_blank" title="Hoteles MX">
                                <img src="../assets/sites/televisa_llega.jpg" alt="Hoteles MX">
                                <div class="info">
                                    <span>Hoteles MX <b-icon icon="arrow-right-square"></b-icon></span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="container-projects">
                        <div class="box-project">
                            <a href="https://hotelesmx.com/" target="_blank" title="Hoteles MX">
                                <img src="../assets/sites/bimbo.jpg" alt="Hoteles MX">
                                <div class="info">
                                    <span>Hoteles MX <b-icon icon="arrow-right-square"></b-icon></span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-4">
                    <div class="container-projects">
                        <div class="box-project">
                            <a href="https://hotelesmx.com/" target="_blank" title="Hoteles MX">
                                <img src="../assets/sites/sky.jpg" alt="Hoteles MX">
                                <div class="info">
                                    <span>Hoteles MX <b-icon icon="arrow-right-square"></b-icon></span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="container-projects">
                        <div class="box-project">
                            <a href="https://hotelesmx.com/" target="_blank" title="Hoteles MX">
                                <img src="../assets/sites/kiui.jpg" alt="Hoteles MX">
                                <div class="info">
                                    <span>Hoteles MX <b-icon icon="arrow-right-square"></b-icon></span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="container-projects">
                        <div class="box-project">
                            <a href="https://hotelesmx.com/" target="_blank" title="Hoteles MX">
                                <img src="../assets/sites/imcp.jpg" alt="Hoteles MX">
                                <div class="info">
                                    <span>Hoteles MX <b-icon icon="arrow-right-square"></b-icon></span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="container-projects">
                        <div class="box-project">
                            <a href="https://hotelesmx.com/" target="_blank" title="Hoteles MX">
                                <img src="../assets/sites/el_poder_numeros.jpg" alt="Hoteles MX">
                                <div class="info">
                                    <span>Hoteles MX <b-icon icon="arrow-right-square"></b-icon></span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="container-projects">
                        <div class="box-project">
                            <a href="https://hotelesmx.com/" target="_blank" title="Hoteles MX">
                                <img src="../assets/sites/siermend.jpg" alt="Hoteles MX">
                                <div class="info">
                                    <span>Hoteles MX <b-icon icon="arrow-right-square"></b-icon></span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div> -->
                <div class="col-md-4">
                    <div class="container-projects">
                        <div class="box-project">
                            <a href="https://hotelesmx.com/" target="_blank" title="Hoteles MX">
                                <img src="../assets/sites/bioetix.jpeg" alt="Hoteles MX">
                                <div class="info">
                                    <span>Hoteles MX <b-icon icon="arrow-right-square"></b-icon></span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                
           </div>
       </div>
       
   </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {image: 'https://portafolio-sam.netlify.app/img/hoteles_mx.8c962a40.jpg', title: 'Hoteles Mx', link: 'https://hotelesmx.com', company: 'Polilla Studio', category: 'cms', year: '2020', order: 1},
                {image: 'https://portafolio-sam.netlify.app/img/kannski_live.18c0c080.jpg', title: 'Kannski Live', link: 'https://kannski.live', company: 'Polilla Studio', category: 'cms', year: '2020', order: 1},
                {image: 'https://portafolio-sam.netlify.app/img/seven_jeans.061e3958.jpg', title: 'Seven Jeans', link: 'https://sevenjeans.mx', company: 'Polilla Studio', category: 'shopify', year: '2020', order: 1},
                {image: 'https://portafolio-sam.netlify.app/img/marzam.9476dc7a.jpg', title: 'Marzam', link: 'https://www.marzam.com.mx', company: 'Ingenia', category: 'frontend', year: '2019', order: 1},
                {image: 'https://portafolio-sam.netlify.app/img/peques.8beae931.jpg', title: 'Marqco Peques', link: 'https://marqcopeques.com', company: 'Ingenia', category: 'frontend', year: '2019', order: 1},
                {image: 'https://portafolio-sam.netlify.app/img/hoteles_mision.dfcc2432.jpg', title: 'Hoteles Misión', link: 'https://www.hotelesmision.com.mx/', company: 'Ingenia', category: 'frontend', year: '2019', order: 1},
                {image: 'https://portafolio-sam.netlify.app/img/televisa_llega.663622f4.jpg', title: 'Televisa LLega 2020', link: '#', company: 'Ingenia', category: 'frontend', year: '2019', order: 1},
                {image: 'https://portafolio-sam.netlify.app/img/bimbo.5f459ad1.jpg', title: 'Sin dejar huella', link: 'https://www.sindejarhuella.mx/sections/sin-dejar-huella-manufactura.html', company: 'Ingenia', category: 'frontend', year: '2019', order: 1},
                {image: 'https://portafolio-sam.netlify.app/img/sky.b4c5abb1.jpg', title: 'Sky', link: 'https://www.sky.com.mx/no-suscriptor/landing-telecomm', company: 'Ingenia', category: 'frontend', year: '2019', order: 1},
                {image: '#', title: 'Bioétix', link: 'https://play.google.com/store/apps/details?id=io.bioetica.bioetix&hl=es_MX&gl=US', company: 'Ingenia', category: 'juego', year: '2019', order: 1},
                
                {image: 'https://portafolio-sam.netlify.app/img/kiui.29fd5db4.jpg', title: 'Kiui', link: 'http://www.kiui.mx', company: 'Gamol', category: 'cms', year: '2016', order: 1},
                {image: 'https://portafolio-sam.netlify.app/img/imcp.6b4c1ad4.jpg', title: 'IMCP', link: 'http://110.imcp.org.mx', company: 'Gamol', category: 'cms', year: '2016', order: 1},
                {image: 'https://portafolio-sam.netlify.app/img/el_poder_numeros.29969d92.jpg', title: 'El poder de los números', link: 'http://www.elpoderdelosnumeros.org', company: 'Gamol', category: 'cms', year: '2016', order: 1},
                {image: 'https://portafolio-sam.netlify.app/img/siermend.792fc65a.jpg', title: 'Siermend', link: 'http://siermend.com', company: 'Gamol', category: 'cms', year: '2016', order: 1},


                
                
            ],
            projectsToShow: 6
        };
    }
}
</script>

<style>

</style>