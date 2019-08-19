<template>
  <div id="myChart9" :style="{width: '100%', height: '52vh'}"></div>
</template>

<script>
import echarts from "echarts";
import "../../../node_modules/echarts/map/js/china.js"; // 引入中国地图数据
export default {
  name: "hello",
  data() {
    return {};
  },
  mounted() {
    // this.drawLine();
  },
  methods: {
    drawLine(data, salesAmountCount) {
      let _salesAmountCount = salesAmountCount;
      let _this = this;
      var _data = [];
      debugger;
      for (let i = 0; i < data.length; i++) {
        _data.push({ value: data[i].CONTRACT_MONEY, name: data[i].PROVINCE });
      }
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart9"));
      // 绘制图表
      let option = {
        title: {
          text: "总销售额" + _salesAmountCount + "万",
          left: "left"
        },
        backgroundColor: "#edfcf8",
        tooltip: {}, // 鼠标移到图里面的浮动提示框
        dataRange: {
          show: false,
          min: 0,
          max: 1000,
          text: ["High", "Low"],
          realtime: true,
          calculable: true,
          color: ["orangered", "yellow", "lightskyblue"]
        },
        visualMap: {
          //颜色轴，可以根据数据点的值大小，展示不同的颜色，或用来展示地图块的不同颜色
          min: 0,
          max: 200,
          calculable: true,
          inRange: {
            color: ["#3dda8e", "#eac736", "#d94e5d"]
          },
          textStyle: {
            color: "#fff"
          }
        },

        geo: {
          // 这个是重点配置区
          map: "china", // 表示中国地图
          roam: true,
          label: {
            normal: {
              show: true, // 是否显示对应地名
              textStyle: {
                color: "rgba(0,0,0,0.4)"
              }
            }
          },
          itemStyle: {
            normal: {
              borderColor: "rgba(0, 0, 0, 0.2)"
            },
            emphasis: {
              areaColor: null,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        },
        series: [
          {
            type: "scatter",
            coordinateSystem: "geo" // 对应上方配置
          },
          {
            name: "销售总额", // 浮动框的标题
            type: "map",
            geoIndex: 0,
            data: _data
          }
        ]
      };

      var option1 = {
        tooltip: {
          formatter: function(params) {
            var info =
              '<p style="font-size:18px">' +
              params.name +
              '</p><p style="font-size:14px">销售额：' +
              params.value +
              "</p>";
            return info;
          },
          backgroundColor: "#ff7f50", //提示标签背景颜色
          textStyle: { color: "#fff" } //提示标签字体颜色
        },
        //左侧小导航图标
        visualMap: {
          show: true,
          x: "left",
          y: "center",
          splitList: [
            // { start: 500, end: 1000 },
            { start: 100, end: 300 },
            { start: 50, end: 100 },
            { start: 20, end: 50 },
            { start: 10, end: 20 },
            { start: 0, end: 10 }
          ],
          color: [
            // "#5475f5",

            "rgba(255,0,0,1)",
            "rgba(255,0,0,.7)",
            "rgba(255,0,0,.5)",
            "rgba(255,0,0,.3)",
            "rgba(255,0,0,.1)"
          ]
        },
        series: [
          {
            name: "中国",
            type: "map",
            mapType: "china",

            label: {
              normal: {
                show: true //显示省份标签
              },
              emphasis: {
                show: true //对应的鼠标悬浮效果
              }
            },
            data: _data
          }
        ]
      };

      myChart.setOption(option1);
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
#myChart9 {
  box-sizing: border-box;
}
</style>
