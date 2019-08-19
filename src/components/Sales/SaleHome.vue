<template>
  <div>
    <!-- 标题 -->
    <el-row class="height1">
      <el-col :span="24">
        <div>
          <h1 class="title">{{title}}</h1>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="height2">
      <el-col :span="6">
        <div class="title-box">
          <ul class="sale-ul">
            <li>销售总金额(百万元)</li>
            <li>{{SUM_MONEY}}</li>
          </ul>
          <div style="margin-left:2vh;">
            <el-progress type="circle" :percentage="60" :width="40"></el-progress>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="title-box">
          <ul class="sale-ul">
            <li>回款总额(百万元)</li>
            <li>{{RECEIPT_AMOUNT}}</li>
          </ul>
          <div style="margin-left:2vh;">
            <el-progress type="circle" :percentage="40" :width="40"></el-progress>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="title-box">
          <ul class="sale-ul">
            <li>万芯公里</li>
            <li>{{SUM_F_FIBERLENGTH}}</li>
          </ul>
          <div style="margin-left:2vh;">
            <el-progress type="circle" :percentage="100" :width="40"></el-progress>
          </div>
        </div>
      </el-col>

      <el-col :span="6" style="height:7vh;">
        <div class="title-box">
          <ul class="sale-ul">
            <li>芯公里单价(元)</li>
            <li>{{AVG_PRICE}}</li>
          </ul>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="6" class="height3">
        <div class="flex-container">
          <div class="flex-item">
            <Echarts1 ref="chart1" />
          </div>
          <div class="flex-item">
            <Echarts2 ref="chart2" />
          </div>
          <div class="flex-item">
            <Echarts3 ref="chart3" />
          </div>
        </div>
      </el-col>
      <el-col :span="12" class="height3">
        <div class="flex-container">
          <div class="flex-item">
            <div class="height4">
              <el-select size="mini" v-model="value" @change="change1" clearable placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>

              <el-radio-group size="mini" @change="change2" v-model="radio">
                <el-radio-button :label="1">绝对值</el-radio-button>
                <el-radio-button :label="2">完成率</el-radio-button>
              </el-radio-group>
            </div>

            <Echarts9 ref="chart9" />
          </div>
          <el-row style="width:100%;padding:0" gutter="10">
            <el-col :span="12" style="padding:0;">
              <div class="flex-item">
                <Echarts7 ref="chart7" />
              </div>
            </el-col>
            <el-col :span="12" style="padding:0 0 0 10px;">
              <div class="flex-item" style="height:27vh"></div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="6" class="height3">
        <div class="flex-container">
          <div class="flex-item">
            <!-- <el-select size="mini" v-model="value1" @change="change" clearable placeholder="请选择">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>-->
            <el-radio-group size="mini" @change="change" v-model="radio1">
              <el-radio-button :label="1">办事处</el-radio-button>
              <el-radio-button :label="2">省份</el-radio-button>
            </el-radio-group>
            <el-tabs v-if="isShow" v-model="activeName">
              <el-tab-pane label="办事处销售额" name="first">
                <Echarts4 ref="chart4" />
              </el-tab-pane>
              <el-tab-pane label="办事处芯公里排名" name="second">
                <Echarts5 ref="chart5" />
              </el-tab-pane>
              <el-tab-pane label="办事处回款排名" name="third">
                <Echarts6 ref="chart6" />
              </el-tab-pane>
            </el-tabs>

            <el-tabs v-if="!isShow" v-model="activeName">
              <el-tab-pane label="省销售额" name="first">
                <Echarts4 ref="chart4" />
              </el-tab-pane>
              <el-tab-pane label="省芯公里排名" name="second">
                <Echarts5 ref="chart5" />
              </el-tab-pane>
              <el-tab-pane label="省回款排名" name="third">
                <Echarts6 ref="chart6" />
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Echarts1 from "@/components/Sales/Echarts1";
import Echarts2 from "@/components/Sales/Echarts2";
import Echarts3 from "@/components/Sales/Echarts3";
import Echarts4 from "@/components/Sales/Echarts4";
import Echarts5 from "@/components/Sales/Echarts5";
import Echarts6 from "@/components/Sales/Echarts6";
import Echarts7 from "@/components/Sales/Echarts7";
import Echarts8 from "@/components/Sales/Echarts8";
import Echarts9 from "@/components/Sales/Echarts9";
import TodoList from "@/components/Sales/TodoList";
export default {
  data() {
    return {
      msg: "库存图表展示",
      title: "国内营销总部销售综合报表",
      //四个标题金额
      salesAmountCount: {},
      SUM_MONEY: "",
      SUM_F_FIBERLENGTH: "",
      AVG_PRICE: "",
      RECEIPT_AMOUNT: "",
      activeName: "first",

      options: [
        {
          value: "选项1",
          label: "移动"
        }
      ],
      value: "全部客户",
      options1: [
        {
          value: 1,
          label: "办事处"
        },
        {
          value: 2,
          label: "省份"
        }
      ],
      value1: "办事处",
      //右侧切换的标题
      isShow: true,
      baseData: {},
      //选择项
      radio: 1,
      radio1: 1
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData: function(data) {
      let _this = this;
      var development = process.env.NODE_ENV;
      //开发环境和正式环境
      if (development == "development") {
        var url = this.HOME + this.$importUrl["importUrl"];
        var PageContext = "";
      } else {
        var url = this.$importUrl["importUrl"];
        var PageContext = document.getElementById("requestContextPath").value;
      }
      if (
        data == "" ||
        data == null ||
        data == undefined ||
        data == "全部客户"
      ) {
        data = "";
      }
      var queryParam = {};
      queryParam.INDUSTRY = data;
      queryParam = this.$qs.stringify(queryParam);

      this.$axios({
        method: "post",
        url: PageContext + url,
        data: queryParam
      })
        // .get("/salesReport/querySummaryDataSalesStatements")
        // .get("http://localhost:7091" + url)
        // .get(_this.$importUrl["importUrl"])
        // .post(url, queryParam)
        .then(function(response) {
          // debugger;
          if (response.data.STATUS === "SUCCESS") {
            let data = response.data.DATA;
            _this.baseData = response.data.DATA;
            // _this.salesAmountCount = data.salesAmountCount;
            _this.SUM_MONEY = _this.toPrice(data.salesAmountCount.SUM_MONEY);
            _this.SUM_F_FIBERLENGTH = _this.toPrice(
              data.salesAmountCount.SUM_F_FIBERLENGTH
            );
            _this.AVG_PRICE = _this.toPrice(data.salesAmountCount.AVG_PRICE);
            _this.RECEIPT_AMOUNT = _this.toPrice(
              data.salesAmountCount.RECEIPT_AMOUNT
            );
            //销售额趋势图
            _this.$refs.chart1.drawLine(data.salesAmountMap);
            //销售芯公里
            _this.$refs.chart2.drawLine(data.salesFiberMap);
            //回款趋势图
            _this.$refs.chart3.drawLine(data.salesReceiptMap);
            //办事处销售额
            _this.$refs.chart4.drawLine(data.agencyAmountMap);
            //办事处芯公里排名
            _this.$refs.chart5.drawLine(data.agencyReceiptMap);
            //办事处回款排名
            _this.$refs.chart6.drawLine(data.agencyReceiptMap);
            //销售额客户类别占比
            _this.$refs.chart7.drawLine(data.salesAmountMap);
            //芯公里客户类别占比
            // _this.$refs.chart8.drawLine(data.industryFiberMap);
            //中国地图
            _this.$refs.chart9.drawLine(
              data.provinceSales,
              data.salesAmountCount.SUM_MONEY
            );
            // _this.toProvince(data.provinceSales);
            // _this.toBsc(data.agencyAmountMap);
            _this.isShow = true;
            _this.value1 = "办事处";
            _this.toClient(data.industryList);
          } else {
            alert("数据异常");
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getData1: function(data) {
      let _this = this;
      var development = process.env.NODE_ENV;
      //开发环境和正式环境
      if (development == "development") {
        var url = this.HOME + this.$importUrl["importUrl"];
        var PageContext = "";
      } else {
        var url = this.$importUrl["importUrl"];
        var PageContext = document.getElementById("requestContextPath").value;
      }
      if (
        data == "" ||
        data == null ||
        data == undefined ||
        data == "全部客户"
      ) {
        data = "";
      }
      var queryParam = {};
      queryParam.INDUSTRY = data;
      queryParam = this.$qs.stringify(queryParam);

      this.$axios({
        method: "post",
        url: PageContext + url,
        data: queryParam
      })
        // .get("/salesReport/querySummaryDataSalesStatements")
        // .get("http://localhost:7091" + url)
        // .get(_this.$importUrl["importUrl"])
        // .post(url, queryParam)
        .then(function(response) {
          // debugger;
          if (response.data.STATUS === "SUCCESS") {
            let data = response.data.DATA;

            //办事处销售额
            _this.$refs.chart4.drawLine(data.agencyAmountMap);
            //办事处芯公里排名
            _this.$refs.chart5.drawLine(data.agencyReceiptMap);
            //办事处回款排名
            _this.$refs.chart6.drawLine(data.agencyReceiptMap);
            //销售额客户类别占比

            //芯公里客户类别占比
            // _this.$refs.chart8.drawLine(data.industryFiberMap);
            //中国地图
            _this.$refs.chart9.drawLine(
              data.provinceSales,
              data.salesAmountCount.SUM_MONEY
            );
            // _this.toProvince(data.provinceSales);
            // _this.toBsc(data.agencyAmountMap);
            _this.isShow = true;
            _this.value1 = "办事处";
            _this.toClient(data.industryList);
          } else {
            alert("数据异常");
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    toPrice: function(num) {
      // debugger;
      var source = this.toNum(num).split(".");
      source[0] = source[0].replace(
        new RegExp("(\\d)(?=(\\d{3})+$)", "ig"),
        "$1,"
      );
      return "" + source.join(".");
    },
    toNum: function(str) {
      // debugger;
      return str.toString().replace(/\,|\￥/g, "");
    },

    change: function(data) {
      // debugger;
      if (data == 1) {
        this.isShow = true;
        //办事处销售额
        this.$refs.chart4.drawLine(this.baseData.agencyAmountMap);
        //办事处芯公里排名
        this.$refs.chart5.drawLine(this.baseData.agencyReceiptMap);
        //办事处回款排名
        this.$refs.chart6.drawLine(this.baseData.agencyReceiptMap);
      } else if (data == 2) {
        this.isShow = false;
        this.$refs.chart4.drawLine(this.baseData.provinceAmountMap);
        //省芯公里排名
        this.$refs.chart5.drawLine(this.baseData.provinceFiberMap);
        //省回款排名
        this.$refs.chart6.drawLine(this.baseData.provinceReceiptMap);
      }
    },
    change1: function(data) {
      debugger;
      this.getData(data);
    },
    change2: function(data) {
      if (data == 1) {
        data = "联通";
      } else {
        data = "电信";
      }
      this.getData1(data);
    },
    toClient: function(data1) {
      //客户类别赋值
      var _data = [];
      for (let i = 0; i < data1.length; i++) {
        _data.push({ value: data1[i], label: data1[i] });
      }
      _data.unshift({ value: "全部客户", label: "全部客户" });
      this.options = _data;
    }
  },
  components: {
    Echarts1,
    Echarts2,
    Echarts3,
    Echarts4,
    Echarts5,
    Echarts6,
    Echarts7,
    Echarts8,
    Echarts9,
    TodoList
  }
};
</script>

<style scoped>
.title {
  font-size: 0.12rem;
  font-weight: bold;
  margin: 1vh;
}
.el-row {
  margin-bottom: 1vh;
  box-sizing: border-box;
}
.el-col {

  box-sizing: border-box;
}
.sale-ul {
  height: 7vh;
  list-style: none;
  display: inline-block;
}
.sale-ul li {
  height: 3.5vh;
  line-height: 3.5vh;
  font-weight: bold;
  font-size: 1em;
}

/* ----------------------------------------------------------------------------------------------- */
.mask {
  background: rgba(192, 184, 184, 0.5);
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  display: none;
  z-index: 20;
  filter: alpha(opacity=60);
}

.PopUp {
  position: fixed;
  z-index: 21 !important;
  background-color: #edfcf8;
  width: 600px;
  height: 80vh;
  border-style: solid solid solid solid;
  border-width: 3px 3px 3px 3px;
  border-color: #cccc99;
  left: 50%;
  top: 50%;
  margin-top: -40vh; /*--高度的一半--*/
  margin-left: -300px; /*--宽度的一半--*/
}
.flex-container {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.flex-item {
  width: 100%;
  margin: 0.4vh 0;
  box-sizing: border-box;
  background: #edfcf8;
}
.height1 {
  height: 5vh;
}
.height2 {
  height: 7vh;
}
.height3 {
  height: 85vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  /* border: 1px solid red; */
}
.height4 {
  height: 5vh;
  line-height: 5vh;
}
.title-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

