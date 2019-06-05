<template>
  <main>
    <AppHeader :favorites="favorites" :filter="filter" @sort="onSort($event)"/>

    <div class='recipes'>
      <div class='container container--recipes'>
        <AppRecipeCard v-for="recipe in filteredData" :key="recipe.id" :recipe="recipe" @favorite="onFavorite($event)" />
      </div>
      <div class='recipes__more'>
        <button class='btn'>More recipe</button>
      </div>
    </div>

    <AppFooter />
  </main>
</template>

<script>
import axios from "axios";
import AppHeader from "./components/AppHeader";
import AppRecipeCard from "./components/AppRecipeCard";
import AppFooter from "./components/AppFooter";

export default {
  name: 'app',

  components: {
    AppHeader,
    AppRecipeCard,
    AppFooter
  },

  data() {
    return {
      recipes: [],
      categories: [],
      filter: "chicken",
    }
  },

  async created() {
    try {
      const res = await axios.get('http://localhost:3000/recipes');
      this.recipes = res.data;
      for (let i of res.data) {
        if (!(this.categories.includes(i.categorie_id))) {
          this.categories.push(i.categorie_id);
        }
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  },

  computed: {
    filteredData() {
      return this.filter.length ? this.recipes.filter(item => item.categorie_id === this.filter) : this.recipes;
    },

    favorites() {
      return this.recipes.filter(item => item.favorite);
    }
  },

  methods: {
    onSort(option) {
      this.filter = option;
    },

    onFavorite(recipe) {
      recipe.favorite = !recipe.favorite;
      axios.put(`http://localhost:3000/recipes/${recipe.id}`, recipe).then(res => {
        // eslint-disable-next-line no-console
        console.log(res);
      })
    }
  }
}
</script>

<style>
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: "Rubik", sans-serif;
  font-size: 14px;
  background-color: #f2f5f6;
}

img {
  max-width: 100%;
  height: auto;
}

.btn {
  width: 188px;
  height: 48px;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: 1px solid #F03360;
  color: #F03360;
  font-size: 18px;
  line-height: 28px;
  background-color: transparent;
  appearance: none;
}

.container {
  width: 100%;
  max-width: 1060px;
  margin: 0 auto;
  padding: 0 25px;
}

.recipes {
  background-color: #f2f5f6;
}

.recipes__more {
  position: relative;
  margin-top: -100px;
  padding: 40px 0;
  text-align: center;
}

.container--recipes {
  position: relative;
  top: -100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

@media screen and (min-width: 750px) {
  .container--recipes {
    justify-content: flex-start;
  }
}

@media screen and (min-width: 1100px) {
  .container {
    padding: 0;
  }

  .recipes__more {
    padding: 40px 0 76px;
  }
}
</style>
