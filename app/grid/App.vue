<template>
  <div id="app">
    <div class="grid">
      <div class="grid__item">
        <div class="content">
          <div class="content-inside">
            <h2>2:1</h2>
            <p>Centered</p>
          </div>
        </div>
      </div>
      <div class="grid__item">
        <div class="content">
          <div class="content-inside">
            <h2>1:1</h2>
            <p>Lower Left</p>
          </div>
        </div>
      </div>
      <div class="grid__item">
        <div class="content">
          <div class="content-inside">
            <h2>1:1</h2>
            <p>Lower Left</p>
          </div>
        </div>
      </div>
      <div class="grid__item">
        <div class="content">
          <div class="content-inside">
            <h2>1:1</h2>
            <p>Lower Left</p>
          </div>
        </div>
      </div>
      <div class="grid__item">
        <div class="content content-lr">
          <div class="content-inside">
            <h2>1:1</h2>
            <p>Lower Right</p>
          </div>
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
  * {
    box-sizing: border-box;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .grid__item {
    position: relative;
    width: 100%;
    border: 1px solid #ccc;

    &:nth-child(1) {
      grid-column: 1 / 3;
      &::before {
        padding-top: 50%;
      }
      .content {
        align-items: center;
        justify-items: center;
        text-align: center;
      }
    }
    &:nth-child(2) {
      grid-column: 3 / 4;
      justify-self: center;
    }
    &:nth-child(3) {
      grid-column: 1 / 2;
    }
    &:nth-child(4) {
      grid-column: 2 / 3;
    }
    &:nth-child(5) {
      grid-column: 3 / 4;
    }

    &:before {
      content: "";
      height: 0;
      display: inline-block;
      padding-top: 100%;
      width: 1px;
      position: relative;
    }
    .content {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      display: grid;
      justify-items: start;
      align-items: end;
    }
    .content-lr {
      place-items: end end;
      text-align: right;
    }
    .content-inside {
      padding: 2rem;
    }
  }
</style>
