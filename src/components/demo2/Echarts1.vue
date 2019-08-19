<template>
  <div id="myChart1" :style="{width: '100%', height: '45vh',padding:'2vh 0 0 0',background:'#ECFBF7'}"></div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {};
  },

  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart1"));
      // 绘制图表
      let colors = ["#5793f3", "#d14a61", "#675bba"];

      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}"
        },
        legend: {
          left: "center",
          data: ["全部", "长飞"]
        },
        xAxis: {
          type: "category",
          name: "x",
          splitLine: { show: false },
          data: ["五月", "六月"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        yAxis: {
          type: "log",
          name: "y"
        },
        series: [
          {
            name: "全部",
            type: "line",
            data: [33761, 1908789]
          },
          {
            name: "长飞",
            type: "line",
            data: [33555, 128288]
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
