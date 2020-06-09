<template lang="html">
    <div class="container">
      <div class="row">
        <div class="col">
          <h3>Are you sure?</h3>
          <p>Title:{{this.element.title}}</p>
          <p>Description:{{this.element.description}}</p>
          <p>Stars:{{this.element.stars}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <b-button v-on:click="deleteMovie" variant="danger">Delete</b-button>
        </div>
      </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import swal from 'sweetalert'
    export default {
        data(){
          return{
            movieId: this.$route.params.movieId,
            element: {
              title: '',
              description: '',
              stars: 0.0
            }
          }
        },
        methods: {
          getMovie(){
            const path= 'http://localhost:8000/api/v1.0/movies/'+this.movieId+'/';
            axios.get(path).then((response)=>{
              this.element.title = response.data.title;
              this.element.description = response.data.description;
              this.element.stars = response.data.stars;
            })
            .catch((error)=>{
              console.log(error)
            })
          },
          deleteMovie(){
            const path= 'http://localhost:8000/api/v1.0/movies/'+this.movieId+'/';
            axios.delete(path).then((response)=>{
              location.href = '/movies'
            })
            .catch((error)=>{
              swal("This Movie is impossible to delete","","error")
            })
          }
        },
        created() {
          this.getMovie()
        }
    }

</script>

<style scoped>

</style>
