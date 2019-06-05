<template>
  <div :class='["recipe", {"recipe--favorite": recipe.favorite}]'>
    <div
      class='recipe__favorite'
      @click="onFavorite(recipe)"
    >
      <AppIcon name="app-star-icon" width="22" height="21"/>
    </div>
    <div class='recipe__img'>
      <img
        :src='recipe.image'
        alt=''
      >
    </div>
    <div class='recipe__title'>
      {{ recipe.name }}
    </div>
    <div class='recipe__description'>
      {{ recipe.description }}
    </div>
    <div class='recipe__stats'>
      <div class='recipe__time'>
        <AppIcon name="app-clock-icon" />
        {{ recipe.cooking_time }}
      </div>
      <div class='recipe__type'>
        <AppIcon :name="`app-${recipe.categorie_id}-icon`" />
        {{ recipe.categorie_id }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppRecipeCard",

  props: {
    recipe: {
      type: Object,
      required: true
    }
  },

  methods: {
    onFavorite(recipe) {
      this.$emit('favorite', recipe);
    }
  }
}
</script>

<style scoped>
.recipe {
  margin-bottom: 20px;
  max-width: 350px;
  position: relative;
  display: flex;
  flex-direction: column;
  background: white;
  border: 1px solid #eaeaea;
  text-align: center;
  border-radius: 3px;
  overflow: hidden;
  cursor: pointer;
}

.recipe:hover {
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
}

.recipe__favorite {
  display: none;
  position: absolute;
  top: 20px;
  right: 20px;
}

.recipe__favorite svg {
  fill: white;
}

.recipe__img {
  height: 229px;
  overflow: hidden;
}

.recipe__title {
  padding: 25px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
}

.recipe:hover .recipe__title {
  color: #f03360;
}

.recipe:hover .recipe__favorite {
  display: block;
}

.recipe--favorite .recipe__favorite {
  display: block;
}

.recipe--favorite .recipe__favorite svg {
  fill: #f03360;
}

.recipe__description {
  padding: 0 25px 17px;
  color: #bfbfc5;
  font-size: 14px;
  line-height: 20px;
}

.recipe__stats {
  margin-top: auto;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 17px;
  border-top: 1px solid #eaeaea;
}

.recipe__stats svg {
  margin-right: 10px;
  fill: #bfbfc5;
}

.recipe__time {
  width: 50%;
  padding: 15px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #eaeaea;
}

.recipe__type {
  width: 50%;
  padding: 15px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (min-width: 750px) {
  .recipe {
    max-width: none;
    width: calc((100% - 20px) / 2);
    margin-right: 20px;
  }

  .recipe:nth-child(2n) {
    margin-right: 0;
  }
}

@media screen and (min-width: 920px) {
  .recipe {
    width: calc((100% - 40px) / 3);
  }
  .recipe:nth-child(2n) {
    margin-right: 20px;
  }

  .recipe:nth-child(3n) {
    margin-right: 0;
  }
}

@media screen and (min-width: 1100px) {
  .recipe__time, .recipe__type {
    padding: 15px 30px;
  }
}
</style>