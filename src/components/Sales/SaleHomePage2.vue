<template >
  <div>
    <div class="main" v-show="isPerson">
      <el-row class="main-center-box">
        <el-col :span="24" style="margin-top:10px">
          <div class="grid-content main-center">
            <!-- 左侧图表框 -->
            <el-row class="main-center-box">
              <el-col :span="24" style="text-align:left;">
                <i class="el-icon-date"></i>
                <span class="mian-title">订单完成率</span>
                <span style="margin-left:30px;font-weight:bold;">
                  当前排名
                  <span class="icon-font">9</span>
                  <i style="font-weight:bold;color:#92d050;font-size:1.5em" class="el-icon-bottom">2</i>
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
                  <div class="box2">
                    <Echarts10 />
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// import SelectBox from "@/components/Sales/SelectBox.vue";
import Echarts10 from "@/components/Sales/Echarts10.vue";
// import Echarts11 from "@/components/Sales/Echarts11.vue";
// import Echarts12 from "@/components/Sales/Echarts12.vue";
// import Echarts13 from "@/components/Sales/Echarts13.vue";
// import Echarts14 from "@/components/Sales/Echarts14.vue";
// import Echarts15 from "@/components/Sales/Echarts15.vue";
// import Echarts16 from "@/components/Sales/Echarts16.vue";
// import table1 from "@/components/Sales/table1.vue";
// import TodoList from "@/components/Sales/TodoList";

export default {
  // name: "hello",
  data() {
    return {
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
    }
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
    // SelectBox,
    Echarts10
    // Echarts11,
    // Echarts12,
    // Echarts13,
    // Echarts14,
    // table1,
    // Echarts15,
    // Echarts16,
    // TodoList
  }
};
</script>

<style scoped>
.icon-font {
  font-size: 3em;
  padding: 0 10px;
  color: #1db6f0;
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
  /* background-color: #e6e6e6; */
}
/* .main-top {
  height: 60px;
  box-sizing: border-box;
} */
/* .main-top-left {
  height: 60px;
  line-height: 60px;
  text-align: left;
} */
/* .main-top-border {
  border-bottom: 2px solid #3ba4ef;
  margin: 0 20px;
} */
/* .main-center {
  height: 90vh;
  min-height: 800px;
  margin: 10px;
  box-sizing: border-box;
} */
/* .min-width {
  min-width: 925px;
} */
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
  /* height: 81vh; */
  /* min-height: 360px; */
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
/* .mini-bot-left {
  color: #bdc2cb;
  border-bottom: 1px solid #bdc2cb;
  margin-top: 5px;
  margin-left: 10px;
  font-size: 0.9em;
} */

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
/* .bg-color-base { */
  /* background: #edfcf8; */
/* } */
.ranking-box {
  margin: 50px;
}
</style>
