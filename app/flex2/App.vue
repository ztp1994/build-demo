<template>
  <div id="app">
    <h1 class="card-title">{{ title }}</h1>
    <div class="container clearfix">
      <div class="item"
           v-for="i in 9"
           :key="i">
        <div class="box">
          <div class="inner"> {{ i }}</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      title: '4:3 Div Demo',
      parentStyle: {},
      childStyle: {}
    };
  },
  mounted() {
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
  h1{
    color: #555;
    text-align: center;
    font-size: 6vw;
  }
  .container{
    padding: 0 7px;
    .item{
      float: left;
      height: 0;
      position: relative;
      width: 33.33%;
      padding-bottom: 44.44%;
      color: #fff;
      .box{
        position: absolute;
        top: 0;
        left: 0;
        padding: 7px;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        .inner{
          height: 100%;
          background: #000;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 8vw;
        }
      }
    }
  }
</style>
