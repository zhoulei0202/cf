<template>
  <div>
    <div class="tu" style="height:60vh;">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="box">
            <p class="tit">各地区当月指标完成率</p>
            <div id="one" style="width: 100%;height:52vh;"></div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="box">
            <p class="tit">各地区年度指标完成率</p>
            <div>
              <div id="two" style="width: 100%;height:52vh;"></div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="table" style="height:40vh;">
      <el-row>
        <el-col :span="24">
          <div>
            <el-table
              :data="tableData"
              style="width: 100%;background-color:#0f3a50;"
              border
              height="40vh"
            >
              <el-table-column prop="date" label="城市公司" align="center"></el-table-column>
              <el-table-column prop="date" label="当月目标" align="center"></el-table-column>
              <el-table-column prop="date" label="当月实际完成" align="center"></el-table-column>
              <el-table-column label="月度完成率" width="240" align="center">
                <template slot-scope="scope">
                  <el-progress :percentage="scope.row.name"></el-progress>
                </template>
              </el-table-column>
              <el-table-column prop="date" label="年度计划目标" align="center"></el-table-column>
              <el-table-column prop="date" label="累计实际完成" align="center"></el-table-column>
              <el-table-column label="年度达成率率" width="240" align="center">
                <template slot-scope="scope">
                  <el-progress :percentage="scope.row.name"></el-progress>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  components: {},
  mounted() {
    this.initEchart();
  },
  data() {
    return {
      dialogTableVisible: false,
      props: { multiple: true },
      tableData: [
        {
          date: "林业部",
          time: "当月",
          name: "12",
          province: "23",
          city: "23",
          address: "12",
          zip: 200333
        },
        {
          date: "林业部",
          time: "当月",
          name: "12",
          province: "23",
          city: "23",
          address: "12",
          zip: 200333
        },
        {
          date: "林业部",
          time: "当月",
          name: "12",
          province: "23",
          city: "23",
          address: "12",
          zip: 200333
        },
        {
          date: "林业部",
          time: "当月",
          name: "12",
          province: "23",
          city: "23",
          address: "12",
          zip: 200333
        },
        {
          date: "林业部",
          time: "当月",
          name: "12",
          province: "23",
          city: "23",
          address: "12",
          zip: 200333
        },
        {
          date: "林业部",
          time: "当月",
          name: "12",
          province: "23",
          city: "23",
          address: "12",
          zip: 200333
        },
        {
          date: "林业45部",
          time: "当月",
          name: "12",
          province: "23",
          city: "23",
          address: "12",
          zip: 200333
        }
      ]
    };
  },
  methods: {
    initEchart() {
      let _this = this;
      let e = 80;
      let chartone = this.$echarts.init(document.getElementById("one"));
      chartone.setOption({
        color: ["#3ad8e3", "#4646d3"],
        legend: {
          y: "55%",
          textStyle: {
            fontSize: 18, //字体大小
            color: "#ffffff" //字体颜色
          },
          data: []
        },
        dataset: {
          source: [
            ["score", "product"],
            [3, "杭州"],
            [57.1, "苏州"],
            [120, "太原"],
            [45, "北京"],
            [17, "上海"],
            [68, "青岛"]
          ]
        },
        grid: { containLabel: true },
        xAxis: {
          name: "%",
          axisLabel: {
            show: true,
            textStyle: {
              color: "#ffffff"
            }
          }
        },
        yAxis: {
          type: "category",
          axisLabel: {
            show: true,
            textStyle: {
              color: "#ffffff"
            }
          }
        },
        series: [
          {
            type: "bar",
            encode: {
              x: "amount",
              y: "product"
            }
          }
        ]
      });
      let charttwo = this.$echarts.init(
        document.getElementById("two"),
        "light"
      );
      charttwo.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          }
        },
        toolbox: {},
        legend: {
          data: ["年度目标(万)", "累计完成(万)", "年度完成率(%)"],
          textStyle: {
            fontSize: 12, //字体大小
            color: "#ffffff" //字体颜色
          }
        },
        xAxis: [
          {
            type: "category",
            data: ["常州", "苏州", "杭州", "南京", "北京", "武汉", "上海"],
            axisPointer: {
              type: "shadow"
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#ffffff"
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "",
            min: 0,
            interval: 500,
            axisLabel: {
              formatter: "{value} "
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#ffffff"
              }
            }
          },
          {
            type: "value",
            name: "",
            min: 0,
            interval: 20,
            axisLabel: {
              formatter: "{value}"
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#ffffff"
              }
            }
          }
        ],
        series: [
          {
            name: "年度目标(万)",
            type: "bar",
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6]
          },
          {
            name: "累计完成(万)",
            type: "bar",
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6]
          },
          {
            name: "年度完成率(%)",
            type: "line",
            yAxisIndex: 1,
            data: [20, 22, 33, 45, 63, 10, 103]
          }
        ]
      });

      // 折线图
      let chartzx = this.$echarts.init(document.getElementById("zx"), "light");
      chartzx.setOption({
        legend: {
          // orient: "vertical", //垂直显示
          y: "bottom", //延Y轴居中
          x: "center", //居右显示
          textStyle: {
            fontSize: 18, //字体大小
            color: "#ffffff" //字体颜色
          },
          data: []
        },
        tooltip: {},
        dataset: {
          dimensions: ["product", "今年累计", "目标", "去年同期"],
          source: [
            {
              product: "其他",
              今年累计: 43.3,
              目标: 85.8,
              去年同期: 93.7
            },
            { product: "船舶", 今年累计: 83.1, 目标: 73.4, 去年同期: 55.1 },
            {
              product: "林业",
              今年累计: 86.4,
              目标: 65.2,
              去年同期: 82.5
            },
            {
              product: "风电",
              今年累计: 72.4,
              目标: 53.9,
              去年同期: 39.1
            }
          ]
        },
        xAxis: {
          type: "category",
          axisLabel: {
            show: true,
            textStyle: {
              color: "#ffffff"
            }
          }
        },
        yAxis: {
          axisLabel: {
            show: true,
            textStyle: {
              color: "#ffffff"
            }
          }
        },
        series: [
          { type: "bar", color: ["#6bf8e0"] },
          { type: "bar", color: ["#68a5fb"] },
          { type: "bar", color: ["#dfde69"] }
        ]
      });
    }
  }
};
</script>

<style>
body {
  background-color: #0f3a50;
  overflow-x: hidden;
}
.tit {
  color: #ffffff;
  text-align: center;
  font-size: 3vh;
  line-height: 8vh;
}
.table {
  background-color: #255667;
}
.el-table td,
.el-table th.is-leaf {
  border-color: #333333;
}
.zx {
  width: 100%;
  box-sizing: border-box;
  padding: 5vh;
}
.el-table td {
  background-color: #255667;
  color: #ffffff;
  border-color: #333333;
}
.el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #255667;
}
.el-progress__text {
  color: #ffffff;
}
.el-table thead.is-group th {
  background-color: #0f3a50;
  border-color: #333333;
  color: #ffffff;
}
.el-table {
  border-color: #333333;
}
.el-table th {
  background-color: #317684;
  border-color: #333333;
  color: #ffffff;
  padding: 2vh 0;
}
</style>
