<template>
  <div class="home">
    <div>
      {{ movie }}
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
  },
  created: function () {
    this.moviesShow();
  },
};
</script>
