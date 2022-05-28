<template>
  <svg class="svg-icon"
    aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
// svg 组件
export default {
  name: 'svg-icon',

  props: {
    name: {
      type: String,
      required: true,
    },
  },

  computed: {
    iconName() {
      return `#icon-${this.name}`;
    },
  },
};
</script>

<style lang="less">
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  // vertical-align: middle;
}
</style>
