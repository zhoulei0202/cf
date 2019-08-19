<template>
  <div>
    <el-row>
      <el-col :span="24">综合排名</el-col>
    </el-row>
    <el-row>
      <el-col :span="8">订单完成率：</el-col>
      <el-col :span="14">
        当前排名
        <span class="rank blue">9</span>
        <!-- <i class="el-icon-bottom icon bottom-color"></i> -->
        <span class="bottom-color rank-size">2019-8-12上升2名</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">回款完成率：</el-col>
      <el-col :span="14">
        当前排名
        <span class="rank red">10</span>
        <!-- <i class="el-icon-top icon top-color"></i> -->
        <span class="top-color rank-size">2019-8-12下降3名</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">逾期预警：</el-col>
      <el-col :span="14">
        <span class=" red">逾期待办事宜
          <span class="rank red">10</span>
          件</span>
        <!-- <i class="el-icon-top icon top-color"></i> -->
        <!-- <span class="top-color rank-size">3</span> -->
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todoList: [
        {
          id: 1,
          value: "今天为您分配的新建潜在客户",
          label: "Swich(Sample)andy"
        }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.el-row {
  text-align: left;
  height: 4.5vh;
  line-height: 4.5vh;
  margin: 0.5vh 0 0.5vh 2vh;
  font-weight: bold;
  font-size: 1.2em;
}
.rank {
  font-size: 1.8em;
  display: inline-block;
  width: 1.5em;
  text-align: center;
}
.blue {
  color: #1db6f0;
}
.red {
  color: #ff0000;
}
.icon {
  font-size: 1.8em;
  font-weight: 800;
}

.top-color {
  color: #ff0000;
}
.bottom-color {
  color: #92d050;
}
.rank-size{
  font-size: 1.2em;

}
</style>
