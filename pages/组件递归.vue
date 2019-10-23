<template>
  <div>
    <div style="padding:50px;">
      <h3>组件的递归</h3>

      <!-- 下面的代码无法知道数据到底有多少级 -->
      <!-- <div v-for="(item,index) in list" :key="index">
        {{item.name}}
        <div v-for="(item,index) in item.children" :key="index">
          {{item.name}}
          <div v-for="(item,index) in item.children" :key="index">{{item.name}}</div>
        </div>
      </div>-->
      <div>
        <div class="digui">
          <div v-for="(item,index) in data" :key="index">
            <p>{{item.name}}</p>
            <!-- 自己调用自己 -->
            <menuItem :data="item.children" v-if="item.children" />
          </div>
        </div>
      </div>
      <!-- 组件所接受的值是数组 -->
      <MenuItem :data="list" />
    </div>
  </div>
</template>

<script>
import MenuItem from "@/components/post/menuItem";
export default {
  components: {
    MenuItem
  },

  data() {
    return {
      list: [
        {
          name: "男装",
          children: [
            { name: "正装", children: [{ name: "商务衬衫" }] },
            { name: "休闲装", children: [{ name: "休闲瘦身Polo衫" }] },
            { name: "运动装", children: [{ name: "篮球衣" }] }
          ]
        },
        {
          name: "女装",
          children: [
            { name: "正装", children: [{ name: "衬衫" }] },
            {
              name: "休闲装",
              children: [{ name: "连衣裙" }, { name: "休闲短裤" }]
            }
          ]
        },
        { name: "童装", children: [{ name: "休闲装" }, { name: "运动装" }] },
        {
          name: "电器",
          children: [{ name: "电视" }, { name: "空调" }, { name: "冰箱" }]
        }
      ]
    };
  }
};
</script>

<style>
</style>



<script>
export default {
  name: "menuItem",
  props: ["data"]
};
</script>

<style scoped lang="less">
.digui {
  padding-left: 50px;
}
</style>