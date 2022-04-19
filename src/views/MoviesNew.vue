<template>
  <div class="home">
    <h1>Create a new movie</h1>
    <h2>Please fill out the form below. Hit submit when finished:</h2>
    <div>
      <form>
        <input type="text" v-model="movieParams.title" placeholder="title" />
        <input type="text" v-model="movieParams.plot" placeholder="plot" />
        <input type="text" v-model="movieParams.year" placeholder="year" />
        <input type="text" v-model="movieParams.director" placeholder="director" />
      </form>
    </div>
    <div>
      <button @click="moviesCreate()">Submit</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  data: function () {
    return {
      movieParams: {},
    };
  },
  methods: {
    moviesCreate: function () {
      axios.post("http://localhost:3000/movies/", this.movieParams).then((response) => {
        console.log(response.data);
        this.movie = response.data;
      });
    },
  },
};
</script>
