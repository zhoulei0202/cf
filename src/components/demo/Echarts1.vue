<template>
  <div id="myChart1" :style="{width: '100%', height: '35vh',padding:'2vh 0 0 0'}"></div>
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
      let myChart = this.$echarts.init(document.getElementById("myChart1"));
      // 绘制图表
      let colors = ["#5793f3", "#d14a61", "#675bba"];

      let option = {
        title: {
          text: "利润情况总览",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c}"
        },
        // color: [
        //   "#BBFFFF",
        //   "#FFDEAD",
        //   "#87CEFA",
        //   "#87CEFA",
        //   "#87CEFA",
        //   "#87CEFA",
        //   "#87CEFA",
        //   "#87CEFA",
        //   "#87CEFA",
        //   "#87CEFA",
        //   "#87CEFA",
        //   "#87CEFA"
        // ],
        calculable: true,
        grid: {
          left: "1%",
          right: "1%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "金额",
            type: "bar",
            color: function(params) {
              // build a color map as your need.

              var colorList = [
                "#C1232B",
                "#B5C334",
                "#FCCE10",
                "#E87C25",
                "#27727B",

                "#FE8463",
                "#9BCA63",
                "#FAD860",
                "#F3A43B",
                "#60C0DD",

                "#D7504B",
                "#C6E579",
                "#F4E001",
                "#F0805A",
                "#26C0C0"
              ];

              return colorList[params.dataIndex];
            },
            label: {
              show: true,
              position: "top",
              formatter: "{c}"
            },
            data: [
              1000,
              1100,
              1200,
              1300,
              1400,
              1500,
              1600,
              1700,
              1800,
              1900,
              2000,
              1800
            ],
            // markPoint: {
            //   data: [
            //     { type: "max", name: "最大值" },
            //     { type: "min", name: "最小值" }
            //   ]
            // },
            // markLine: {
            //   data: [{ type: "average", name: "平均值" }]
            // }
            barWidth: 30
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
