<template>
  <div class="home">
    <div>
      <form>
        <input type="text" v-model="movie.title" placeholder="title" />
        <input type="text" v-model="movie.plot" placeholder="plot" />
        <input type="text" v-model="movie.year" placeholder="year" />
        <input type="text" v-model="movie.director" placeholder="director" />
      </form>
      <button @click="moviesUpdate()">submit changes</button>
      <button @click="moviesDelete()">delete movie</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  data: function () {
    return {
      movie: {},
    };
  },
  methods: {
    moviesShow: function () {
      axios.get("http://localhost:3000/movies/" + this.$route.params.id + ".json").then((response) => {
        console.log(response.data);
        this.movie = response.data;
      });
    },
    moviesUpdate: function () {
      axios.patch("http://localhost:3000/movies/" + this.$route.params.id + ".json", this.movie).then((response) => {
        console.log(response.data);
      });
      this.$router.push("/movies/" + this.$route.params.id);
    },
    moviesDelete: function () {
      axios.delete("http://localhost:3000/movies/" + this.$route.params.id + ".json").then((response) => {
        console.log(response.data);
      });
      this.$router.push("/movies");
    },
  },
  created: function () {
    this.moviesShow();
  },
};
</script>
