<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <div>
          <h2>List of Movies</h2>
          <b-button size="sm" variant="primary" :to="{name:'CreateMovie'}">
            Create Movie
          </b-button>
        </div>
        <br>
        <div class="col-md-12">
          <b-table striped hover :items="movies" :fields="fields">
            <template slot="cell(action)" slot-scope="data">
              <b-button size="sm" variant="primary" :to="{name:'EditMovie', params:{movieId: data.item.id}}">
                Edit
              </b-button>
              <b-button size="sm" variant="danger" :to="{name:'DeleteMovie', params:{movieId: data.item.id}}">
                Delete
              </b-button>
            </template>
          </b-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
          return {
            fields: [
              {key: 'title', label:'Title' },
              {key: 'description', label:'Description'},
              {key: 'stars', label:'Stars'},
              {key: 'action', label:''},
            ],
            movies: []
          }
        },
      methods: {
          getMovies(){
            const path= 'http://localhost:8000/api/v1.0/movies/'
            axios.get(path).then((response) =>{
              this.movies = response.data
            })
            .catch((error)=>{
              console.log(error)
            })
          }
      },
      created() {
          this.getMovies()
      }
    }

</script>

<style lang="css" scoped>

</style>
