<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="title mian0">{{title}}</div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="8">
        <div class="mian1 topm leftm bottomm bg">
          <Ranking />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="mian1 topm rightm bottomm bg">
          <div>
            <TodoList />
          </div>
        </div>
      </el-col>
       <el-col :span="8">
        <div class="mian1 topm rightm bottomm bg">
          <div>
            <TimeOutList />
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="8">
        <div class="mian leftm bottomm bg">
          <Echarts1 />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="mian bg">
          <Echarts2 />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="mian rightm bg">
          <Echarts3 />
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="8">
        <div class="mian leftm bottomm bg">
          <Echarts4 />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="mian bg" style="position:relative">
          <div class="sel-box">
            <el-select size="mini" v-model="value" @change="change" clearable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-select size="mini" v-model="value1" @change="change1" clearable placeholder="请选择">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <Echarts5 ref="chart5" />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="mian rightm bg">
          <Echarts6 ref="chart6" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import TodoList from "@/components/homepage/TodoList";
import Ranking from "@/components/homepage/Ranking";
import Echarts1 from "@/components/homepage/Echarts1";
import Echarts2 from "@/components/homepage/Echarts2";
import Echarts3 from "@/components/homepage/Echarts3";
import Echarts4 from "@/components/homepage/Echarts4";
import Echarts5 from "@/components/homepage/Echarts5";
import Echarts6 from "@/components/homepage/Echarts6";
import TimeOutList from "@/components/homepage/TimeOutList";

export default {
  data() {
    return {
      title: "办事处销售主页",
      options: [
        {
          value: 1,
          label: "北京"
        },
        {
          value: 2,
          label: "河北"
        },
        {
          value: 3,
          label: "内蒙古"
        }
      ],
      value: "北京",
      options1: [
        {
          value: 1,
          label: "移动"
        },
        {
          value: 2,
          label: "联通"
        },
        {
          value: 3,
          label: "电信"
        }
      ],
      value1: "移动",
      data1: [323, 111, 444, 114, 520, 666, 599, 235],
      data2: [111, 433, 233, 520, 520, 50, 99, 222],
      data3: [96, 200, 150, 350, 100, 50, 180, 120],
      data4: [110, 180, 160, 230, 200, 100, 120, 60]
    };
  },
  mounted() {},
  methods: {
    change: function() {
      // this.$refs
      this.$refs.chart5.drawLine(this.data1, this.data2);
      this.$refs.chart6.drawLine(this.data1, this.data2);
    },
    change1: function() {
      // this.$refs
      this.$refs.chart5.drawLine(this.data3, this.data4);
      this.$refs.chart6.drawLine(this.data3, this.data4);
    }
  },
  components: {
    TodoList,
    Ranking,
    Echarts1,
    Echarts2,
    Echarts3,
    Echarts4,
    Echarts5,
    Echarts6,
    TimeOutList
  }
};
</script>

<style scoped>
.mian0 {
  height: 4vh;
  line-height: 4vh;
  font-weight: bold;
  font-size: 16px;
  background: #fff;
  box-sizing: border-box;
}
.mian {
  height: 35vh;
  background: #fff;
  box-sizing: border-box;
}
.mian1 {
  height: 20vh;
  background: #fff;
  box-sizing: border-box;
}
.topm {
  margin-top: 1vh;
}
.rightm {
  margin-right: 1vh;
}
.bottomm {
  margin-bottom: 1vh;
}
.leftm {
  margin-left: 1vh;
}
.el-row {
  box-sizing: border-box;
}
.bg {
  background: #edfcf8;
}
.sel-box {
  /* position: relative; */
  /* bottom: 50px; */
  padding-top: 0.5vh;
}
</style>
