<template>
  <div id="myChart5" :style="{width: '32vw', height: '80vh',background:'#ECFBF7'}"></div>
</template>

<script>
// import TodoItem from "@/components/TodoItem";
// import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    // this.drawLine();
  },
  methods: {
    drawLine(data) {
      var _this = this;
      var location = [];
      var amont = [];
      var k;
      for (k in data) {
        location.push(data[k]);
        amont.push(k);
      }
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart5"));
      // 绘制图表
      let option = {
        // title: {
        //   text: "办事处芯公里排名",
        //   x: "center",
        //   textStyle: {
        //     color: "#394592",
        //     fontFamily: "微软雅黑",
        //     fontSize: 18
        //   }
        // },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },

        grid: {
          left: "3%",
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
     
    }
  }
};
</script>

<style scoped>
#myChart5 {
  box-sizing: border-box;
}
</style>
