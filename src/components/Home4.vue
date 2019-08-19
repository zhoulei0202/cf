<template>
  <div class="main-box">
    <h1>{{msg}}</h1>
    <el-row class="base-height">
      <el-col :span="2">
        <div :v-show="false">1</div>
      </el-col>
      <el-col :span="4">
        <div></div>
        <Echarts />
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light">
          <Echarts1 />
        </div>
      </el-col>
      <el-col :span="4">
        <div></div>
        <Echarts2 />
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light">
          <Echarts3 />
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light">
          <Echarts9 />
        </div>
      </el-col>
      <el-col :span="2">
        <div></div>
      </el-col>
    </el-row>
    <el-row class="base-height">
      <el-col :span="24">
        <div>
          <Echarts4 />
        </div>
      </el-col>
    </el-row>

    <el-row class="bottom-height">
      <el-col :span="12">
        <div>
          <Echarts5 />
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <Echarts6 />
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Echarts from "@/components/Echarts";
import Echarts1 from "@/components/Echarts1";
import Echarts2 from "@/components/Echarts2";
import Echarts3 from "@/components/Echarts3";
import Echarts4 from "@/components/Echarts4";
import Echarts5 from "@/components/Echarts5";
import Echarts6 from "@/components/Echarts6";
import Echarts7 from "@/components/Echarts7";
import Echarts8 from "@/components/Echarts8";
import Echarts9 from "@/components/Echarts9";

export default {
  // name: "HelloWorld",
  data() {
    return {
      msg: "库存图表展示"
    };
  },
  methods: {
    // goDashboard() {
    //   this.$router.push({ path: "/Echarts" });
    // }
  },
  components: {
    Echarts,
    Echarts1,
    Echarts2,
    Echarts3,
    Echarts4,
    Echarts5,
    Echarts6,
    Echarts7,
    Echarts8,
    Echarts9
  }
};
</script>

<style scoped>
h1 {
  font-weight: normal;
  color: white;
  margin-top: 10px;
}
.main-box {
  height: 100vh;
  background-image: url(../assets/nybj.png);
  background-size: 100% 100%;
  overflow: hidden;
}
.base-height {
  height: 30vh;
  margin: 0 30px;
}
.bottom-height {
  height: 25vh;
}
</style>
