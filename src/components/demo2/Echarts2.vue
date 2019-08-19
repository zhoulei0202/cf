<template>
  <div id="myChart2" :style="{width: '100%', height: '51vh'}"></div>
</template>

<script>
import echarts from "echarts";
import "./../../../node_modules/echarts/map/js/china.js"; // 引入中国地图数据
export default {
  name: "hello",
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    randomData() {
      return Math.round(Math.random() * 500);
    },
    drawLine(data, salesAmountCount) {
      var mydata = [
        { name: "北京", value: 100 },
        { name: "天津", value: 999 },
        { name: "上海", value: 999 },
        { name: "重庆", value: 999 },
        { name: "河北", value: 999 },
        { name: "河南", value: 999 },
        { name: "云南", value: 999 },
        { name: "辽宁", value: 999 },
        { name: "黑龙江", value: 999 },
        { name: "湖南", value: 999 },
        { name: "安徽", value: 999 },
        { name: "山东", value: 999 },
        { name: "新疆", value: 999 },
        { name: "江苏", value: 999 },
        { name: "浙江", value: 999 },
        { name: "江西", value: 999 },
        { name: "湖北", value: 999 },
        { name: "广西", value: 999 },
        { name: "甘肃", value: 999 },
        { name: "山西", value: 999 },
        { name: "内蒙古", value: 999 },
        { name: "陕西", value: 999 },
        { name: "吉林", value: 999 },
        { name: "福建", value: 999 },
        { name: "贵州", value: 999 },
        { name: "广东", value: 999 },
        { name: "青海", value: 999 },
        { name: "西藏", value: 999 },
        { name: "四川", value: 999 },
        { name: "宁夏", value: 999 },
        { name: "海南", value: 999 },
        { name: "台湾", value: 999 },
        { name: "香港", value: 999 },
        { name: "澳门", value: 999 }
      ];
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart2"));
      // 绘制图表
      let optionMap = {
        backgroundColor: "#FFFFFF",
        title: {
          text: "全国地图大数据",
          subtext: "",
          x: "center"
        },
        tooltip: {
          trigger: "item"
        },

        //左侧小导航图标
        visualMap: {
          show: true,
          x: "left",
          y: "center",
          splitList: [
            { start: 500, end: 600 },
            { start: 400, end: 500 },
            { start: 300, end: 400 },
            { start: 200, end: 300 },
            { start: 100, end: 200 },
            { start: 0, end: 100 }
          ],
          color: [
            "#5475f5",
            "#9feaa5",
            "#85daef",
            "#74e2ca",
            "#e6ac53",
            "#9fb5ea"
          ]
        },

        //配置属性
        series: [
          {
            name: "数据",
            type: "map",
            mapType: "china",
            roam: true,
            label: {
              normal: {
                show: true //省份名称
              },
              emphasis: {
                show: false
              }
            },
            data: mydata //数据
          }
        ]
      };
      //初始化echarts实例

      myChart.setOption(optionMap);
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
