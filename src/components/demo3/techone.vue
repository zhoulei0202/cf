<template>
  <div>
    <!-- 头部筛选 -->
    <div class="top">
      <el-tabs v-model="tab" type="card" @tab-click="handleClick">
        <!-- <el-tab-pane label="工业总产值" name="first"></el-tab-pane> -->
        <el-tab-pane label="产能情况" name="second"></el-tab-pane>
        <el-tab-pane label="去库存分析" name="third"></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
// import TechOne from "../components/TechOne.vue";
export default {
  components: {
    // TechOne
  },
  mounted() {
    this.initEchart();
  },
  data() {
    return {
      tab: "first",
      tableData: [
        {
          id: "分段下料",
          name: "王小虎",
          amount1: "234",
          amount2: "3.2",
          amount3: 10
        },
        {
          id: "分段下料",
          name: "部门小结",
          amount1: "324",
          amount2: "1.9",
          amount3: 9
        },
        {
          id: "分段中合拢",
          name: "王小虎",
          amount1: "621",
          amount2: "2.2",
          amount3: 17
        },
        {
          id: "分段中合拢",
          name: "部门小结",
          amount1: "539",
          amount2: "4.1",
          amount3: 15
        },
        {
          id: "分段中合拢",
          name: "王小虎",
          amount1: "621",
          amount2: "2.2",
          amount3: 17
        },
        {
          id: "分段中合拢",
          name: "部门小结",
          amount1: "539",
          amount2: "4.1",
          amount3: 15
        },
        {
          id: "分段中合拢",
          name: "王小虎",
          amount1: "621",
          amount2: "2.2",
          amount3: 17
        },
        {
          id: "分段中合拢",
          name: "部门小结",
          amount1: "539",
          amount2: "4.1",
          amount3: 15
        }
      ]
    };
  },
  methods: {
    handleClick() {
      console.log(this.tab);
      let url = "";
      switch (this.tab) {
        case "second":
          url = "/techtwo";
          break;
        case "third":
          url = "/techthree";
          break;
        default:
          url = "/techone";
          break;
      }
      this.$router.push({
        //核心语句
        path: url, //跳转的路径
        query: {
          //路由传参时push和query搭配使用 ，作用时传递参数
          id: this.id
        }
      });
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    },
    initEchart() {
      let _this = this;
      let chartone = this.$echarts.init(document.getElementById("one"));
      chartone.setOption({
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["本月产量", "理想产能"],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "60%",
            data: [10343, 52009]
          }
        ]
      });
      let charttwo = this.$echarts.init(document.getElementById("two"));
      charttwo.setOption({
        title: {
          text: "折线图堆叠"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "视频广告",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "直接访问",
            type: "line",
            stack: "总量",
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: "搜索引擎",
            type: "line",
            stack: "总量",
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  background-color: #f0f5f6;
}
.el-tabs__header {
  background-color: #60c0e7;
}
.box {
  margin: 10px 0;
  background-color: #ffffff;
}
.tit {
  color: #666666;
  font-size: 12px;
  line-height: 32px;
  padding-left: 10px;
  border-bottom: 1px solid #cccccc;
}
.table {
  padding: 10px;
  padding-bottom: 30px;
  color: #333333;
}
.zx {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
}
.el-table thead.is-group th {
  background-color: #5bcdca;
  border-color: #ffffff;
  color: #333333;
}
.el-table td,
.el-table th {
  color: #333333;
}
.el-table th {
  background-color: #5bcdca;
  border-color: #50bfff;
  color: #333333;
  padding: 5px 0;
}
.el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
  background-color: #ffffff;
}
</style>
