<template>
  <div id="myChart6" :style="{width: '100%', height: '30vh',margin:'2vh 0 3vh 0'}"></div>
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
      let myChart = this.$echarts.init(document.getElementById("myChart6"));
      // 绘制图表
      let option = {
        title: {
          text: "现库存量金额",
          subtext: "当月",
          textStyle: {
            color: "#B7E1FF",
            // fontWeight: "normal",
            fontFamily: "微软雅黑",
            fontSize: 18
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          data: ["金额",'供应商'],
          textStyle: {
            color: "#fff"
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
          axisLabel: {
            textStyle: {
              color: "#B7E1FF",
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
              color: "#B7E1FF",
              fontSize: 12,
              fontFamily: "Arial"
            }
          },
          splitLine: {
            lineStyle: {
              color: "#09F"
            }
          },
          data: [
            "材料1",
            "材料2",
            "材料3",
            "材料4",
            "材料5",
            "材料6",
            "材料7",
            "材料8",
            "材料9",
            "材料10"
          ]
        },
        series: [
          {
            name: "金额",
            type: "bar",
            data: [
              8888,
              11111,
              22222,
              33333,
              44444,
              55555,
              66666,
              77777,
              88888,
              99999
            ]
          },
            {
            name: "供应商",
            type: "bar",
            data: [
              8888,
              11111,
              22222,
              33333,
              44444,
              55555,
              66666,
              77777,
              88888,
              99999
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
