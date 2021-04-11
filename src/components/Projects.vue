<template>
   <div class="projects" id="projects">
       <Spinner/>
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
                        <div class="box-project bounce-enter-active" v-for="(project, index) in projectsShow" :key="index">
                            <a :href="project.link" target="_blank" :title="project.title">
                                <img :src="project.image" :alt="project.title">
                                <div class="info">
                                    <div class="container-info">
                                        <small>({{project.company}})</small>
                                        <span>{{project.title}} <b-icon icon="arrow-right-square"></b-icon></span>
                                        <p>{{project.description}}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="container text-center" v-if="projectsShow.length > 0">
                        <button class="btn btn-1" id="boton" @click="showProjects()">
                            <svg>
                                <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                            </svg>
                            Ver más
                        </button>
                    </div>
               </div>
           </div>
       </div>
       
   </div>
</template>

<script>
import Spinner from './Spinner.vue'
import { mapMutations } from "vuex"
export default {
    name: 'Projects',
    components: {
        Spinner
    },
    data() {
        return {
            projects: [],
            projectsShow: [],
            allProjects: [],
            projectsToShow: 6,
            cont: 6,
        };
    },
    created(){
        this.getProjects()
    },
    methods:{
        ...mapMutations(['showLoading', 'hideLoading']),
        async getProjects(){
            try {
                this.showLoading({title: 'Cargando Proyectos'})
                //const res = await this.axios.get('https://sites-bec69-default-rtdb.firebaseio.com/projects.json')
                const res = await this.axios.get('https://sites-bec69-default-rtdb.firebaseio.com/projects')
                if (res.status === 200) {
                    this.allProjects = res.data
                    //console.log(this.allProjects)
                    this.projectsShow = this.allProjects.slice(0 , this.projectsToShow)
                }else{
                    console.log('Error' + res.status)
                }
            } catch (error) {
                this.showLoading({title: 'Cargando Proyectos'})
                console.log(error)
            }
            finally{
                this.hideLoading()
            }
        },
        showProjects(){
            this.cont += 3
            //limpia o vacia array
            for (let i = this.projectsShow.length; i > 0; i--) {
                this.projectsShow.pop();
            }

            let demo = this.allProjects.slice(0, this.cont)
            demo.forEach(element => {
                this.projectsShow.push(element)
            });
            if (this.projectsShow.length == this.allProjects.length) {
                var boton = document.getElementById('boton')
                boton.style.display = 'none'
            }
        }
    }
}
</script>

<style>

</style>