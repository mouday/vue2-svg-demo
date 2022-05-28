<template>
  <div class="container">
    <h1>Hello Vue</h1>

    <div class="container-svg container-svg1">
      <span>Hello Svg</span>
      <svg-icon name="open"></svg-icon>
    </div>

    <div class="container-svg container-svg1">
      <span>你好，世界</span>
      <svg-icon name="open"></svg-icon>
    </div>

    <div class="container-svg container-svg2">
      <span>Hello Svg</span>
      <svg-icon name="open"></svg-icon>
    </div>

    <div class="container-svg container-svg2">
      <span>你好，世界</span>
      <svg-icon name="open"></svg-icon>
    </div>
  </div>
</template>

<script>
// created at 2022-05-28
export default {
  name: 'App',

  props: {},

  components: {},

  data() {
    return {};
  },

  computed: {},

  methods: {
    async getData() {},
  },

  created() {
    this.getData();
  },
};
</script>

<style lang="less">
.container {
  text-align: center;
}

.container-svg {
  background-color: #eee;
  margin-top: 20px;
}

.container-svg1 {
  color: pink;
  font-size: 50px;
  line-height: 1;
}

.container-svg2 {
  color: green;
  font-size: 50px;
  line-height: 2;
}
</style>

<style lang="less" scoped>
</style>
