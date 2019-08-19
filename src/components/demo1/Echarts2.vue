<template>
  <div id="myChart2" :style="{width: '100%', height: '50vh',padding:'10px 0 0 0'}"></div>
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
      let myChart = this.$echarts.init(document.getElementById("myChart2"));
      // 绘制图表
      let colors = ["#5793f3", "#d14a61", "#675bba"];

      let option = {
        tooltip: {},

        radar: {
          shape: 'circle',
          name: {
            textStyle: {
              color: "#fff",
              backgroundColor: "#999",
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { name: "营业利润率（sales）", max: 100 },
            { name: "应收账款周转率", max: 100 },
            { name: "信资产负债率", max: 100 },
            { name: "现金比率", max: 100 }
          ]
        },
        series: [
          {
            name: "占比",
            type: "radar",
            // areaStyle: {normal: {}},
            data: [
              {
                value: [60, 50, 90, 30],
                name: "预算分配"
              }
            ]
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
