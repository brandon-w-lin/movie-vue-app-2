<template>
  <div class="home">
    <div>
      <p>
        <b>Title:</b>
        {{ movie.title }}
      </p>
      <p>
        <b>Plot:</b>
        {{ movie.plot }}
      </p>
      <p>
        <b>Director:</b>
        {{ movie.director }}
      </p>
      <p>
        <b>Year:</b>
        {{ movie.year }}
      </p>
    </div>
    <div>
      <button @click="moviesEdit()">Edit movie</button>
      <button @click="moviesIndex()">Back to all movies</button>
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
    moviesEdit: function () {
      this.$router.push("/movies/" + this.$route.params.id + "/edit");
    },
    moviesIndex: function () {
      this.$router.push("/movies");
    },
  },
  created: function () {
    this.moviesShow();
  },
};
</script>
