<template>
  <div id="app">
    <h1 class="card-title">{{ title }}</h1>
    <div class="container">
      <svg width="1024"
           height="300"
           id="svg"
           :viewBox="'0 0 1024 300'"
           preserveAspectRatio="xMidYMid meet"
           version="1.1">
        <path id="path"
              fill="transparent"
              stroke="red"
              stroke-width="3"
              :d="d"></path>
        <!--蚂蚁线-->
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="transparent"
            stroke="#4676a2"
            stroke-width="3"
            :d="d"
            class="line2"></path>
      </svg>
      <img id="arrow" src="../../asset/walk-r.gif" alt="" width="44" height="62">
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
      title: 'SVG Path Demo',
      d: 'M10 120 C 156 268, 300 64, 530 110 S 788 240, 1024 130'
    };
  },
  mounted() {
    this.animate();
  },
  methods: {
    animate() {
      const _this = this;
      const _path = document.querySelector('#path');
      const arrow = document.querySelector('#arrow');
      const length = _path.getTotalLength();
      let rid = null;
      // 动画起点
      _path.style.strokeDasharray = length;
      _path.style.strokeDashoffset = length;
      let frames = length;
      let point1;
      let point2;
      let angle;
      function Frame() {
        rid = requestAnimationFrame(Frame);
        _path.style.strokeDashoffset = frames;
        // 路径上的相邻两点
        point1 = _path.getPointAtLength(length - frames);
        point2 = _path.getPointAtLength(length - frames + 2);
        angle = Math.atan2(point2.y - point1.y, point2.x - point1.x);
        angle = angle * 180 / Math.PI;
        // set
        arrow.style.left = `${point1.x}px`;
        arrow.style.top = `${point1.y}px`;
        arrow.style.transform = `rotateZ(${angle}deg)`;
        // 控制速度
        frames -= 2;
        if (frames <= 2) {
          cancelAnimationFrame(rid);
          rid = null;
          alert('到达终点');
        }
      }
      Frame();
    }
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
    position: relative;
    width: 1024px;
    height: 300px;
    #svg {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      .line2 {
        stroke-dasharray: 12;
        stroke-dashoffset: 0;
        animation: dash 8s linear infinite;
      }
      @keyframes dash {
        from {
          stroke-dashoffset: 700;
        }
        to {
          stroke-dashoffset: 0;
        }
      }
    }
    #arrow{
      position: absolute;
      left:0;
      top:0;
      margin: -45px 0 0 -22px;
    }
  }
</style>
