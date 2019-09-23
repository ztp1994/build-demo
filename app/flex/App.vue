<template>
  <div id="app">
    <h1 class="card-title">{{ title }}</h1>
    <div class="container">
      <iphone>
        <div slot="screen" class="content" :style="parentStyle">
          <div class="item" :style="childStyle" v-for="i in 7">{{ i }}</div>
        </div>
      </iphone>
      <div class="option">
        <div class="card-header">容器属性</div>
        <div class="card-body border border-top-0">
          <button class="btn btn-outline-info" @click="_default">default</button>
          <div>
            <div>主轴方向</div>
            <button class="btn btn-outline-info" @click="dir('row')">dir-row</button>
            <button class="btn btn-outline-info" @click="dir('column')">dir-column</button>
          </div>
          <div>
            <div>项目在主轴的对齐方式</div>
            <button class="btn btn-outline-info" @click="justify('flex-start')">flex-start</button>
            <button class="btn btn-outline-info" @click="justify('flex-end')">flex-end</button>
            <button class="btn btn-outline-info" @click="justify('space-between')">space-between</button>
            <button class="btn btn-outline-info" @click="justify('space-around')">space-around</button>
            <button class="btn btn-outline-info" @click="justify('stretch')">stretch</button>
          </div>
          <div>
            <div>项目在交叉轴轴的对齐方式</div>
            <button class="btn btn-outline-info" @click="align('flex-start')">flex-start</button>
            <button class="btn btn-outline-info" @click="align('flex-end')">flex-end</button>
            <button class="btn btn-outline-info" @click="align('center')">center</button>
            <button class="btn btn-outline-info" @click="align('stretch')">stretch</button>
          </div>
          <div>
            <div>项目在主轴上的大小</div>
            <button class="btn btn-outline-info" @click="itemSize('20%')">20%</button>
            <button class="btn btn-outline-info" @click="itemSize('33.33%')">33.33%</button>
            <button class="btn btn-outline-info" @click="itemSize('50%')">50%</button>
            <button class="btn btn-outline-info" @click="itemSize('auto')">auto</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { assign} from 'lodash';
import Iphone from '../components/iphone';

export default {
  name: 'App',
  components: {
    Iphone
  },
  data() {
    return {
      title: 'Flex Demo',
      parentStyle: {},
      childStyle: {}
    };
  },
  mounted() {
    this._default();
  },
  methods: {
    _default() {
      this.parentStyle = {
        flexWrap: 'wrap'
      };
      this.childStyle = {
        // flexGrow: 0,
        // flexShrink: 0,
        flexBasis: '33.33%'
      };
    },
    /* 主轴方向 */
    dir(dir) {
      this.parentStyle = assign({}, this.parentStyle, {
        flexDirection: dir
      });
    },
    /* 主轴对齐方式 */
    justify(justify) {
      this.parentStyle = assign({}, this.parentStyle, {
        justifyContent: justify
      });
    },
    /* 项目在交叉轴上的对齐方式 */
    align(align) {
      this.parentStyle = assign({}, this.parentStyle, {
        alignItems: align
      });
    },
    /* 项目在主轴上的尺寸 */
    itemSize(size) {
      this.childStyle = assign({}, this.childStyle, {
        flexBasis: size
      });
    }
  }
};
</script>

<style lang="less" scoped>
  h1{
    color: #555;
    text-align: center;
  }
  .content{
    display: flex;
    padding: 12px;
    height: 100%;
    .item{
      background: #000;
      text-align: center;
      color: #fff;
      font-size: 24px;
      border: 1px solid #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .option{
    position:absolute;
    top: 10%;
    width: 360px;
    .btn{
      margin-bottom: 8px;
    }
  }
</style>
