<template>
  <div id="myChart2" :style="{width: '100%', height: '35vh',padding:'2vh 0 0 0'}"></div>
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
        title: {
          text: "利润构成（万元）",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "right",
          top:"center",
          data: ["其他", "风电", "林业", "船舶"]
        },
        series: [
          {
            name: "利润构成",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "其他" },
              { value: 310, name: "风电" },
              { value: 234, name: "林业" },
              { value: 688, name: "船舶" },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
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
