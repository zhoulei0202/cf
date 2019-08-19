<template>
  <div id="myChart1" :style="{width: '100%', height: '35vh',padding:'0 0 0 0'}"></div>
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
      let myChart = this.$echarts.init(document.getElementById("myChart1"));
      // 绘制图表
      var _this = this;
      // let option = {
      //   title: {
      //     text: "订单完成率排名",
      //     // subtext: "<a href='./'>查看详情</a>",

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
      //     max: "31",
      //     inverse: true
      //   },
      //   series: [
      //     {
      //       name: "移动",
      //       type: "line",
      //       // stack: "总量",
      //       data: [10, 18, 11],
      //       itemStyle: { normal: { label: { show: true } } }
      //     },
      //     {
      //       name: "联通",
      //       type: "line",
      //       // stack: "总量",
      //       data: [5, 9, 6],
      //       itemStyle: { normal: { label: { show: true } } }
      //     },
      //     {
      //       name: "电信",
      //       type: "line",
      //       // stack: "总量",
      //       data: [15, 3, 2],
      //       itemStyle: { normal: { label: { show: true } } }
      //     }
      //   ]
      // };
      var rank = [{ 北京: { 移动: 10 } }];
      let option = {
        title: {
          text: "订单完成率排名"
        },
        tooltip: {
          feature: {
            magicType: {
              type: ["stack", "tiled"]
            },
            dataView: {}
          }
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
            data: [18203, 23489, 29034],

            // label: {
            //   normal: {
            //     show: true,
            //     position: "right",
            //     fontSize: 16,
            //     formatter: function(a) {
            //       debugger;
            //       let aa=a.name;
            //       let bb=a.seriesName;
            //       return rank[0][aa][bb];
            //     }
            //   }
            // }
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: "right",
                  textStyle: {
                    color: "#333",
                    fontSize: 16
                  },
                  formatter: function(params) {
                    debugger;
                    if (params.value) {
                      return "排名" + 10;
                    } else {
                      return "";
                    }
                  }
                },
                color: "#ee8b3f"
              }
            }
          },
          {
            name: "联通",
            type: "bar",
            data: [19325, 23438, 31000],
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
            data: [19325, 23438, 31000],
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
      // myChart.on("click", function(params) {
      //   debugger;
      // });
      myChart.on("click", function(params) {
        debugger;
        //监听地图点击事件
        _this.$router.push({ path: "/SaleHomePage2" });
      });
    }
  }
};
</script>

<style scoped>
</style>
