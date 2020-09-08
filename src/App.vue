<template>
  <section>
    <div class="search">
      <label for="name">
        Digite uma palavra
      </label>
      <input v-model="word" id="name" />
      <button @click.prevent="crawlerThis">
        Buscar
      </button>
    </div>

    <h2 v-if="word">
      Palavras relacionadas a <strong>{{ word }}</strong>
    </h2>

    <p v-if="word && results.length === 0">Não encontrado</p>

    <ul>
      <li v-for="result in results" :key="result.related_word">
        {{ result.related_word }}
      </li>
    </ul>
  </section>
</template>

<script>
import axios from "axios";
import { debounce } from "lodash";

export default {
  data: () => ({
    word: "",
    results: [],
  }),

  methods: {
    crawlerThis() {
      axios
        .get(
          "https://words-crawler.herokuapp.com/related_words?term=" + this.word
        )
        .then((res) => {
          console.log("não tem nada ", this.results.length);
          this.results = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.debounceName = debounce(this.crawlerThis, 1000);
  },
  watch: {
    word() {
      if (!this.word) return;
      this.debounceName();
    },
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: "Arial", sans-serif;
}
</style>

<style scoped>
.search {
  background: #4c8eca;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  align-items: center;
}

.search label {
  color: #fff;
  padding: 10px 0;
  font-size: 20px;
}

.search input {
  height: 25px;
  width: 90%;
  box-shadow: none;
  border: none;
  padding: 5px 10px;
  font-size: 16px;
  margin-bottom: 10px;
}

.search button {
  font-size: 1em;
  text-align: center;
  color: #ffffff;
  padding: 10px 30px;
  background-color: #0057aa;
  box-shadow: none;
  border: none;
  cursor: pointer;
}

@media (min-width: 768px) {
  .search {
    flex-direction: row;
  }

  .search label {
    padding: 0 10px 0 0;
  }

  .search input {
    width: 380px;
    margin: 0 20px 0 0;
  }
}

h2 {
  text-align: center;
  color: #676767;
  font-size: 24px;
}

p {
  font-size: 16px;
  text-align: center;
  color: #676767;
}

strong {
  color: #ea5300;
}

ul {
  padding: 0;
  margin: 30px 20px;
}

li {
  list-style-type: none;
  padding: 5px 10px;
  margin: 0 10px 20px 10px;
  display: inline-block;
  border: 1px solid #ea5300;
  border-radius: 5px;
  text-align: center;
  color: #676767;
}
</style>
