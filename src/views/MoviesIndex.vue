<template>
  <div class="home">
    <div v-for="movie in movies" v-bind:key="movie.id">
      {{ movie.title }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  data: function () {
    return {
      movies: [],
    };
  },
  methods: {
    moviesIndex: function () {
      axios.get("http://localhost:3000/movies.json").then((response) => {
        console.log(response.data);
        this.movies = response.data;
      });
    },
  },
  created: function () {
    this.moviesIndex();
  },
};
</script>
