<template>
  <div id="myChart8" :style="{width: '100%', height: '30vh',padding:'1vh'}"></div>
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
    // this.drawLine();
  },
  methods: {
    drawLine(data) {
      var unit = [];
      var amont = [];
      var _data = [];
      var k;
      for (k in data) {
        unit.push(data[k]);
        // amont.push(k);
        _data.push({ value: k, name: data[k] });
      }
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart8"));
      // 绘制图表
      let option = {
        title: {
          text: "芯公里客户类别占比",
          // subtext: "虚构数据",
          left: "left"
        },
        tooltip: {
          trigger: "item",
          formatter: "类别占比 <br/>{b} : {c} ({d}%)"
        },
        grid: {
          left: "5%",
          right: "5%",
          bottom: "3%",
          containLabel: true
        },
        legend: {
          // orient: 'vertical',
          // top: 'middle',
          bottom: 10,
          left: "center",
          data: unit
        },
        series: [
          {
            type: "pie",
            radius: "65%",
            center: ["50%", "50%"],
            selectedMode: "single",
            data: _data,
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
