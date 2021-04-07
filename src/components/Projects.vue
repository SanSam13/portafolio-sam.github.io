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
                                <img :src="projects[projectIndex - 1].image" :alt="projects[projectIndex - 1].title">
                                <div class="info">
                                    <div class="container-info">
                                        <small>({{projects[projectIndex - 1].company}})</small>
                                        <span>{{projects[projectIndex - 1].title}} <b-icon icon="arrow-right-square"></b-icon></span>
                                        <p>{{projects[projectIndex - 1].description}}</p>
                                    </div>
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
                {image: 'https://cv-sandra-mtz.netlify.app/images/sites/hoteles_mx.jpg', title: 'Hoteles Mx', description: '', link: 'https://hotelesmx.com', company: 'Polilla Studio', category: 'cms', year: '2020', order: 1},
                {image: 'https://cv-sandra-mtz.netlify.app/images/sites/kannski_live.jpg', title: 'Kannski Live', description: '', link: 'https://kannski.live', company: 'Polilla Studio', category: 'cms', year: '2020', order: 1},
                {image: 'https://cv-sandra-mtz.netlify.app/images/sites/seven_jeans.jpg', title: 'Seven Jeans', description: '', link: 'https://sevenjeans.mx', company: 'Polilla Studio', category: 'shopify', year: '2020', order: 1},
                {image: 'https://cv-sandra-mtz.netlify.app/images/sites/marzam.jpg', title: 'Marzam', description: '', link: 'https://www.marzam.com.mx', company: 'Ingenia', category: 'frontend', year: '2019', order: 1},
                {image: 'https://cv-sandra-mtz.netlify.app/images/sites/peques.jpg', title: 'Marqco Peques', description: '', link: 'https://marqcopeques.com', company: 'Ingenia', category: 'frontend', year: '2019', order: 1},
                {image: 'https://cv-sandra-mtz.netlify.app/images/sites/hoteles_mision.jpg', title: 'Hoteles Misión', description: 'Mantenimiento', link: 'https://www.hotelesmision.com.mx/', company: 'Ingenia', category: 'frontend', year: '2019', order: 1},
                {image: 'https://cv-sandra-mtz.netlify.app/images/sites/televisa_llega.jpg', title: 'Televisa LLega 2020',description: '', link: 'https://cv-sandra-mtz.netlify.app/images/sites/televisa_llega_2020_full.png', company: 'Ingenia', category: 'frontend', year: '2019', order: 1},
                {image: 'https://cv-sandra-mtz.netlify.app/images/sites/bimbo.jpg', title: 'Sin dejar huella', description: '', link: 'https://www.sindejarhuella.mx/sections/sin-dejar-huella-manufactura.html', company: 'Ingenia', category: 'frontend', year: '2019', order: 1},
                {image: 'https://cv-sandra-mtz.netlify.app/images/sites/sky.jpg', title: 'Sky', description: 'Mantenimiento', link: 'https://www.sky.com.mx/no-suscriptor/landing-telecomm', company: 'Ingenia', category: 'frontend', year: '2019', order: 1},
                {image: 'https://cv-sandra-mtz.netlify.app/images/sites/bioetix.jpeg', title: 'Bioétix', description: 'Juego', link: 'https://play.google.com/store/apps/details?id=io.bioetica.bioetix&hl=es_MX&gl=US', company: 'Ingenia', category: 'juego', year: '2019', order: 1},
                
                {image: 'https://cv-sandra-mtz.netlify.app/images/sites/kiui.jpg', title: 'Kiui', description: '', link: 'http://www.kiui.mx', company: 'Gamol', category: 'cms', year: '2016', order: 1},
                {image: 'https://cv-sandra-mtz.netlify.app/images/sites/imcp.jpg', title: 'IMCP 110', description: '', link: 'http://110.imcp.org.mx', company: 'Gamol', category: 'cms', year: '2016', order: 1},
                {image: 'https://cv-sandra-mtz.netlify.app/images/sites/el_poder_numeros.jpg', title: 'El poder de los números', description: '', link: 'http://www.elpoderdelosnumeros.org', company: 'Gamol', category: 'cms', year: '2016', order: 1},
                {image: 'https://cv-sandra-mtz.netlify.app/images/sites/siermend.jpg', title: 'Siermend', description: '', link: 'http://siermend.com', company: 'Gamol', category: 'cms', year: '2016', order: 1},
            ],
            projectsToShow: 6
        };
    }
}
</script>

<style>

</style>