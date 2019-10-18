<template>
  <div>
    <div class="container">
      <!-- 轮播图 -->
      <!-- interval：相隔时间
      arrow：是否显示左右的箭头-->
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="(item, index) in banners" :key="index">
          <div
            class="banner-image"
            :style="`
                background:url(${$axios.defaults.baseURL + item.url}) center center no-repeat;
                background-size:contain contain;
                `"
          ></div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 搜索框 -->
    <div class="banner-content">
      <div class="search-bar">
        <!-- tab栏 -->
        <el-row type="flex" class="search-tab">
          <span
            v-for="(item, index) in options"
            :key="index"
            @click="handleTabChange(index)"
            :class="{active: current === index}"
          >
            <i>{{item.title}}</i>
          </span>
        </el-row>

        <!-- 输入框 -->
        <el-row type="flex" align="middle" class="search-input">
          <input :placeholder="options[current].placeholder" />
          <i class="el-icon-search"></i>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 轮播图
      banners: [],
      // tab的数据结构!!!!（重点在于自己会构造出数据结构）
      options: [
        { title: "攻略", placeholder: "搜索城市" },
        { title: "酒店", placeholder: "请输入城市搜索酒店" },
        { title: "机票", placeholder: "" }
      ],
      // options2: {
      // 	"攻略": "搜索城市",
      // 	"酒店": "请输入城市搜索酒店",
      // 	"机票": ""
      // },
      // tab栏的索引
      current: 0
    };
  },
  mounted() {
    // 请求轮播图数据
    this.$axios({
      url: "/scenics/banners"
    }).then(res => {
      const { data } = res.data;
      // 赋值给banners
      this.banners = data;
    });
  }
};
</script>

<style scoped lang="less" >
.container {
  min-width: 1000px;
  margin: 0 auto;
  position: relative;
  /deep/ .el-carousel__container {
    height: 700px;
  }
  .banner-image {
    width: 100%;
    height: 100%;
  }
}
</style> 