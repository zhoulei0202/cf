<template>
  <div style="background: #ccc;">
    <el-row>
      <el-col :span="9" :gutter="10">
        <div class="mian">
          <div class="title">应收应付</div>
          <Echarts1 />
        </div>
      </el-col>
      <el-col :span="5" :gutter="10">
        <div class="mian">
          <div class="title">主营业务收入</div>
          <div class="prog-box">
            <el-progress
              type="dashboard"
              :stroke-width="20"
              :percentage="55"
              :color="colors"
              :width="proWidth"
            ></el-progress>
          </div>
        </div>
      </el-col>
      <el-col :span="5" :gutter="10">
        <div class="mian">
          <div class="title">主营业务利润</div>
          <div class="prog-box">
            <el-progress
              type="dashboard"
              :stroke-width="20"
              :percentage="80"
              :color="colors"
              :width="proWidth"
            ></el-progress>
          </div>
        </div>
      </el-col>
      <el-col :span="5" :gutter="10">
        <div class="mian">
          <div class="title">利润率</div>
          <div class="prog-box">
            <el-progress
              type="dashboard"
              :stroke-width="20"
              :percentage="66"
              :color="colors"
              :width="proWidth"
            ></el-progress>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="14" :gutter="10">
        <div class="mian1">
          <div class="title">主营业务利润</div>
          <TableReport />
        </div>
      </el-col>
      <el-col :span="10" :gutter="10">
        <div class="mian1">
          <div class="title">关键指标分析</div>
          <div>
            <Echarts2 />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Echarts1 from "@/components/demo1/Echarts1";
import Echarts2 from "@/components/demo1/Echarts2";
import TableReport from "@/components/demo1/TableReport";

export default {
  data() {
    return {
      colors: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 }
      ],
      proWidth: 310
    };
  },
  mounted() {
    this.getWidth();
  },
  methods: {
    getWidth: function() {
      let _width = document.body.clientWidth;
      this.proWidth = 0.17 * _width;
    }
  },
  components: {
    Echarts1,
    Echarts2,
    TableReport
  }
};
</script>

<style scoped lang="scss">
.title {
  height: 4vh;
  line-height: 4vh;
  padding-left: 1vh;
  text-align: left;
  border-bottom: 1px solid #ccc;
}
.mian {
  height: 40vh;
  margin: 1vh;
  background: #fff;
  box-sizing: border-box;
}
.mian1 {
  height: 55vh;
  margin: 1vh;
  background: #fff;
  box-sizing: border-box;
}
.prog-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
}
</style>


