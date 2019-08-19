<template>
  <div id="myChart2" :style="{width: '100%', height: '28vh'}"></div>
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
    // debugger;
    // this.drawLine();
  },
  methods: {
    drawLine(data) {
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
      let myChart = this.$echarts.init(document.getElementById("myChart2"));
      // 绘制图表
      let colors = ["#5793f3", "#d14a61", "#675bba"];

      let option = {
        color: colors,
        title: {
          text: "销售芯公里趋势图",
          x: "center",
          textStyle: {
            color: "#394592",
            fontFamily: "微软雅黑",
            fontSize: 14
          }
        },
        tooltip: {
          trigger: "none",
          axisPointer: {
            type: "cross"
          }
        },
        // legend: {
        //   data: ["销售额趋势图"],
        //   textStyle: {
        //     color: "#394592",
        //     fontWeight: "bold",
        //     fontFamily: "微软雅黑",
        //     fontSize: 20
        //   },
        // },
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
                    "销售芯公里  " +
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
            name: "销售芯公里趋势图",
            type: "line",
            smooth: false,
            data: amont1
          },
          {
            name: "销售芯公里趋势图",
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
