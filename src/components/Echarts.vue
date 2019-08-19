<template>
  <div id="myChart" :style="{width: '100%', height: '300px'}"></div>
</template>

<script>
// import TodoItem from "@/components/TodoItem";
// import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "hello",
  data() {
    return {
      // msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      let option_Progress = {
        title: {
          text: "非光纤材料",
          subtext: "￥996",
          x: "center",
          y: 130,
          itemGap: 10,
          textStyle: {
            color: "#B7E1FF",
            fontWeight: "normal",
            fontFamily: "微软雅黑",
            fontSize: 24
          },
          subtextStyle: {
            color: "#B7E1FF",
            fontWeight: "bolder",
            fontSize: 24,
            fontFamily: "微软雅黑"
          }
        },
        series: [
          {
            type: "pie",
            center: ["50%", "50%"],
            radius: [75, 90],
            x: "0%",
            tooltip: { show: false },
            data: [
              {
                name: "达成率",
                value: 79,
                itemStyle: { color: "rgba(0,153,255,0.8)" },
                hoverAnimation: false,
                label: {
                  show: false,
                  position: "center",
                  textStyle: {
                    fontFamily: "微软雅黑",
                    fontWeight: "bolder",
                    color: "#B7E1FF",
                    fontSize: 24
                  }
                },
                labelLine: {
                  show: false
                }
              },
              {
                name: "79%",
                value: 21,
                itemStyle: { color: "rgba(0,153,255,0.1)" },
                hoverAnimation: false,
                label: {
                  show: false,
                  position: "center",
                  padding: 20,
                  textStyle: {
                    fontFamily: "微软雅黑",
                    fontSize: 24,
                    color: "#B7E1FF"
                  }
                },
                labelLine: {
                  show: false
                }
              }
            ]
          },
          {
            type: "pie",
            center: ["50%", "50%"],
            radius: [95, 100],
            x: "0%",
            hoverAnimation: false,
            data: [
              {
                value: 100,
                itemStyle: { color: "rgba(0,153,255,0.3)" },
                label: { show: false },
                labelLine: { show: false }
              }
            ]
          },
          {
            type: "pie",
            center: ["50%", "50%"],
            radius: [69, 70],
            x: "0%",
            hoverAnimation: false,
            data: [
              {
                value: 100,
                itemStyle: { color: "rgba(0,153,255,0.3)" },
                label: { show: false },
                labelLine: { show: false }
              }
            ]
          }
        ]
      };

      myChart.setOption(option_Progress);
    },
   
  }
};
</script>

<style scoped>
</style>
