<template>
  <div>
    <el-row>
      <el-col :span="24" :gutter="20">
        <div>
          <h1 class="title">{{title}}</h1>
        </div>
      </el-col>
    </el-row>
    <el-row class="main">
      <el-col :span="16" :gutter="20">
        <div class="echarts-box">
          <Echarts1 />
        </div>
      </el-col>
      <el-col :span="8" :gutter="20">
        <div class="echarts-box margin-left">
          <Echarts2 />
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" :gutter="20">
        <div>
          <div>
            <h1 class="title">{{title1}}</h1>
          </div>
          <TableReport />
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Echarts1 from "@/components/demo/Echarts1";
import Echarts2 from "@/components/demo/Echarts2";
import TableReport from "@/components/demo/TableReport";

export default {
  data() {
    return {
      title: "集团主要财务状况",
      title1: "财务指标明细"
    };
  },
  mounted() {},
  methods: {},
  components: {
    Echarts1,
    Echarts2,
    TableReport
  }
};
</script>

<style scoped>
.title {
  font-size: 1.5em;
  font-weight: bold;
  margin: 2vh;
}
.main {
  background-color: #98f5ff;
  padding: 2vh;
}
.echarts-box {
  background: #fff;
  padding: 1vh;
}
.margin-left {
  margin-left: 20px;
}
</style>
