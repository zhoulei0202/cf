<template>
  <div>
    <!-- 头部筛选 -->
    <div class="top">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="box">
            <p class="tit">净利润(可钻取)</p>
            <div id="one" style="width: 100%;height:35vh;"></div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="box">
            <p class="tit">销售(可钻取)</p>
            <div id="two" style="width: 100%;height:35vh;"></div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="box">
            <p class="tit">应收款(可钻取)</p>
            <div id="three" style="width: 100%;height:35vh;"></div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="box">
            <p class="tit">存货(可钻取)</p>
            <div id="four" style="width: 100%;height:35vh;"></div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- table表 -->
    <div class="table">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="box">
            <p class="tit">利润明细表(单位：万元)</p>
            <el-table :data="tableData" height="50vh" stripe>
              <el-table-column label="部门" align="center">
                <el-table-column prop="date" label="部门" align="center"></el-table-column>
                <el-table-column prop="time" label="时间" align="center"></el-table-column>
              </el-table-column>
              <el-table-column label="利润总额" align="center">
                <el-table-column prop="name" label="实际" align="center"></el-table-column>
                <el-table-column prop="city" label="指标" align="center"></el-table-column>
                <el-table-column prop="address" label="完成率" align="center"></el-table-column>
              </el-table-column>
              <el-table-column label="净利润" align="center">
                <el-table-column prop="name" label="实际" align="center"></el-table-column>
                <el-table-column prop="city" label="指标" align="center"></el-table-column>
                <el-table-column prop="address" label="完成率" align="center"></el-table-column>
              </el-table-column>
            </el-table>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="box">
            <p class="tit">各部门本年累计利润对比(单位：万元)</p>
            <div>
              <div id="zx" style="width: 100%;height:50vh;"></div>
            </div>
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
          date: "林33业部",
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
          date: "林33业部",
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
      let chartone = this.$echarts.init(
        document.getElementById("one"),
        "light"
      );
      chartone.setOption({
        title: {
          show: false,
          text: "",
          x: "center",
          textStyle: {
            fontSize: "15",
            color: "green",
            fontWeight: "bold"
          }
        },
        //  提示框组件
        tooltip: {
          //是否显示提示框组件，包括提示框浮层和 axisPointe
          show: false,
          // 触发类型: item:数据项触发，axis：坐标轴触发
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
          {
            name: "任务进度",
            type: "pie",
            color: ["#47bac1", "#c5c5c5"],
            radius: ["60%", "76%"],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                // 数据值
                value: 20,
                // 数据项名称
                name: "净利润 4.34",
                //该数据项是否被选中
                selected: false,
                // 单个扇区的标签配置
                label: {
                  normal: {
                    // 是显示标签
                    show: true,
                    position: "center",
                    fontSize: 16,
                    // 标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 \n 换行
                    formatter: "{d}%\n{b}"
                  }
                }
              },
              {
                value: 100,
                label: {
                  normal: {
                    show: false
                  }
                }
              }
            ]
          }
        ]
      });
      let charttwo = this.$echarts.init(
        document.getElementById("two"),
        "light"
      );
      charttwo.setOption({
        // 标题组件，包含主标题和副标题
        title: {
          show: false,
          text: "",
          x: "center",
          textStyle: {
            fontSize: "15",
            color: "green",
            fontWeight: "bold"
          }
        },
        //  提示框组件
        tooltip: {
          //是否显示提示框组件，包括提示框浮层和 axisPointe
          show: false,
          // 触发类型: item:数据项触发，axis：坐标轴触发
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        // // 图例
        // legend: {
        //     orient: 'vertical',
        //     x: 'left',
        //     data:['完成率']
        // },

        // 系列列表。每个系列通过 type 决定自己的图表类型
        series: [
          {
            // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
            name: "任务进度",
            type: "pie",
            color: ["#6dd4b3", "#c5c5c5"],

            // 饼图的半径，数组的第一项是内半径，第二项是外半径
            radius: ["60%", "76%"],
            // 是否启用防止标签重叠策略，默认开启
            avoidLabelOverlap: false,
            hoverAnimation: false,
            // 标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                // 数据值
                value: 20,
                // 数据项名称
                name: "销售 4.34",
                //该数据项是否被选中
                selected: false,
                // 单个扇区的标签配置
                label: {
                  normal: {
                    // 是显示标签
                    show: true,
                    position: "center",
                    fontSize: 16,
                    // 标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 \n 换行
                    formatter: "{d}%\n{b}"
                  }
                }
              },
              {
                value: 100,
                label: {
                  normal: {
                    show: false
                  }
                }
              }
            ]
          }
        ]
      });
      let chartthree = this.$echarts.init(
        document.getElementById("three"),
        "light"
      );
      chartthree.setOption({
        // 标题组件，包含主标题和副标题
        title: {
          show: false,
          text: "",
          x: "center",
          textStyle: {
            fontSize: "15",
            color: "green",
            fontWeight: "bold"
          }
        },
        //  提示框组件
        tooltip: {
          //是否显示提示框组件，包括提示框浮层和 axisPointe
          show: false,
          // 触发类型: item:数据项触发，axis：坐标轴触发
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        // // 图例
        // legend: {
        //     orient: 'vertical',
        //     x: 'left',
        //     data:['完成率']
        // },

        // 系列列表。每个系列通过 type 决定自己的图表类型
        series: [
          {
            // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
            name: "任务进度",
            type: "pie",
            color: ["#f7c34d", "#c5c5c5"],

            // 饼图的半径，数组的第一项是内半径，第二项是外半径
            radius: ["60%", "76%"],
            // 是否启用防止标签重叠策略，默认开启
            avoidLabelOverlap: false,
            hoverAnimation: false,
            // 标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                // 数据值
                value: 20,
                // 数据项名称
                name: "应收款 4.34",
                //该数据项是否被选中
                selected: false,
                // 单个扇区的标签配置
                label: {
                  normal: {
                    // 是显示标签
                    show: true,
                    position: "center",
                    fontSize: 16,
                    // 标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 \n 换行
                    formatter: "{d}%\n{b}"
                  }
                }
              },
              {
                value: 100,
                label: {
                  normal: {
                    show: false
                  }
                }
              }
            ]
          }
        ]
      });
      let chartfour = this.$echarts.init(
        document.getElementById("four"),
        "light"
      );
      chartfour.setOption({
        // 标题组件，包含主标题和副标题
        title: {
          show: false,
          text: "",
          x: "center",
          textStyle: {
            fontSize: "15",
            color: "green",
            fontWeight: "bold"
          }
        },
        //  提示框组件
        tooltip: {
          //是否显示提示框组件，包括提示框浮层和 axisPointe
          show: false,
          // 触发类型: item:数据项触发，axis：坐标轴触发
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        // // 图例
        // legend: {
        //     orient: 'vertical',
        //     x: 'left',
        //     data:['完成率']
        // },

        // 系列列表。每个系列通过 type 决定自己的图表类型
        series: [
          {
            // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
            name: "任务进度",
            type: "pie",
            color: ["#6a92d2", "#c5c5c5"],
            // 饼图的半径，数组的第一项是内半径，第二项是外半径
            radius: ["60%", "76%"],
            // 是否启用防止标签重叠策略，默认开启
            avoidLabelOverlap: false,
            hoverAnimation: false,
            // 标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                // 数据值
                value: 20,
                // 数据项名称
                name: "存货 4.34",
                //该数据项是否被选中
                selected: false,
                // 单个扇区的标签配置
                label: {
                  normal: {
                    // 是显示标签
                    show: true,
                    position: "center",
                    fontSize: 16,
                    // 标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 \n 换行
                    formatter: "{d}%\n{b}"
                  }
                }
              },
              {
                value: 10,
                label: {
                  normal: {
                    show: false
                  }
                }
              }
            ]
          }
        ]
      });
      // 折线图
      let chartzx = this.$echarts.init(document.getElementById("zx"), "light");
      chartzx.setOption({
        legend: {
          // orient: "vertical", //垂直显示
          y: "bottom", //延Y轴居中
          x: "center" //居右显示
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
        
        xAxis: { type: "category" },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          { type: "bar", color: ["#47bac1"] },
          { type: "bar", color: ["#7fc8ea"] },
          { type: "bar", color: ["#b5e3e5"] }
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
.top {
  height: 40vh;
  padding: 1vh 0;
}
.table {
  height: 56vh;
  margin-top: 4vh;
}
.box {
  /* margin: 2vh 0; */
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
.zx {
  width: 100%;
  box-sizing: border-box;
  padding: 2vh;
}
.el-table thead.is-group th {
  background-color: #50bfff;
  border-color: #ffffff;
}
.el-table th {
  background-color: #50bfff;
  border-color: #50bfff;
  color: #333333;
  padding: 1vh 0;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 2vh;
  min-height: 6vh;
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
