<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'IndexVue',
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const iconName = computed(() => {
      return `#icon-${props.icon}`
    })
    return {
      iconName
    }
  }
})
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
