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
       </div>
       
   </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {image: 'https://picsum.photos/id/237/350/350', title: 'Hoteles Mx', link: 'https://hotelesmx.com/', category: 'all', year: '2020'},
                {image: 'https://picsum.photos/id/237/350/350', title: 'Kannski live', link: 'https://hotelesmx.com/', category: 'all', year: '2020'},
                {image: 'https://picsum.photos/id/237/350/350', title: 'Hoteles Mx', link: 'https://hotelesmx.com/', category: 'all', year: '2020'},
                {image: 'https://picsum.photos/id/237/350/350', title: 'Hoteles Mx', link: 'https://hotelesmx.com/', category: 'all', year: '2020'},
                {image: 'https://picsum.photos/id/237/350/350', title: 'Hoteles Mx', link: 'https://hotelesmx.com/', category: 'all', year: '2020'},
                {image: 'https://picsum.photos/id/237/350/350', title: 'Hoteles Mx', link: 'https://hotelesmx.com/', category: 'all', year: '2020'},
                {image: 'https://picsum.photos/id/237/350/350', title: 'Hoteles Mx', link: 'https://hotelesmx.com/', category: 'all', year: '2020'},
                {image: 'https://picsum.photos/id/237/350/350', title: 'Hoteles Mx', link: 'https://hotelesmx.com/', category: 'all', year: '2020'},
                {image: 'https://picsum.photos/id/237/350/350', title: 'Hoteles Mx', link: 'https://hotelesmx.com/', category: 'all', year: '2020'},
                {image: 'https://picsum.photos/id/237/350/350', title: 'Hoteles Mx', link: 'https://hotelesmx.com/', category: 'all', year: '2020'},
                {image: 'https://picsum.photos/id/237/350/350', title: 'Kannski live', link: 'https://hotelesmx.com/', category: 'all', year: '2020'},
                {image: 'https://picsum.photos/id/237/350/350', title: 'Hoteles Mx', link: 'https://hotelesmx.com/', category: 'all', year: '2020'},
                {image: 'https://picsum.photos/id/237/350/350', title: 'Hoteles Mx', link: 'https://hotelesmx.com/', category: 'all', year: '2020'},
                {image: 'https://picsum.photos/id/237/350/350', title: 'Hoteles Mx', link: 'https://hotelesmx.com/', category: 'all', year: '2020'},
                {image: 'https://picsum.photos/id/237/350/350', title: 'Hoteles Mx', link: 'https://hotelesmx.com/', category: 'all', year: '2020'},
                {image: 'https://picsum.photos/id/237/350/350', title: 'Hoteles Mx', link: 'https://hotelesmx.com/', category: 'all', year: '2020'},
                {image: 'https://picsum.photos/id/237/350/350', title: 'Hoteles Mx', link: 'https://hotelesmx.com/', category: 'all', year: '2020'},
                {image: 'https://picsum.photos/id/237/350/350', title: 'Hoteles Mx', link: 'https://hotelesmx.com/', category: 'all', year: '2020'},
                
            ],
            projectsToShow: 6
        };
    }
}
</script>

<style>

</style>