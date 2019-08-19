<template>
  <div>
    <!-- 头部筛选 -->
    <div class="top">
      <div class="nav">
        <ul class="ul">
          <!-- <li @click="handleClick('first')">工业总产值</li> -->
          <li @click="handleClick('second')" class="action">产能情况</li>
          <li @click="handleClick('third')">去库存分析</li>
        </ul>
      </div>
      <div class="table">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="box">
              <p class="tit">产能饱和度分析</p>
              <div>
                <div id="one" style="width: 100%;height:37vh;"></div>
              </div>
            </div>
          </el-col>
          <el-col :span="16">
            <div class="box">
              <p class="tit">各产品线产能统计</p>

              <el-table
                :data="tableData"
                :span-method="objectSpanMethod"
                border
                style="width: 100%;"
                height="37vh"
                stripe
              >
                <el-table-column prop="id" label="工序名称" width="180" align="center"></el-table-column>
                <el-table-column prop="name" label="生产线" align="center"></el-table-column>
                <el-table-column prop="amount1" label="当月理论产能" align="center"></el-table-column>
                <el-table-column prop="amount2" label="当月实际产能" align="center"></el-table-column>
                <el-table-column prop="amount3" label="本月累计产品" align="center"></el-table-column>
              </el-table>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="zx">
        <el-row :gutter="20">
          <el-col :span="24">
            <div class="box">
              <p class="tit">本月生产线1产能趋势分析</p>
              <div id="two" style="width: 100%;height:41vh;"></div>
            </div>
          </el-col>
        </el-row>
      </div>
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
      tab: "second",
      tableData: [
        {
          id: "分段下料",
          name: "东南",
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
          name: "东南",
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
          name: "东南",
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
          name: "利亚",
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
    handleClick(n) {
      let url = "";
      switch (n) {
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
        color: ["#60c0e7"],
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
            name: "数据",
            type: "bar",
            barWidth: "60%",
            data: [10343, 52009]
          }
        ]
      });
      let charttwo = this.$echarts.init(document.getElementById("two"));
      charttwo.setOption({
        title: {
          text: ""
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["实际产能", "理论产能"]
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
          data: ["1", "2", "3", "4", "5", "6", "7"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "实际产能",
            type: "line",
            // stack: "总量",
            data: [520, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "理论产能",
            type: "line",
            // stack: "总量",
            data: [220, 220, 220, 220, 220, 220, 220]
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
  overflow: hidden;
}
.nav {
  width: 100%;
  background-color: #60c0e7;
  line-height: 6vh;
  height: 6vh;
  margin-bottom: 2vh;
}
.ul > li {
  float: left;
  box-sizing: border-box;
  height: 6vh;
  padding: 0 4vh;
  font-size: 2vh;
  color: #333;
  border: 1px solid #ffffff;
  cursor: pointer;
  border-radius: 1px;
}
.ul > li:hover {
  color: #ffffff;
}
.ul > li.action {
  background-color: #ffffff;
  color: #60c0e7;
}
.box {
  /* margin: 10px 0; */
  background-color: #ffffff;
}
.tit {
  color: #666666;
  height: 5vh;
  font-size: 2vh;
  line-height: 5vh;
  padding-left: 1vh;
  border-bottom: 1px solid #cccccc;
}
.table {
  padding-bottom: 4vh;
  color: #333333;
  height: 42vh;
}
.zx {
  height: 50vh;
  box-sizing: border-box;
  width: 100%;
  margin-top: 2vh;
  background-color: #ffffff;
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
  padding: 2vh 0;
}
.el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
  background-color: #ffffff;
}
.el-table--striped .el-table__body tr.el-table__row--striped td {
  background-color: #eaf6f8;
}
.el-table__footer-wrapper .el-table td.gutter,
.el-table th.gutter {
  background-color: #eaf6f8 !important;
}
.el-table__footer-wrapper tbody td,
.el-table__header-wrapper tbody td {
  background-color: #eaf6f8;
}
</style>
