<template>
  <div>
    <!-- 头部筛选 -->
    <div class="top">
      <div class="nav">
        <ul class="ul">
          <!-- <li @click="handleClick('first')">工业总产值</li> -->
          <li @click="handleClick('second')">产能情况</li>
          <li @click="handleClick('third')" class="action">去库存分析</li>
        </ul>
      </div>
      <div class="table">
        <el-row :gutter="20">
          <el-col :span="10">
            <div class="box">
              <p class="tit">集团各企业库存占比分析</p>
              <div>
                <div id="one" style="width: 100%;height:37vh;"></div>
              </div>
            </div>
          </el-col>
          <el-col :span="14">
            <div class="box">
              <p class="tit">各产品库存统计表</p>

              <el-table
                :data="tableData"
                :span-method="objectSpanMethod"
                border
                style="width: 100%;"
                height="37vh"
                stripe
              >
                <el-table-column prop="id" label="企业" width="180" align="center"></el-table-column>
                <el-table-column prop="name" label="年度去库存计划" align="center"></el-table-column>
                <el-table-column prop="amount1" label="已去库存量" align="center"></el-table-column>
                <el-table-column prop="amount2" label="计划完成率" align="center"></el-table-column>
                <!-- <el-table-column prop="amount3" label="本月累计产品" align="center"></el-table-column> -->
              </el-table>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="zx">
        <el-row :gutter="20">
          <el-col :span="24">
            <div class="box">
              <p class="tit">本月库存量趋势分析</p>
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
      tab: "third",
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
    handleClick(n) {
      console.log(this.tab);
      let url = "";
      switch (n) {
        case "second":
          url = "/";
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
        color: ["#5d63b4", "#d1444b", "#30ab8a", "#6dcdba", "#41b1e9"],
        title: {
          text: "",
          subtext: "",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          x: "center",
          data: [
            // "湖北木业公司",
            // "马尾造船",
            // "莆田木业公司",
            // "东南造船",
            // "夏船重工"
          ]
        },
        series: [
          {
            name: "数据",
            type: "pie",
            radius: "55%",
            center: ["50%", "50%"],
            data: [
              {
                value: 35,
                name: "湖北木业公司",
                label: {
                  normal: {
                    show: true,
                    fontSize: 12,
                    formatter: "{d}%\n{b}"
                  }
                }
              },
              {
                value: 10,
                name: "马尾造船",
                label: {
                  normal: {
                    show: true,
                    fontSize: 12,
                    formatter: "{d}%\n{b}"
                  }
                }
              },
              {
                value: 34,
                name: "莆田木业公司",
                label: {
                  normal: {
                    show: true,
                    fontSize: 12,
                    formatter: "{d}%\n{b}"
                  }
                }
              },
              {
                value: 15,
                name: "东南造船",
                label: {
                  normal: {
                    show: true,
                    fontSize: 12,
                    formatter: "{d}%\n{b}"
                  }
                }
              },
              {
                value: 40,
                name: "夏船重工",
                label: {
                  normal: {
                    show: true,
                    fontSize: 12,
                    formatter: "{d}%\n{b}"
                  }
                }
              }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
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
          data: ["2014", "2015", "2016"]
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
          data: [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12"
          ]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "2014",
            type: "line",
            stack: "总量",
            data: [
              1200,
              1320,
              1001,
              1304,
              900,
              2300,
              2100,
              1320,
              1001,
              1304,
              900,
              2300,
              2100
            ]
          },
          {
            name: "2015",
            type: "line",
            stack: "总量",
            data: [
              2220,
              1382,
              4191,
              5234,
              6290,
              2330,
              3210,
              1382,
              4191,
              5234,
              6290,
              2330,
              3210
            ]
          },
          {
            name: "2016",
            type: "line",
            stack: "总量",
            data: [
              1550,
              4232,
              7201,
              3154,
              1690,
              3330,
              4160,
              1382,
              4191,
              5234,
              6290,
              2330,
              3210
            ]
          }
        ]
      });
    }
  }
};
</script>
<style >
body {
  background-color: #f0f5f6;
  overflow: hidden;
}
#app {
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
.el-tabs__header {
  background-color: #60c0e7;
}
.box {
  background-color: #ffffff;
}
.tit {
  color: #666666;
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
