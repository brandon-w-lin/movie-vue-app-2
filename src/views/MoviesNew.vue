<template>
  <div class="home">
    <h1>Create a new movie</h1>
    <h2>Please fill out the form below. Hit submit when finished:</h2>
    <div>
      <form>
        <p>
          <input type="text" v-model="movieParams.title" placeholder="title" />
        </p>
        <p>
          <textarea v-model="movieParams.plot" placeholder="plot"></textarea>
        </p>
        <small v-if="movieParams.plot.length > characterLimit - 50" style="color: red">
          You have {{ characterLimit - movieParams.plot.length }} characters remaining
        </small>
        <p>
          <input type="text" v-model="movieParams.year" placeholder="year" />
        </p>
        <p>
          <input type="text" v-model="movieParams.director" placeholder="director" />
        </p>
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
      movieParams: { plot: "" },
      characterLimit: 200,
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
