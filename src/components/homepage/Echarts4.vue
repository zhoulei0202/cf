<template>
  <div id="myChart4" :style="{width: '100%', height: '35vh',padding:'0 0 0 0'}"></div>
</template>

<script>
export default {
  data() {
    return {};
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
        title: {
          text: "评估排名",
          x: "center"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["移动", "联通", "电信"],
          y: "bottom"
        },
        grid: {
          left: "3%",
          right: "4%",
          // bottom: "3%",
          containLabel: true
        },
      
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["北京", "河北", "内蒙古"],
          position: "top"
        },
        yAxis: {
          type: "value",
          max:"31"
        },
        series: [
          {
            name: "移动",
            type: "line",
            // stack: "总量",
            data: [8, 9, 5],
            itemStyle: { normal: { label: { show: true } } }
          },
          {
            name: "联通",
            type: "line",
            // stack: "总量",
            data: [12, 15, 20],
            itemStyle: { normal: { label: { show: true } } }
          },
          {
            name: "电信",
            type: "line",
            // stack: "总量",
            data: [4, 8, 5],
            itemStyle: { normal: { label: { show: true } } }
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
