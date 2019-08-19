<template>
  <div id="myChart7" :style="{width: '100%', height: '27vh'}"></div>
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
    // this.drawLine();
  },
  methods: {
    drawLine(data) {
      debugger;
      var month = [];
      var amont = [];
      var k;
      for (k in data) {
        month.push(k);
        amont.push(data[k]);
      }
      var amont1 = [];
      for (let i = 0; i < amont.length; i++) {
        if (i < amont.length - 1) {
          amont1.push(amont[i]);
        }
      }
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart7"));
      // 绘制图表

      let colors = ["#5793f3", "#d14a61", "#675bba"];

      let option = {
        color: colors,
        title: {
          text: "毛利率趋势图",
          x: "center",
          textStyle: {
            color: "#394592",
            fontFamily: "微软雅黑",
            fontSize: 18
          }
        },
        tooltip: {
          trigger: "none",
          axisPointer: {
            type: "cross"
          }
        },
         grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors[1]
              }
            },
            axisPointer: {
              label: {
                formatter: function(params) {
                  return (
                    "销售额  " +
                    params.value +
                    (params.seriesData.length
                      ? "：" + params.seriesData[0].data
                      : "")
                  );
                }
              }
            },
            data: month
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "销售额趋势图",
            type: "line",
            smooth: false,
            data: amont1
          },
          {
            name: "销售额趋势图",
            type: "line",
            smooth: false,
            data: amont,
            lineStyle: {
              normal: {
                type: "dashed"
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
