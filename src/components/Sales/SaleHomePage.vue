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
    <div class="main">
      <el-row class="main-center-box">
        <el-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="24"
          :xl="12"
          style="margin-top:10px"
          class="min-width"
        >
          <div class="grid-content main-center">
            <!-- 左侧图表框 -->
            <el-row class="main-center-box">
              <el-col :span="24" style="text-align:left;">
                <i class="el-icon-date"></i>
                <span class="mian-title">个人订单情况</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10" class="left-box" style="margin:10px 10px 0 10px;">
                <!-- 个人订单任务 -->
                <div>
                  <div class="mini-title">个人订单任务</div>
                  <div class="mini-main">
                    <span class="mini-main-left">3000</span>
                    <span class="mini-main-right">个</span>
                  </div>
                </div>
                <!-- 完成下单数 -->
                <div>
                  <div class="mini-title">完成下单数</div>
                  <div class="mini-main">
                    <span class="mini-main-left">3000</span>
                    <span class="mini-main-right">个</span>
                  </div>
                </div>
                <!-- 订单总金额 -->
                <div>
                  <div class="mini-title">订单总金额</div>
                  <div class="mini-main">
                    <span class="mini-main-left">3000</span>
                    <span class="mini-main-right">元</span>
                  </div>
                </div>
                <!-- 三个环形图 -->
                <div>
                  <div>
                    <span class="mini-bot-left">完成订单排名</span>
                    <!-- <span class="mini-bot-right">Top3</span> -->
                  </div>
                  <div class="mini-circ">
                    <Echarts10 />
                  </div>
                </div>
              </el-col>
              <el-col :span="13" class="left-box">
                <!-- 右侧团队订单完成排名情况 -->
                <div class="right-title">团队订单完成排名情况</div>
                <div class="button-box">
                  <el-button
                    v-for="(item, index) in btnData"
                    :key="item.id"
                    @click="addClass(index,$event)"
                    :class="{ active:index==current}"
                    type="primary"
                    plain
                    size="mini"
                  >{{item.text}}</el-button>
                  <!-- <el-button type="primary" plain size="mini">订单任务</el-button>
                  <el-button type="primary" plain size="mini">完成下单数</el-button>-->
                </div>
                <el-row class="main-center-box">
                  <el-col :span="12">
                    <div class="percentage">
                      <el-row v-for="item in percentageData" :key="item.value">
                        <el-col :span="6">{{item.name}}</el-col>
                        <el-col :span="18">
                          <el-progress :percentage="item.value" :format="format"></el-progress>
                        </el-col>
                      </el-row>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div>
                      <Echarts11 />
                    </div>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="24"
          :xl="12"
          style="margin-top:10px"
          class="min-width"
        >
          <div class="grid-content main-center">
            <el-row class="main-center-box">
              <el-col :span="24" style="text-align:left;">
                <i class="el-icon-thumb"></i>
                <span class="mian-title">个人回款情况</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="11" class style="margin:10px 10px 0 10px;">
                <div class="box1">
                  <el-row class="main-center-box">
                    <el-col :span="8" style="text-align:center;">
                      <div class="close-title">个人回款任务数</div>
                      <div class="close-content">125</div>
                    </el-col>
                    <el-col :span="8" style="text-align:center;">
                      <div class="close-title">完成回款金额</div>
                      <div class="close-content">2588445</div>
                    </el-col>
                    <el-col :span="8" style="text-align:center;">
                      <div class="close-title">完成率</div>
                      <div class="close-content">85%</div>
                    </el-col>
                  </el-row>
                </div>
                <div class="box2">
                  <Echarts12 />
                </div>
              </el-col>
              <el-col :span="12" class="left-box">
                <!-- 右侧团队订单完成排名情况 -->
                <div class="right-title">部门完成率排名情况</div>
                <div>
                  <Echarts13 />
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
      <el-row class="main-center-box">
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="7">
          <div class="grid-content main-center">
            <div>
              <el-row  class="main-center-box">
                <el-col :span="24" style="text-align:left;">
                  <i class="el-icon-medal"></i>
                  <span class="mian-title">馈线个人订单情况</span>
                </el-col>
              </el-row>

              <div class="bg-color-base" style="margin:10px 10px 15px 10px;">
                <el-row >
                  <el-col :span="6" style="text-align:center;">
                    <div class="close-title">订单任务数</div>
                    <div class="close-content">125</div>
                  </el-col>
                  <el-col :span="6" style="text-align:center;">
                    <div class="close-title">完成订单数</div>
                    <div class="close-content">2566445</div>
                  </el-col>
                  <el-col :span="6" style="text-align:center;">
                    <div class="close-title">金额</div>
                    <div class="close-content">65%</div>
                  </el-col>
                  <el-col :span="6" style="text-align:center;">
                    <div class="close-title">完成率</div>
                    <div class="close-content">85%</div>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div class="right-title bg-color-base" style="text-align:left;" >销售运营商排名</div>
            <el-row :gutter="10">
              <el-col :span="12" class="bg-color-base">
                <table1 />
              </el-col>
              <el-col :span="12" >
                <Echarts14 />
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="7">
          <div class="grid-content main-center">
            <div>
              <el-row>
                <el-col :span="24" style="text-align:left;">
                  <i class="el-icon-aim"></i>
                  <span class="mian-title">新产品个人订单情况</span>
                </el-col>
              </el-row>

              <div class="bg-color-base" style="margin:10px 10px 15px 10px;">
                <el-row>
                  <el-col :span="6" style="text-align:center;">
                    <div class="close-title">订单任务数</div>
                    <div class="close-content">125</div>
                  </el-col>
                  <el-col :span="6" style="text-align:center;">
                    <div class="close-title">完成订单数</div>
                    <div class="close-content">2566445</div>
                  </el-col>
                  <el-col :span="6" style="text-align:center;">
                    <div class="close-title">金额</div>
                    <div class="close-content">65%</div>
                  </el-col>
                  <el-col :span="6" style="text-align:center;">
                    <div class="close-title">完成率</div>
                    <div class="close-content">85%</div>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div class="right-title bg-color-base" style="text-align:left;">销售运营商排名</div>
            <el-row :gutter="10">
              <el-col :span="12" class="bg-color-base">
                <table1 />
              </el-col>
              <el-col :span="12" class>
                <Echarts14 />
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="5">
          <div class="grid-content main-center">
            <el-row class>
              <el-col :span="24" style="text-align:left;">
                <i class="el-icon-setting"></i>
                <span class="mian-title">客户关系管理</span>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="5">
          <div class="grid-content main-center">
            <el-row class>
              <el-col :span="24" style="text-align:left;">
                <i class="el-icon-bangzhu"></i>
                <span class="mian-title">回款匹配机制</span>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
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
import table1 from "@/components/Sales/table1.vue";

export default {
  // name: "hello",
  data() {
    return {
      percentageData: [
        {
          name: "张三",
          value: 88
        },
        {
          name: "李四",
          value: 77
        },
        {
          name: "选项3",
          value: 66
        },
        {
          name: "选项4",
          value: 55
        }
      ],
      btnData: [
        { id: 1, text: "完成率" },
        { id: 2, text: "订单任务" },
        { id: 3, text: "完成下单数" }
      ],
      current: 0
    };
  },
  mounted() {
    // this.drawLine();
  },
  methods: {
    format(percentage) {
      return "";
    },
    addClass: function(index, event) {
      debugger;
      this.current = index; //获取点击对象
      // var el = event.currentTarget;
      this.percentageData = [
        {
          name: "张三1",
          value: 99
        },
        {
          name: "张三2",
          value: 88
        },
        {
          name: "张三3",
          value: 77
        },
        {
          name: "张三4",
          value: 66
        },
        {
          name: "张三5",
          value: 55
        },

        {
          name: "张三6",
          value: 50
        },
        {
          name: "张三7",
          value: 44
        },
        {
          name: "张三8",
          value: 33
        },
        {
          name: "张三9",
          value: 22
        },
        {
          name: "张三10",
          value: 11
        }
      ];
    }
  },
  components: {
    SelectBox,
    Echarts10,
    Echarts11,
    Echarts12,
    Echarts13,
    Echarts14,
    table1
  }
};
</script>

<style scoped>
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
  height: 44vh;
  min-height: 425px;
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
  height: 55px;
  width: 140px;
  /* border: 1px solid red; */
  box-sizing: border-box;
  background: url("../../assets/th.png") no-repeat;
  background-size: 100% 100%;
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
  font-size: 1.1em;
}
.left-box {
  height: 38vh;
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
/* .mini-bot-right {
  color: #06c3e5;
  margin-top: 5px;
  margin-left: 10px;
  font-size: 0.9em;
} */
.mini-circ {
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
  margin-bottom: 10px;
}
.percentage {
  font-size: 0.8em;
}
.percentage .el-row {
  /* border: 1px solid red; */
  /* font-size: 14px; */
  height: 25px;
}
.box1 {
  height: 90px;
  /* border: 1px solid red; */
  margin-bottom: 10px;
  background: #edfcf8;
  box-sizing: border-box;
}
.box2 {
  height: 26vh;
  min-height: 260px;
  /* border: 1px solid red; */
  background: #edfcf8;
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
</style>
