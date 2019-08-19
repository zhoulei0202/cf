<template>
  <div id="myChart2" :style="{width: '100%', height: '35vh',padding:'0 0 0 0'}"></div>
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
      let myChart = this.$echarts.init(document.getElementById("myChart2"));
      // 绘制图表
      var _this = this;
      // let option = {
      //   title: {
      //     text: "回款完成率排名",
      //     x: "center"
      //   },
      //   tooltip: {
      //     trigger: "axis"
      //   },
      //   legend: {
      //     data: ["移动", "联通", "电信"],
      //     y: "bottom"
      //   },
      //   grid: {
      //     left: "3%",
      //     right: "4%",
      //     // bottom: "3%",
      //     containLabel: true
      //   },

      //   xAxis: {
      //     type: "category",
      //     boundaryGap: false,
      //     data: ["北京", "河北", "内蒙古"],
      //     position: "top"
      //   },
      //   yAxis: {
      //     type: "value",
      //     max: "31"
      //   },
      //   series: [
      //     {
      //       name: "移动",
      //       type: "line",
      //       // stack: "总量",
      //       data: [25, 28, 15],
      //       itemStyle: { normal: { label: { show: true } } }
      //     },
      //     {
      //       name: "联通",
      //       type: "line",
      //       // stack: "总量",
      //       data: [15, 20, 25],
      //       itemStyle: { normal: { label: { show: true } } }
      //     },
      //     {
      //       name: "电信",
      //       type: "line",
      //       // stack: "总量",
      //       data: [10, 15, 5],
      //       itemStyle: { normal: { label: { show: true } } }
      //     }
      //   ]
      // };
      let option = {
        title: {
          text: "回款完成率排名"
        },
        tooltip: {
          feature: {
            magicType: {
              type: ["stack", "tiled"]
            }
          },
          // trigger: "axis",
          // dataView: {}
          // formatter: "{b0}: {c0}<br />{b1}: {c1}%"
        },
        legend: {
          data: ["移动", "联通", "电信"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: "category",
          data: ["北京", "河北", "内蒙古"]
        },
        series: [
          {
            name: "移动",
            type: "bar",
            data: [68, 55, 47],

            label: {
              normal: {
                show: true,
                position: "right",
                fontSize: 16,
                // formatter: function(a) {
                //   debugger;
                //   return "排名10";
                // }
                formatter:'排名: {c}'
              }
            }
          },
          {
            name: "联通",
            type: "bar",
            data: [35, 55, 66],
            label: {
              normal: {
                show: true,
                position: "right",
                fontSize: 16,

                formatter: function(a) {
                  debugger;
                  return "排名9";
                }
              }
            }
          },
          {
            name: "电信",
            type: "bar",
            data: [52, 59, 70],
            label: {
              normal: {
                show: true,
                fontSize: 16,

                position: "right",
                formatter: function(a) {
                  debugger;
                  return "排名8";
                }
              }
            }
          }
        ]
      };
      myChart.setOption(option);
      myChart.on("click", function(params) {
        debugger;
        //监听地图点击事件
        _this.$router.push({ path: "/SaleHomePage3" });
      });
    }
  }
};
</script>

<style scoped>
</style>
