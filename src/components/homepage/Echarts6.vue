<template>
  <div id="myChart6" :style="{width: '100%', height: '35vh',padding:'0 0 0 0'}"></div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {
    var d1 = [620, 963, 333, 562, 450, 820, 135.6, 555];
    var d2 = [680, 888, 444, 562, 999, 820, 135.6, 666];
    this.drawLine(d1, d2);
  },
  methods: {
    drawLine(data1, data2) {
      var data1 = data1;
      var data2 = data2;
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart6"));
      // 绘制图表

      let option = {
        title: {
          text: "回款预测及实际对比",
          x: "center"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["预测回款", "实际回款"],
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
          boundaryGap: true,
          data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月"]
        },
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "预测回款",
            type: "bar",
            barWidth: "20%",
            data: data1
          },
          {
            name: "实际回款",
            type: "bar",
            barWidth: "20%",
            data: data2
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
