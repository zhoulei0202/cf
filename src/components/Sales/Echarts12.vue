<template>
  <div>
    <div id="myChart12" :style="{width: '100%', height: '75vh',margin:'5vh 0 0 0'}"></div>
  </div>
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
      let myChart = this.$echarts.init(document.getElementById("myChart12"));
      // let myChart2 = this.$echarts.init(document.getElementById("myChart11"));
      // let myChart3 = this.$echarts.init(document.getElementById("myChart12"));
      // 绘制图表
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ["订单总数", "已完成"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "value"
        },
        yAxis: {
          type: "category",
          // data: ["移动", "联通", "电信", "铁塔", "广电", "轨交", "其他"]
          data: ["其他", "轨交", "广电", "铁塔", "电信", "联通", "移动"]
        },
        series: [
          {
            name: "已完成",
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "insideRight"
              }
            },
            data: [120, 132, 101, 134, 90, 230, 210]
            
          },
          {
            name: "订单总数",
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "insideRight"
              }
            },
            data: [320, 302, 301, 334, 390, 330, 320]
          }
        ]
      };
      myChart.setOption(option);
      // myChart2.setOption(option);
      // myChart3.setOption(option);
    }
  }
};
</script>

<style scoped>
</style>
