<template>
  <div class="container">
    <img src="../../asset/IP7.jpg" alt="" class="iphone">
    <div class="screen">
      <slot name="screen"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'iphone'
  };
</script>

<style scoped lang="less">
  .container{
    width: 333px;
    height: 667px;
    position: relative;
    .iphone{
      width: 100%;
      display: block;
    }
    .screen{
      width: 264px;
      height: 468px;
      background: #fff;
      position: absolute;
      top: 68px;
      left: 37px;
    }
  }
</style>