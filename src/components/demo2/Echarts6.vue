<template>
  <div id="myChart6" :style="{width: '32vw', height: '80vh',background:'#ECFBF7'}"></div>
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
      let myChart = this.$echarts.init(document.getElementById("myChart6"));
      // 绘制图表
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },

        grid: {
          left: "3%",
          right: "5%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
          axisLabel: {
            textStyle: {
              color: "#394592",
              fontSize: 12
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
          type: "category",
          axisLabel: {
            textStyle: {
              color: "#394592",
              fontSize: 12,
              fontFamily: "Arial"
            }
          },
          splitLine: {
            lineStyle: {
              color: "#09F"
            }
          },
          data: ["湖南", "山东"]
        },
        series: [
          {
            // name: "金额",
            type: "bar",
            color: "#7CBAED",
            data: [999, 888]
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
