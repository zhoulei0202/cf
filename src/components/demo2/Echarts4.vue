<template>
  <div id="myChart4" :style="{width: '32vw', height: '80vh',background:'#ECFBF7'}"></div>
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
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },

        grid: {
          left: "2%",
          right: "5%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
          axisLabel: {
            textStyle: {
              color: "#394592",
              fontSize: 12
            }
          },
          axisLine: {
            lineStyle: {
              color: "#09F"
            }
          },
          axisTick: {
            lineStyle: {
              color: "#09F"
            }
          }
        },
        yAxis: {
          type: "category",
          axisLabel: {
            textStyle: {
              color: "#394592",
              fontSize: 12,
              fontFamily: "Arial"
            }
          },
          splitLine: {
            lineStyle: {
              color: "#09F"
            }
          },
          data: location
        },
        series: [
          {
            // name: "金额",
            type: "bar",
            color: "#7CBAED",
            data: amont
          }
        ]
      };

      myChart.setOption(option);
      myChart.on("click", function(params) {
        debugger;
        //监听地图点击事件
        // _this.$router.push({ path: "/SaleHomePage1" });
        _this.$router.push({ path: "/HomePage" });
      });
    }
  }
};
</script>

<style scoped>
#myChart4 {
  box-sizing: border-box;
}
</style>
