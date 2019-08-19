<template>
  <div id="myChart1" :style="{width: '100%', height: '45vh',margin:'3vh 0 0 0'}"></div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
      // option: option
    };
  },
  props: {
    option: {
      type: Object
    }
  },
  mounted() {
    debugger;
    this.drawLine();
  },
  methods: {
    drawLine(option) {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart1"));
      // 绘制图表
      let option1 = {
        title: {
          text: "光纤材料",
          subtext: "1880",
          x: "center",
          y: 180,
          itemGap: 10,
          textStyle: {
            color: "#B7E1FF",
            fontWeight: "normal",
            fontFamily: "微软雅黑",
            fontSize: 24
          },
          subtextStyle: {
            color: "#B7E1FF",
            fontWeight: "bolder",
            fontSize: 24,
            fontFamily: "微软雅黑"
          }
        },
        series: [
          {
            type: "pie",
            center: ["50%", "50%"],
            radius: [75, 90],
            x: "0%",
            tooltip: { show: false },
            data: [
              {
                name: "达成率",
                value: 79,
                itemStyle: { color: "rgba(0,153,255,0.8)" },
                hoverAnimation: false,
                label: {
                  show: false,
                  position: "center",
                  textStyle: {
                    fontFamily: "微软雅黑",
                    fontWeight: "bolder",
                    color: "#B7E1FF",
                    fontSize: 24
                  }
                },
                labelLine: {
                  show: false
                }
              },
              {
                name: "79%",
                value: 21,
                itemStyle: { color: "rgba(0,153,255,0.1)" },
                hoverAnimation: false,
                label: {
                  show: false,
                  position: "center",
                  padding: 20,
                  textStyle: {
                    fontFamily: "微软雅黑",
                    fontSize: 24,
                    color: "#B7E1FF"
                  }
                },
                labelLine: {
                  show: false
                }
              }
            ]
          },
          {
            type: "pie",
            center: ["50%", "50%"],
            radius: [95, 100],
            x: "0%",
            hoverAnimation: false,
            data: [
              {
                value: 100,
                itemStyle: { color: "rgba(0,153,255,0.3)" },
                label: { show: false },
                labelLine: { show: false }
              }
            ]
          },
          {
            type: "pie",
            center: ["50%", "50%"],
            radius: [69, 70],
            x: "0%",
            hoverAnimation: false,
            data: [
              {
                value: 100,
                itemStyle: { color: "rgba(0,153,255,0.3)" },
                label: { show: false },
                labelLine: { show: false }
              }
            ]
          }
        ]
      };
      debugger;
      let option2 = option ? option : option1;
      myChart.setOption(option2);
    }
  }
};
</script>

<style scoped>
</style>
