<template>
  <div id="myChart15" :style="{width: '100%', height: '300px' ,padding:'20px 0 0 0'}"></div>
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
      let myChart = this.$echarts.init(document.getElementById("myChart15"));

      // 绘制图表
    var colors = ["#5793f3", "#d14a61", "#675bba"];

      let option = {
        color: colors,
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        // tooltip: {
        //   trigger: "axis",
        //   axisPointer: {
        //     type: "cross"
        //   }
        // },
        grid: {
          right: "40%"
        },
        legend: {
          data: ["任务回款数", "完成回款金额", "完成率"]
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              alignWithLabel: true
            },
            data: ["2019一季度", "2019二季度", "2019三季度", "2019四季度"]
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "任务回款数",
            min: 0,
            max: 250,
            position: "right",
            axisLine: {
              lineStyle: {
                color: colors[0]
              }
            },
            axisLabel: {
              formatter: "{value} 件"
            }
          },
          {
            type: "value",
            name: "完成回款金额",
            min: 0,
            max: 250,
            position: "right",
            offset: 80,
            axisLine: {
              lineStyle: {
                color: colors[1]
              }
            },
            axisLabel: {
              formatter: "{value} 万元"
            }
          },
          {
            type: "value",
            name: "完成率",
            min: 0,
            max: 25,
            position: "left",
            axisLine: {
              lineStyle: {
                color: colors[2]
              }
            },
            axisLabel: {
              formatter: "{value}%"
            }
          }
        ],
        series: [
          {
            name: "任务回款数",
            type: "bar",
            data: [22, 44, 44, 88]
          },
          {
            name: "完成回款金额",
            type: "bar",
            yAxisIndex: 1,
            data: [99, 92, 88, 44]
          },
          {
            name: "完成率",
            type: "line",
            yAxisIndex: 1,
            data: [22, 55, 56, 36]
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
