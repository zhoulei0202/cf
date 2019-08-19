<template>
  <div class="bg">
    <div class="search">
      <div>
        省份：
        <el-select size="mini" v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>

      <div>
        <el-date-picker
          size="mini"
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </div>
      <div>
        <el-button size="mini" type="primary">查询</el-button>
      </div>
    </div>
    <div>
      <el-row gutter="10">
        <el-col :span="16">
          <el-row gutter="10" style="margin-bottom:2vh;">
            <el-col :span="12">
              <div class="title">联通及长飞需求量月走势</div>
              <Echarts1 />
            </el-col>
            <el-col :span="12">
              <Echarts2 />
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <div class="title">供应商供货量排名</div>
              <Echarts3 />
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="8" style=" background: #fff;">
          <div class="right-title">
            <div>
              办事处：
              <el-select size="mini" v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <div>
              <a href="#">详情<<<</a>
            </div>
          </div>
          <el-tabs v-model="activeName">
            <el-tab-pane label="需求排名" name="first">
              <Echarts4 ref="chart4" />
            </el-tab-pane>
            <el-tab-pane label="占比排名" name="second">
              <Echarts5 ref="chart5" />
            </el-tab-pane>
            <el-tab-pane label="采购排名" name="third">
              <Echarts6 ref="chart6" />
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import Echarts1 from "@/components/demo2/Echarts1";
import Echarts2 from "@/components/demo2/Echarts2";
import Echarts3 from "@/components/demo2/Echarts3";
import Echarts4 from "@/components/demo2/Echarts4";
import Echarts5 from "@/components/demo2/Echarts5";
import Echarts6 from "@/components/demo2/Echarts6";

export default {
  data() {
    return {
      title: "-长飞联通商城销售分析-",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      value1: "",
      activeName: "first"
    };
  },
  mounted() {},
  methods: {},
  components: {
    Echarts1,
    Echarts2,
    Echarts3,
    Echarts4,
    Echarts5,
    Echarts6
  }
};
</script>

<style scoped>
.bg {
  background: #eeeeee;
}
.search {
  display: flex;
  justify-content: space-around;
  height: 8vh;
  align-items: center;
  width: 50%;
}
.right-title {
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  margin-top: 2vh;
}
.title {
  text-align: left;
  color: #3398db;
  height: 4vh;
  line-height: 4vh;
  background: #fff;
  padding-left: 2vw;
}
</style>
