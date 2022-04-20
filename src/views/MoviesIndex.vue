<template>
  <div class="home">
    <form>
      <input type="text" v-model="searchTerm" placeholder="Search here..." />
    </form>
    <div>
      <button @click="sortAlpha()">Sort Alphabetically</button>
    </div>
    <div v-for="movie in filterMovies()" v-bind:key="movie.id">
      {{ movie.title }}
      <button @click="moreInfo(movie)">More Info</button>
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
      searchTerm: "",
    };
  },
  methods: {
    moviesIndex: function () {
      axios.get("http://localhost:3000/movies.json").then((response) => {
        console.log(response.data);
        this.movies = response.data;
      });
    },
    moreInfo: function (movie) {
      this.$router.push("/movies/" + movie.id);
    },
    filterMovies: function () {
      return this.movies.filter((movie) => {
        var lowerMovieTitle = movie.title.toLowerCase();
        var lowerSearchTerm = this.searchTerm.toLowerCase();
        return lowerMovieTitle.includes(lowerSearchTerm);
      });
    },
    sortAlpha: function () {
      return this.movies.sort((a, b) => {
        let aformat = a.title.toLowerCase();
        let bformat = b.title.toLowerCase();

        if (aformat < bformat) {
          return -1;
        } else if (aformat > bformat) {
          return 1;
        } else {
          return 0;
        }
      });
    },
  },
  created: function () {
    this.moviesIndex();
  },
};
</script>
