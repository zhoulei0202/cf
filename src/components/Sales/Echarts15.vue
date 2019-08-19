<template>
  <div>
    <div id="myCharts15" :style="{width: '100%', height: '60vh',margin:'50px 0 0 0'}"></div>
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
      let myChart = this.$echarts.init(document.getElementById("myCharts15"));
      // let myChart2 = this.$echarts.init(document.getElementById("myChart11"));
      // let myChart3 = this.$echarts.init(document.getElementById("myChart12"));
      // 绘制图表
      let option = {
        title: {
          text: "订单完成情况",
          subtext: ""
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          data: ["金额"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: "category",
          data: ["销售A", "销售B", "销售C", "销售D", "销售E", "销售F","销售G"]
        },
        series: [
          {
            name: "金额",
            type: "bar",
            data: [19325, 23438, 31000, 121594, 134141, 681807,1122223]
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
