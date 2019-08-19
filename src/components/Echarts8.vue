<template>
  <div id="myChart8" :style="{width:'100%', height: '300px',margin:'30px 0 0 5%'}"></div>
</template>

<script>
// import TodoItem from "@/components/TodoItem";
// import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart8"));
      // 绘制图表
     let option = {
        title: {
          text: "成品构成比例",
          // subtext: "纯属虚构",
          x: "center",
          textStyle: {
            color: "#FFF",
            margin:0
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        series: [
          {
            name: "构成来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "来源1" },
              { value: 310, name: "来源2" },
              { value: 234, name: "来源3" },
              { value: 135, name: "来源4" },
              { value: 1548, name: "来源5" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>

<style scoped>
</style>
