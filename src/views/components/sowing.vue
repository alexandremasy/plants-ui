<template>
  <div 
    :class="classes">
    <div class="sowing__start">{{ start }}</div>
    <div class="sowing__end">{{ end }}</div>
  </div>  
</template>

<script>
import { Sowing } from '../../data'

export default {
  name: 'Sowing',

  props: {
    value: {
      type: Sowing
    }
  },

  computed: {
    classes(){
      return {
        'sowing': true,
        ['-start-'+this.start]: true,
        ['-end-'+this.end]: true
      }
    },

    end(){
      return this.$basil.get(this.value, 'end.integer')
    },

    start(){
      return this.$basil.get(this.value, 'start.integer')
    }
  }
}
</script>
