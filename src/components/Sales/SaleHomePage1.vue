<template >
  <div>
    <el-row class="main-top main-top-border">
      <el-col :span="12">
        <div class="main-top main-top-left">
          <i class="cf-log"></i>
          <span class="log-title">长飞光纤个人销售主页</span>
        </div>
      </el-col>
      <el-col :span="6" :offset="6">
        <div style="text-align:right;line-height:60px;" class="main-top">
          <SelectBox />
        </div>
      </el-col>
    </el-row>
    <div class="main" v-show="isPerson">
      <el-row class="main-center-box "> 
        <el-col :span="12" style="margin-top:10px" class>
          <div class="grid-content main-center ">
            <!-- 左侧图表框 -->
            <el-row class="main-center-box ">
              <el-col :span="24" style="text-align:left;">
                <i class="el-icon-date"></i>
                <span class="mian-title">订单完成率</span>
                <span style="margin-left:30px;font-weight:bold;">
                  当前排名
                  <span class="icon-font">9</span>
                  <i style="font-weight:bold;color:green;font-size:1.5em" class="el-icon-bottom">2</i>
                </span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24" class="left-box">
                <!-- 订单总金额 -->
                <div>
                  <div class="mini-title">订单总金额</div>
                  <div class="mini-main">
                    <span class="mini-main-left">3000</span>
                    <span class="mini-main-right">元</span>
                  </div>
                </div>
                <div>
                  <div>
                    <span class="mini-bot-left">完成订单单位排名</span>
                    <div class="ranking-box">
                      <el-steps :active="7" finish-status="process">
                        <el-step title="移动"></el-step>
                        <el-step title="联通"></el-step>
                        <el-step title="电信"></el-step>
                        <el-step title="铁塔"></el-step>
                        <el-step title="广电"></el-step>
                        <el-step title="轨交"></el-step>
                        <el-step title="其他"></el-step>
                      </el-steps>
                    </div>
                  </div>
                  <div class="box2">
                    <Echarts10 />
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="12" style="margin-top:10px" class>
          <div class="grid-content main-center">
            <el-row class="main-center-box">
              <el-col :span="24" style="text-align:left;">
                <i class="el-icon-thumb"></i>
                <span class="mian-title">回款完成率</span>
                <span style="margin-left:30px;font-weight:bold;">
                  当前排名
                  <span class="icon-font">6</span>
                  <i style="font-weight:bold;color:#e4393c;font-size:1.5em;" class="el-icon-top">1</i>
                </span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24" class="left-box">
                <!-- 完成回款金额 -->
                <div>
                  <div class="mini-title">完成回款金额</div>
                  <div class="mini-main">
                    <span class="mini-main-left">5666</span>
                    <span class="mini-main-right">元</span>
                  </div>
                </div>

                <div>
                  <span class="mini-bot-left">回款情况排名</span>
                  <div class="ranking-box">
                    <el-steps :active="7" finish-status="process">
                      <el-step title="移动"></el-step>
                      <el-step title="联通"></el-step>
                      <el-step title="电信"></el-step>
                      <el-step title="铁塔"></el-step>
                      <el-step title="广电"></el-step>
                      <el-step title="轨交"></el-step>
                      <el-step title="其他"></el-step>
                    </el-steps>
                  </div>
                </div>
                <div class="box2">
                  <Echarts12 />
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="main" v-show="!isPerson">
      <el-row class="main-center-box">
        <el-col :span="12" style="margin-top:10px" class>
          <div class="grid-content main-center">
            <!-- 左侧图表框 -->
            <el-row class="main-center-box">
              <el-col :span="24" style="text-align:left;">
                <i class="el-icon-date"></i>
                <span class="mian-title">部门订单完成情况</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24" class="left-box">
                <!-- 订单总金额 -->
                <div>
                  <div class="mini-title">订单总金额</div>
                  <div class="mini-main">
                    <span class="mini-main-left">3000</span>
                    <span class="mini-main-right">元</span>
                  </div>
                </div>
                <div>
                  <div>
                    <!-- <span class="mini-bot-left">完成订单单位排名</span> -->
                    <div class="button-box">
                      <el-button
                        v-for="(item, index) in btnData"
                        :key="item.id"
                        @click="addClass(index,$event)"
                        :class="{ active:index==current}"
                        type="primary"
                        plain
                      >{{item.text}}</el-button>
                    </div>
                  </div>
                  <div class="box2">
                    <Echarts15 />
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="12" style="margin-top:10px" class>
          <div class="grid-content main-center">
            <el-row class="main-center-box">
              <el-col :span="24" style="text-align:left;">
                <i class="el-icon-thumb"></i>
                <span class="mian-title">部门完成率排民情况</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24" class="left-box">
                <!-- 完成回款金额 -->
                <div>
                  <div class="mini-title">完成回款金额</div>
                  <div class="mini-main">
                    <span class="mini-main-left">5666</span>
                    <span class="mini-main-right">元</span>
                  </div>
                </div>
                <div class="button-box">
                  <el-button
                    v-for="(item, index) in btnData1"
                    :key="item.id"
                    @click="addClass1(index,$event)"
                    :class="{ active:index==current1}"
                    type="primary"
                    plain
                  >{{item.text}}</el-button>
                </div>
                <div></div>
                <div class="box2">
                  <Echarts16 />
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="g-color-base" style="padding:0 20px 10px 20px; background:#E6E6E6;">
      <TodoList style="background:#EDFCF8;padding:15px;" />
    </div>
  </div>
</template>

<script>
import SelectBox from "@/components/Sales/SelectBox.vue";
import Echarts10 from "@/components/Sales/Echarts10.vue";
import Echarts11 from "@/components/Sales/Echarts11.vue";
import Echarts12 from "@/components/Sales/Echarts12.vue";
import Echarts13 from "@/components/Sales/Echarts13.vue";
import Echarts14 from "@/components/Sales/Echarts14.vue";
import Echarts15 from "@/components/Sales/Echarts15.vue";
import Echarts16 from "@/components/Sales/Echarts16.vue";
import table1 from "@/components/Sales/table1.vue";
import TodoList from "@/components/Sales/TodoList";

export default {
  // name: "hello",
  data() {
    return {
      btnData: [
        { id: 1, text: "移动" },
        { id: 2, text: "联通" },
        { id: 3, text: "电信" },
        { id: 4, text: "铁塔" },
        { id: 5, text: "广电" },
        { id: 6, text: "轨交" },
        { id: 6, text: "其他" }
      ],
      btnData1: [
        { id: 1, text: "移动" },
        { id: 2, text: "联通" },
        { id: 3, text: "电信" },
        { id: 4, text: "铁塔" },
        { id: 5, text: "广电" },
        { id: 6, text: "轨交" },
        { id: 6, text: "其他" }
      ],
      current: 0,
      current1: 0,
      isPerson: true
    };
  },
  mounted() {
    // this.drawLine();
    this.getData();
  },
  methods: {
    addClass: function(index, event) {
      debugger;
      this.current = index; //获取点击对象
      // var el = event.currentTarget;
    },
    addClass1: function(index, event) {
      debugger;
      this.current1 = index; //获取点击对象
      // var el = event.currentTarget;
    },
    // getData() {
    //   this.$axios
    //     .get(
    //       "http://10.100.131.106:8080/salesReport/querySummaryDataSalesStatements"
    //     )
    //     .then(function(response) {
    //       debugger;
    //       console.log(response);
    //       _this.option1 = response.data;
    //       _this.$refs.chart1.drawLine(response.data);
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //     });
    // }
  },
  components: {
    SelectBox,
    Echarts10,
    Echarts11,
    Echarts12,
    Echarts13,
    Echarts14,
    table1,
    Echarts15,
    Echarts16,
    TodoList
  }
};
</script>

<style scoped>
.icon-font {
  font-size: 3em;
  padding: 0 10px;
  color: #FFA500;
  font-weight: bold;
}
.active {
  background-color: #21a6ff;
  color: #fff;
}
.grid-content {
  background-color: #fff;
  padding: 10px;
  box-sizing: border-box;
}
.main {
  background-color: #e6e6e6;
}
.main-top {
  height: 60px;
  box-sizing: border-box;
}
.main-top-left {
  height: 60px;
  line-height: 60px;
  text-align: left;
}
.main-top-border {
  border-bottom: 2px solid #3ba4ef;
  margin: 0 20px;
}
.main-center {
  height: 90vh;
  min-height: 800px;
  margin: 10px;
  box-sizing: border-box;
}
.min-width {
  min-width: 925px;
}
.main-center-box {
  margin: 0 10px;
}
.cf-log {
  display: inline-block;
  margin-right: 20px;
  height: 55px;
  width: 190px;
  /* border: 1px solid red; */
  box-sizing: border-box;
  background: url("../../assets/logo1.png") no-repeat center;
  background-size: 100% 50%;
}
.log-title {
  display: inline-block;
  font-size: 1.5em;
  font-weight: bold;
  color: #00cbff;
  box-sizing: border-box;
  vertical-align: top;
}
.main-icon {
  color: #6bc0fa;
  font-size: 1.1em;
}
.mian-title {
  color: #0054af;
  font-weight: bold;
  font-size: 1em;
}
.left-box {
  height: 81vh;
  min-height: 360px;
  background: #edfcf8;
  box-sizing: border-box;
  /* border: 1px solid red; */
  padding: 10px;
  margin-top: 10px;
  text-align: left;
}
.mini-title {
  border-bottom: 2px dotted #ccc;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
}
.mini-main {
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  color: #06c3e5;
  margin-bottom: 5px;
}
.mini-main-left {
  border-bottom: 1px solid #06c3e5;
  font-weight: bold;
  margin-top: 5px;
}
.mini-main-right {
  margin-top: 5px;
}
.mini-bot-left {
  color: #bdc2cb;
  border-bottom: 1px solid #bdc2cb;
  margin-top: 5px;
  margin-left: 10px;
  font-size: 0.9em;
}

.mini-circ {
  width: 100%;
  display: flex;
  padding: 10px;
  justify-content: center;
}
.right-title {
  font-weight: bold;
  color: #21a6ff;
  border-bottom: 1px solid #ccc;
  height: 30px;
  line-height: 30px;
}
.button-box {
  padding: 5px;
  margin: 10px;
}
.percentage {
  font-size: 0.8em;
}
.percentage .el-row {
  height: 25px;
}
.box1 {
  height: 90px;
  margin-bottom: 10px;
  background: #edfcf8;
  box-sizing: border-box;
}
.box2 {
  padding: 10px;

  box-sizing: border-box;
  padding-top: 20px;
}
.border {
  border: 1px solid red;
}
.close-title {
  height: 40px;
  line-height: 40px;
  color: #52b5fe;
  font-size: 0.8em;
}
.close-content {
  height: 50px;
  line-height: 50px;
  color: #8ee7ce;
  font-size: 1.8em;
  font-weight: bold;
}
.bg-color-base {
  background: #edfcf8;
}
.ranking-box {
  margin: 50px;
}
</style>
