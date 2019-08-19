<template>
  <div id="myChart4" :style="{width: '100%', height: '42vh',margin:'1vh'}"></div>
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
      let myChart = this.$echarts.init(document.getElementById("myChart4"));
      // 绘制图表
      let option = {
        textStyle: { default: "#333" },
        title: {
          text: "库存月数据展示",
          textStyle: {
            color: "#FFF",
            fontSize: 24
          }
        },
        tooltip: {
          trigger: "axis",
          textStyle: {
            color: "#FFF",
            fontSize: 24
          }
        },
        legend: {
          data: ["非纤材料", "纤材料", "半成品", "成品"],
          textStyle: {
            color: "#FFF"
            // fontSize: 24
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            // saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["一月", "二月", "三月", "四月", "五月", "六月"],
          axisLabel: {
            textStyle: {
              color: "#B7E1FF",
              fontSize: 16
            }
          },
          axisLine: {
            lineStyle: {
              color: "#09F"
            }
          },
          axisTick: {
            lineStyle: {
              color: "#09F"
            }
          }
        },
        yAxis: {
          type: "value",
          axisLabel: {
            textStyle: {
              color: "#B7E1FF",
              fontSize: 16,
              fontFamily: "Arial"
            }
          },
          splitLine: {
            lineStyle: {
              color: "#09F"
            }
          }
        },
        series: [
          {
            name: "非纤材料",
            type: "line",
            stack: "总量",
            data: [555, 343, 483, 666, 888, 230]
          },
          {
            name: "纤材料",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330]
          },
          {
            name: "半成品",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330]
          },
          {
            name: "成品",
            type: "line",
            stack: "总量",
            data: [320, 332, 301, 334, 390, 330]
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
