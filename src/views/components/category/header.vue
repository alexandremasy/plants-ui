<template>
  <summary class="category__header">
    <div class="category__title">{{ name }}</div>

    <div class="category__timing">
      <sowing
        class="category__sowing" 
        :value="sowing" />
    </div>
  </summary>
</template>

<script>
import { Category } from '../../../data'
import Sowing from '../sowing'

export default {
  name: "CategoryHeader",

  components: {
    Sowing
  },

  props: {
    value: {
      type: Category
    }
  },

  computed: {
    name(){
      return this.$basil.get(this.value, 'name')
    },

    sowing(){
      return this.$basil.get(this.value, 'sowing')
    }
  }
}
</script>