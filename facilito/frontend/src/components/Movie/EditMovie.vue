<template lang="html">
    <div class="container">
      <div class="row">
        <div class="col text-left">
          <h2>Edit Movie</h2>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <form @submit="onSubmit">
                <div class="form-group row">
                  <label for="title" class="col-sm-2 col-form-label">Title</label>
                  <div class="col-sm-6">
                    <input type="text" placeholder="Title" name="title" class="form-control" v-model.trim="form.title">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="description" class="col-sm-2 col-form-label">Description</label>
                  <div class="col-sm-6">
                    <textarea name="description" class="form-control" placeholder="Description" rows="3" v-model.trim="form.description"></textarea>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="stars" class="col-sm-2 col-form-label">Stars</label>
                  <div class="col-sm-6">
                    <input type="text" placeholder="Stars" name="stars" class="form-control" v-model.trim="form.stars">
                  </div>
                </div>
                <div class="rows">
                  <div class="col text-left">
                    <b-button type="submit" variant="primary">Edit</b-button>
                    <b-button type="submit" variant="secondary" :to="{name: 'ListMovie'}">Cancel</b-button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import swal from 'sweetalert';
    export default {
        data() {
          return {
            movieId: this.$route.params.movieId,
            form: {
              title: '',
              description: '',
              stars: 0.0,
            }
          }
        },
        methods: {
          onSubmit(evt){
            evt.preventDefault();
            const path='http://localhost:8000/api/v1.0/movies/'+this.movieId+'/';
            axios.put(path, this.form).then((response)=>{
              this.form.title = response.data.title;
              this.form.description = response.data.description;
              this.form.stars = response.data.stars;
              swal("Movie updated","","success");
            })
            .catch((error)=>{
              console.log(error)
            })
          },
          getMovie(){
            const path= 'http://localhost:8000/api/v1.0/movies/'+this.movieId+'/';
            axios.get(path).then((response)=>{
              this.form.title = response.data.title;
              this.form.description = response.data.description;
              this.form.stars = response.data.stars;
            })
            .catch((error) =>{
              console.log(error)
            })
          }
        },
        created() {
          this.getMovie()
        }
    }
</script>

<style lang="css" scoped>

</style>
